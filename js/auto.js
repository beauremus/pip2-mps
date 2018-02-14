/* global DPM */
const dpm = new DPM()
const main = document.querySelector('#auto')
const deviceProperties = ['status', 'control', 'setting', 'reading']

function updateHTML(updateType) {
  let domProperty = 'textContent'
  if (updateType === 'setting') {
    domProperty = 'value'
  }
  return (data, info) => {
    const targets = document.querySelectorAll(`[data-device="${info.name}"].${updateType}`)
    for (let target of targets) {
      target[domProperty] = data.data
    }
  }
}

for (let property of deviceProperties) {
  const propertyNodes = main.querySelectorAll(`.acnet.${property}`)
  for (let node of propertyNodes) {
    dpm.addRequest(`${node.dataset.device}.${property}`, updateHTML(property))
  }
}

dpm.start()