const dpm = new DPM()
const acl = new ACLD()
const lineWidth = 3

// Use the margin convention practice
const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
}
// Use the window's width
const width = window.innerWidth - margin.left - margin.right

// Use the window's height
const height = window.innerHeight - margin.top - margin.bottom

// The number of datapoints
let n = 4000

// 6. Y scale will use the randomly generate number
const yScale = d3.scaleLinear()
  .domain([0, 80]) // input
  .range([height, 0]) // output

const path = d3.line()
  .x((d, i) => xScale(i)) // set the x values for the line generator
  .y((d) => yScale(d)) // set the y values for the line generator

// 5. X scale will use the index of our data
const xScale = d3.scaleLinear()
  .domain([0, n - 1]) // input
  .range([0, width]) // output

// An array of objects of length N. Each object has key -> value pair, the key being 'y' and the value is a random number
let dataset = []

// Add the SVG to the page and employ #2
const svg = d3.select('#one')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

function bringToFront(input) {
  if(typeof(input) === 'string') {
    element = document.querySelector(input)
  } else {
    element = input
  }

  svg.node().appendChild(element)
}

function updateBars(data, info) {
  const dataArray = new Float32Array(data.data, 4*5)
  dataset = Array.from(dataArray)

  svg.selectAll('.path').remove()

  // Append the path, bind the data, and call the line generator
  svg.append('path')
    .datum(dataset) // Binds data to the line
    .attr('class', 'path') // Assign a class for styling
    .attr('d', path) // Calls the line generator

  bringToFront('.threshold')
}

function updateLine(line) {
  return (dpmData, dpmInfo) => {
    d3.select(line)
      .attr('transform', `translate(0, ${yScale(dpmData.data)})`)

    d3.select(line).select('.text').text(dpmData.data.toFixed(2))

    const valueField = document.querySelector('#threshold .value')
    valueField.textContent = dpmData.data
  }
}

function moveLine() {
  let dy = d3.event.sourceEvent.offsetY - margin.top

  if (dy >= height) dy = height
  if (dy <= lineWidth) dy = lineWidth

  d3.select(this)
    .attr('transform', `translate(0, ${dy})`)
}

function updateText() {
  d3.select(this).select('.text')
    .text(yScale.invert(d3.event.y).toFixed(2))
}

function dragStarted() {
  d3.select(this).raise()
  dpm.stop()
}

function dragged() {
  moveLine.apply(this)
  updateText.apply(this)
}

function dragStopped() {
  acl.run(`set G:BEAU ${yScale.invert(d3.event.y)}`)
  dpm.start()
}

const dragBehavior = d3.drag()
  .on('start', dragStarted)
  .on('drag', dragged)
  .on('end', dragStopped)

const threshold = svg.append('g')
  .attr('class', 'threshold')
  .attr('transform', `translate(0, ${height - margin.bottom - lineWidth})`)
  .call(dragBehavior)

const line = threshold.append('line')
  .attr('stroke', 'red')
  .attr('stroke-width', lineWidth)
  .attr('x1', 0)
  .attr('x2', width)

const text = threshold.append('svg:text')
  .attr('class', 'text')
  .attr('dx', -10)
  .attr('dy', -10)

dpm.addRequest('G:BEAUARR[0:3999].RAW@P,1000', updateBars)
dpm.addRequest('G:BEAU@P,67', updateLine('.threshold'))

dpm.start()