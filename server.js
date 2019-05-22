const express = require('express');
const server = express();
const cohortRouter = require('./routers/cohorts-router.js')
const studentRouter = require('./routers/students-router.js')

server.use(express.json());
server.use('/cohorts', cohortRouter)
server.use('/students', studentRouter)

server.get('/', (req, res) => {
    res.send('Beep Boop, server is alive.')
})

module.exports = server;