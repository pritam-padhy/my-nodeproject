employees = [
    { eId: 101, name: 'pritam', sal: 5000, gender: 'male' },
    { eId: 102, name: 'sunita', sal: 6000, gender: 'female' },
    { eId: 103, name: 'mahesh', sal: 8000, gender: 'male' },
    { eId: 104, name: 'ramesh', sal: 9000, gender: 'male' },
    { eId: 105, name: 'vilas', sal: 3000, gender: 'male' },
];

let getEmployees = function (req, res) {
    res.status(200).json(employees)
}

let getEmployeeById = function (req, res) {
    const empId = +req.params.id;
    const emp = employees.find(emp => emp.eId === empId);
    res.json(emp);
}

let addEmployee = function (req, res) {
    const newEmp = req.body;
    employees.push(newEmp);
    res.sendStatus(201);
}

module.exports = { getEmployees, getEmployeeById, addEmployee };