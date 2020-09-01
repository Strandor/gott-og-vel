const express = require("express");
import io from "socket.io";

const app = express();
const PORT = process.env.PORT || 3000;

let count = 0;

app.use(express.static('public'));

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
const ioServer = io(server);

ioServer.on('connection', (socket) => {
    socket.on('add', () => {
        count++;
        ioServer.emit('brodcastAdd', {value: count});
    });
});