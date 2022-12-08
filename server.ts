import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app =  express();
app.use(cors({
  origin: '*'
}))

const server =  http.createServer(app);
const io = new Server(server, { cors: { origin: '*' }});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.onAny((msg, payload) => {
    console.log('new message', { msg, payload });
    socket.emit('reply:' + msg, 'I noticed you');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

