const express = require('express');
const app = express();

let users = [
    { eId: 101, name: 'pritam', sal: 5000, gender: 'male' },
    { eId: 102, name: 'sanjay', sal: 6000, gender: 'male' },
    { eId: 103, name: 'mahesh', sal: 8000, gender: 'male' },
    { eId: 104, name: 'ramesh', sal: 9000, gender: 'male' },
    { eId: 105, name: 'vilas', sal: 3000, gender: 'male' },
]

app.get('/users', (req, res) => {
    res.send('Gell all users');
});

app.post('/users', (req, res)=>{
    res.send('Add a new user in database');
});

app.put('/users', (req,res)=>{
    res.send('Update a user in database ');
});

app.delete('/users', (req, res)=>{
    res.send('Delete a user from database');
});

app.patch('/users', (req, res)=>{
    res.send('Update a user in database partially');
});


app.listen(3000, ()=>{
    console.log('Server is listening to PORT 3000')
});