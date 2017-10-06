const size = 200
const lineWidth = 3
//let data = d3.range(size).map(d3.randomNormal(0.4, 0.1)).sort().reverse()
const dpm = new DPM()
let bar
let y

const formatCount = d3.format(',.0f')

const svg = d3.select('svg')
const margin = {
  top: 10,
  right: 30,
  bottom: 30,
  left: 30
}
const width = +svg.attr('width') - margin.left - margin.right
const height = +svg.attr('height') - margin.top - margin.bottom

const x = d3.scaleLinear()
  .rangeRound([0, width])

const barWidth = width / size

function bringToFront(input) {
  if(typeof(input) === 'string') {
    element = document.querySelector(input)
  } else {
    element = input
  }

  svg.node().appendChild(element)
}

function updateBars(data, info) {
  const dataArray = new Float32Array(data.data, 20)

  y = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([height, 0])

  bar = svg.selectAll('.bar')
    .data(dataArray)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('fill', 'blue')
    .attr('x', (d, i) => margin.left + (barWidth * i))
    .attr('width', (width / size) - 1)
    .attr('y', d => height - d)
    .attr('height', d => d)

  bringToFront('.line')
}

function dragStarted() {
  d3.select(this).raise()
}

function dragged(shape) {
  let dy = d3.event.sourceEvent.offsetY

  if (dy >= height) dy = height
  if (dy <= lineWidth) dy = lineWidth

  d3.select(this)
    .attr('y1', dy)
    .attr('y2', dy)
}

function dragStopped() {
  //TODO: Set threshold
}

const dragBehavior = d3.drag()
  .on("start", dragStarted)
  .on("drag", dragged)
  .on('end', dragStopped)

function updateLine(line) {
  return (dpmData, dpmInfo) => {
    d3.select(line)
      .attr('y1', dpmData.data)
      .attr('y2', dpmData.data)

    const valueField = document.querySelector('#threshold .value')
    valueField.textContent = dpmData.data
  }
}

const line = svg.append('line')
  .attr('class', 'line')
  .attr('stroke', 'red')
  .attr('stroke-width', lineWidth)
  .attr('x1', margin.left)
  .attr('y1', lineWidth)
  .attr('x2', width + margin.left)
  .attr('y2', lineWidth)
  .call(dragBehavior)

dpm.addRequest('G:BEAUARR{0:}.RAW@p,1000', updateBars)
dpm.addRequest('G:BEAU', updateLine('.line'))

dpm.start()