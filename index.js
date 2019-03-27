const server = require('./server.js')

const port = 3000;
server.listen(port, function() {
    console.log(`\n Server Running on port ${port}`)
})