const size = 100
const lineWidth = 3
const data = d3.range(size).map(d3.randomNormal(0.4, 0.1)).sort().reverse()

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

const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0])

const barWidth = width / size

const bar = svg.selectAll('.bar')
              .data(data)
              .enter().append('rect')
              .attr('class', 'bar')
              .attr('fill', 'blue')
              .attr('x', (d, i) => margin.left + (barWidth * i))
              .attr('width', (width / size) - 1)
              .attr('y', d => height - y(d))
              .attr('height', d => y(d))

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

const drag_behavior = d3.drag()
                        .on("start", dragStarted)
                        .on("drag", dragged)

const line = svg.append('line')
                .attr('class', 'line')
                .attr('stroke', 'red')
                .attr('stroke-width', lineWidth)
                .attr('x1', margin.left)
                .attr('y1', '200')
                .attr('x2', width + margin.left)
                .attr('y2', '200')
                .call(drag_behavior)