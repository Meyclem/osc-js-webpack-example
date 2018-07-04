const OSC = require('osc-js')

const osc = new OSC()
const elem = document.getElementById('random')
const btn = document.getElementById('btn')
console.log(btn)
btn.addEventListener('click', (event) => {
  sendMessage()
  console.log('clic')
})

function sendMessage() {
  const text = document.getElementById('input').value
  const message = new OSC.Message('/param/mymsg', text)
  osc.send(message)
  console.log("client msg", message)
}

osc.on('/param/test', message => {
  elem.innerText = message.args[0]
  // console.log(message.args[0])
})

osc.open({ port: 9000 })
