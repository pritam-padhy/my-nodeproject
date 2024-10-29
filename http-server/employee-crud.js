
const express = require('express');
const app = express();
app.use(express.json());

let employees = [
    { eId: 101, name: 'pritam', sal: 5000, gender: 'male' },
    { eId: 102, name: 'sunita', sal: 6000, gender: 'female' },
    { eId: 103, name: 'mahesh', sal: 8000, gender: 'male' },
    { eId: 104, name: 'ramesh', sal: 9000, gender: 'male' },
    { eId: 105, name: 'vilas', sal: 3000, gender: 'male' },
]

app.get('/employees', (req, res)=>{
    res.json(employees);
});

app.get('/employees/:id', (req, res)=>{
    const userId = +req.params.id;
    const emp = employees.find(emp=> emp.eId === userId);
    res.json(emp);
});

app.get('/employee', (req, res)=>{
    const empname = req.query.empName;
    const emp = employees.find(emp=> emp.empname == empname);
    res.json(emp);
});

app.post('/employees', (req, res)=>{
    const newEmp = req.body;
    console.log(newEmp);
    employees.push(newEmp);
    res.status(201).send('Employee added succesfully!!');
});

app.listen(5000, ()=>{
    console.log('Server is runnning at PORT 5000');
});