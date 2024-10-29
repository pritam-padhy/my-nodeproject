const http = require('http');
const todos = require('./todos.json');
const comments = require('./comments.json');
const users = require('./users.json');


const server = http.createServer((req, res) => {
    console.log('request received');
    if (req.url === '/users') {
        res.write(JSON.stringify(users))
    } else if (req.url === '/comments') {
        res.write(JSON.stringify(comments))
    } else if (req.url === '/todos') {
        res.write(JSON.stringify(todos));
    } else {
        res.write('<h1>Page Not Found</h1>')
    }
    res.end();
});

server.listen(5000, () => {
    console.log('server is listening to port 5000');
});

//setTimeout(server.close, 10000);