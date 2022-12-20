const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 10000 })

wss.on('connection', ws => {
  ws.on('message', (data, isBinary) => {
    const message = isBinary ? data : data.toString();
    console.log(`Received message => ${message}`);
    ws.send(`ho! ${message}`);
  })
  ws.send('ho!')
})
