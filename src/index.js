const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
// Server Created to pass with Socket.IO, because if 
// express creates it by default we don't have access to it
const server = http.createServer(app)
const io = socketio(server)
const { generateMessage } = require('./utils/messages')

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.on('join', ({ username, room }) => {
        socket.join(room)

        socket.emit('message', generateMessage('Welcome'))
        socket.broadcast.to(room).emit('message', generateMessage(`${username} Joined The Group!`))
    })

    socket.on('sendMessage', (message, callback) => {
        io.to('Kolkata').emit('message', generateMessage(message))
        callback('Delivered')
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left'))
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})