exports.getEmployees = (req, res)=>{
    res.json(Employees);
}

exports.getEmployeeById = (req, res) =>{
    const employeeId = +req.params.id;
    const Employee = Employees.find(Employee=> Employee.id === employeeId);
    res.json(Employee);
}