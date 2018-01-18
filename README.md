# osc-js-webpack-example

This is a simple example for OSC communication between a website and a *NodeJS* server with [osc-js](https://github.com/adzialocha/osc-js) library and [webpack](https://webpack.js.org).

* Client assets compiled and bundled via *webpack*
* HTTP server *ExpressJS* serving client assets
* OSC server in *NodeJS* sending OSC data via websockets
* Client app receiving OSC data through websockets from OSC server

## Setup

```
git clone git@github.com:adzialocha/osc-js-webpack-example.git
cd osc-js-webpack-example
npm install
```

## Run example

```
npm run build // build client assets with webpack
npm run serve // open localhost:3000 in browser
```
