const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/http');
const { ruruHTML } = require('ruru/server');
const usersArr = require('./users.json');


const userSchema = buildSchema(`
    type Query{
        users : [User]
        user(id:Int) : User
    }

    type User{
        id: Int
        name: String
        username: String
        email: String
        phone: String
        website: String
    }
`)

const root = {
    getAllUsers : function(){
        return allUsers;
    },

    getUserById : function (args){
        const userId = args.id;        
        return allUsers.find(user=>user.id === userId)
    }
}

const app = express();
app.use(cors());
app.all('/graphql', createHandler({schema : userSchema, rootValue: root}));

app.get('/', (req, res)=>{
    res.type('html');
    res.end(ruruHTML({endpoint:'/graphql'}));
});


app.listen(4000, ()=>{
    console.log('Listening to port 4000');
});