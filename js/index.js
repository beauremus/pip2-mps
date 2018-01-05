/* global DPM ACLD */
/* global Plot */
/* global requests settings plots */

const dpm = new DPM()
const acl = new ACLD()
const allPlots = []

function makeSetting(type) {
  return (deviceName) => {
    if (type === 'reset') {
      return () => acl.run(`reset ${deviceName}`)
    } else if (type === 'set') {
      return (event) => acl.run(`set ${deviceName} ${event.target.value}`)
    } else if (type === 'toggle') {
      return (event) => {
        if (event.target.value === 'ON') {
          acl.run(`off ${deviceName}`)
        } else if (event.target.value === 'OFF') {
          acl.run(`on ${deviceName}`)
        }
      }
    }
  }
}

function dataToTextcontent(id, options = { units: false }) {
  return (dpmData, dpmInfo) => {
    const dataElement = document.querySelector(`#${id}`)

    if (isNaN(dpmData.data)) {
      dataElement.textContent = `${dpmData.data} ${dpmInfo.units}`
      dataElement.value = dpmData.data
      return
    }

    let display = Number(dpmData.data).toFixed(3)

    if (dataElement !== document.activeElement) {
      dataElement.textContent = display
      dataElement.value = display
    }
  }
}

function booleanToBackground(id) {
  return (dpmData) => {
    const element = document.querySelector(`#${id}`)

    if (dpmData.data) {
      element.setAttribute('style', 'background-color:lime')
    } else {
      element.setAttribute('style', 'background-color:red')
    }
  }
}

function booleanToOnOff(id) {
  return (dpmData) => {
    if (dpmData.data) {
      document.querySelector(`#${id}`).textContent = 'ON'
    } else {
      document.querySelector(`#${id}`).textContent = 'OFF'
    }
  }
}

function output(type) {
  return (id) => {
    if (type === 'text') {
      return dataToTextcontent(id)
    } else if (type === 'status') {
      return booleanToBackground(id)
    } else if (type === 'onOff') {
      return booleanToOnOff(id)
    }
  }
}

for (let setting of settings) {
  const element = document.querySelector(`#${setting.id}`)

  element.addEventListener(
    setting.eventType,
    makeSetting(setting.type)(setting.device)
  )
}

for (let request of requests) {
  if (request.hasOwnProperty('bit')) {
    dpm.addRequest(
      request.device,
      output(request.output)(request.id, { statusBit: request.bit })
    )
  } else {
    dpm.addRequest(request.device, output(request.output)(request.id))
  }
}

for (let plot of plots) {
  const newPlot = new Plot({
    type: plot.type,
    target: document.querySelector(`#${plot.id}`)
  })
  allPlots.push(newPlot)
  dpm.addRequest(plot.device, (dpmData, dpmInfo) => {
    newPlot.draw(dpmData.data, dpmInfo)
  })
}

dpm.start()
