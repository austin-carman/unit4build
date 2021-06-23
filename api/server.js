const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.use((err, req, res, next) => {
    res.json({
        status: 500,
        message: err.message,
        stack: err.stack
    })
})

module.exports = server
