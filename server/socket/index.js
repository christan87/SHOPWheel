const socketio = require('socket.io');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { ROLES } = require('../constants');
const keys = require('../config/keys');

// not final configuration 
const socket = server => {
    const io = socketio(server, {
        cors : {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    const onConnection = socket => {
        // some code...
    }

    io.on('connection', ()=> console.log('connected to socket.io'))
}

module.exports = socket;