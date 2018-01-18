const OSC = require('osc-js')
const express = require('express')

const HTTP_SERVER_PORT = 3000
const OSC_SERVER_PORT = 9000

// Express server for static file hosting
const app = express()

app.use('/', express.static('dist'))
app.listen(HTTP_SERVER_PORT, () => {
  console.log('HTTP server ready')
})

// OSC websocket server
const osc = new OSC({ plugin: new OSC.WebsocketServerPlugin() })

let interval

function sendMessage() {
  const message = new OSC.Message('/param/random', Math.random())
  osc.send(message)
}

osc.on('open', () => {
  console.log('OSC server ready')

  interval = setInterval(sendMessage, 1000)
})

osc.on('error', err => {
  console.log('An error occurred', err)
})

osc.on('close', () => {
  console.log('OSC server closed')

  if (interval) {
    clearTimeout(interval)
  }
})

osc.open({ port: OSC_SERVER_PORT })
