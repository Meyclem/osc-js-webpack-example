const OSC = require('osc-js')

const osc = new OSC()
const elem = document.getElementById('random')

osc.on('/param/random', message => {
  elem.innerText = message.args[0]
})

osc.open({ port: 9000 })
