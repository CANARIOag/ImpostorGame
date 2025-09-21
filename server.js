const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const partidas = {}; // { codigo: { jugadores: [], iniciado: false } }

function generarCodigo() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

io.on('connection', (socket) => {
  console.log('Jugador conectado', socket.id);

  socket.on('crearPartida', (nombre, callback) => {
    const codigo = generarCodigo();
    partidas[codigo] = { jugadores: [{ id: socket.id, nombre }], iniciado: false };
    socket.join(codigo);
    callback(codigo);
  });

  socket.on('unirsePartida', (codigo, nombre, callback) => {
    if (!partidas[codigo]) return callback({ error: 'Sala no existe' });
    if (partidas[codigo].iniciado) return callback({ error: 'Partida ya iniciada' });

    partidas[codigo].jugadores.push({ id: socket.id, nombre });
    socket.join(codigo);
    io.to(codigo).emit('jugadores', partidas[codigo].jugadores.map(j => j.nombre));
    callback({ ok: true });
  });

  socket.on('iniciarPartida', (codigo) => {
    const partida = partidas[codigo];
    if (!partida) return;

    // repartir roles
    const roles = ['impostor', ...Array(partida.jugadores.length - 1).fill('normal')];
    roles.sort(() => Math.random() - 0.5);

    partida.jugadores.forEach((jugador, i) => {
      io.to(jugador.id).emit('rol', { rol: roles[i], personaje: roles[i] === 'normal' ? "Messi" : null });
    });

    partida.iniciado = true;
  });

  socket.on('disconnect', () => {
    console.log('Jugador desconectado', socket.id);
  });
});

server.listen(3000, () => console.log('Servidor en http://localhost:3000'));
