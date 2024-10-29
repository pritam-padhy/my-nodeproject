const http = require('http');

let users = [
    { eId: 101, name: 'pritam', sal: 5000, gender: 'male' },
    { eId: 102, name: 'sanjay', sal: 6000, gender: 'male' },
    { eId: 103, name: 'mahesh', sal: 8000, gender: 'male' },
    { eId: 104, name: 'ramesh', sal: 9000, gender: 'male' },
    { eId: 105, name: 'vilas', sal: 3000, gender: 'male' },
]

const app = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.write(JSON.stringify(users));
    }
    res.end();
});

app.listen(5000, ()=>{
    console.log('Server is listening to PORT 5000');
});


