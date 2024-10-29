const express = require('express');
const cors = require('cors');
const employeeRouter = require('./src/routes/employee-routes');
const { logTime } = require('./src/middleware/logger');
const productRouter = require('./src/routes/product-routes');
const todoRouter = require('./src/routes/todo-routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(logTime);

app.use('/employees', employeeRouter);
app.use('/products', productRouter);
app.use('/todo', todoRouter);

app.listen(5000, ()=>{
    console.log('Server running at PORT 5000')
});