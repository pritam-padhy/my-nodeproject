const myError = require('../middleware/errorHandler');

exports.getAllToDos = async (req, res, next) => {
    try {
        let response = await fetch('https://jsonplaceholder.ypicode.com/todos');
        let finalResponse = await response.json();
        response.json(finalResponse);
    }catch(err){
        console.log('Something is wrong here');
       // next(err);
    }
};