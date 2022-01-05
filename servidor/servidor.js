
const express = require('express');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(servidor);

io.on('connection', socket =>{
    let nombre;
    socket.on('conectado',(nomb)=>{
        nombre = nomb;
        socket.broadcast.emit('mensajes',{nombre: nombre , mensaje: `${nombre} Ha entrado en la sala`});
    })

    socket.on('mensaje', (nombre,mensaje)=>{
        io.emit('mensajes',{nombre,mensaje});
    })

    socket.on('disconnect', ()=>{
        io.emit('mensajes', {servidor: 'Servidor', mensaje: `${nombre} abandonado la sala`})
    })

})

servidor.listen(process.env.PORT, ()=> console.log('servidor inicializado'));

