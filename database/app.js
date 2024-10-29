const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const productRouter = require('./routes/product-router');
const employeeRouter = require('./routes/employee-router');
const app = express();
app.use(cors());
app.use(express.json());


const db_URL = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(db_URL);
const dbName = 'NodeJs_2024';


async function connectToDB(){
    await mongoClient.connect();
    console.log('Connected successfully to Database');
}


app.use('/products', productRouter);
app.use('/employees', employeeRouter);
app.use('/users', userRouter);


app.listen(5000, ()=>{
    console.log('Server running at 5000');
});