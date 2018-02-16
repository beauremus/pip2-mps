/* global DPM ACLD */
const dpm = new DPM()
const acl = new ACLD()
const main = document.querySelector('#auto')
const deviceProperties = ['status', 'setting', 'reading', 'control']

function updateHTML(updateType) {
  let active = true
  let domProperty = 'textContent'
  if (updateType === 'setting') domProperty = 'value'
  return {
    dpm: (data, info) => {
      if (active) {
        const targets = document.querySelectorAll(`[data-device="${info.name}"].${updateType}`)
        let dataProperty = data.data
        for (let target of targets) {
          if (updateType === 'status') dataProperty = data[target.dataset.status] ? 'On' : 'Off'
          target[domProperty] = dataProperty
        }
      }
    },
    stop: () => active = false,
    start: () => active = true
  }
}

function toggleState(node, state1, state2) {
  let newState = ''
  if (node.textContent === state1) {
    newState = state2
  } else if (node.textContent === state2) {
    newState = state1
  }
  return newState
}

function setSettingsEvents(node, updater) {
  node.addEventListener('mouseenter', updater.stop)
  node.addEventListener('mouseleave', updater.start)
  node.addEventListener('change', (event) => {
    console.log(`ACL: set ${node.dataset.device} ${event.target.valueAsNumber}`)
    // acl.run(`set ${node.dataset.device} ${event.target.valueAsNumber}`)
  })
}

function setControlEvents(node) {
  const controlType = node.dataset.control
  if (controlType === 'onOff') {
    node.addEventListener('click', () => {
      console.log(`ACL: ${toggleState(node, 'On', 'Off')} ${node.dataset.device}`)
      // acl.run(`${toggleState(node, 'On', 'Off')} ${node.dataset.device}`)
    })
  } else if (controlType === 'reset') {
    node.addEventListener('click', () => {
      console.log(`ACL: reset ${node.dataset.device}`)
      // acl.run(`reset ${node.dataset.device}`)
    })
  }
}

function setEventListeners(property, node, updater) {
  if (property === 'setting') {
    setSettingsEvents(node, updater)
  } else if (property === 'control') {
    setControlEvents(node)
  }
}

for (let property of deviceProperties) {
  const propertyNodes = main.querySelectorAll(`.acnet.${property}`)
  for (let node of propertyNodes) {
    const update = updateHTML(property)
    if (property !== 'control') {
      dpm.addRequest(`${node.dataset.device}.${property}`, update.dpm)
    }
    setEventListeners(property, node, update)
  }
}

dpm.start()