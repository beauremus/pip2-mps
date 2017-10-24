const dpm = new DPM()
const acl = new ACLD()

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

function output(type) {
  return (id) => {
    if (type === 'text') {
      return (dpmData, dpmInfo) => {
        let display = Number(dpmData.data)

        if (isNaN(display)){
          display = dpmData.data
        } else {
          display = `${display.toFixed(3)} ${dpmInfo.units}`
        }

        document.querySelector(`#${id}`).textContent = display
      }
    } else if (type === 'status') {
      return (dpmData, dpmInfo) => {
        const element = document.querySelector(`#${id}`)

        if (dpmData.data) {
          element.setAttribute('style', 'background-color:lime')
        } else {
          element.setAttribute('style', 'background-color:red')
        }
      }
    } else if (type === 'value') {
      return () => {
        console.error("Beau hasn't implemented value")
      }
    } else if (type === 'onOff') {
      return (dpmData, dpmInfo) => {
        if (dpmData.data) {
          document.querySelector(`#${id}`).textContent = 'ON'
        } else {
          document.querySelector(`#${id}`).textContent = 'OFF'
        }
      }
    }
  }
}

function plot(type) {
  return (id) => {
    return (dpmData, dpmInfo) => console.error("Beau hasn't implemented plots")
  }
}

for (setting of settings) {
  const element = document.querySelector(`#${setting.id}`)

  element.addEventListener(
    setting.eventType,
    makeSetting(setting.type)(setting.device)
  )
}

for (request of requests) {
  if (request.hasOwnProperty('bit')) {
    dpm.addRequest(
      request.device,
      output(request.output)(request.id, {statusBit:request.bit})
    )
  } else {
    dpm.addRequest(request.device, output(request.output)(request.id))
  }

}

for (plot of plots) {
  console.log(plot)
}

dpm.start()