const express = require('express');
const path = require('path');
app = express();

app.get('/', (req, res) => {
    res.send(`<p>Please click below links to view or download files</p></br>
        <a href='http://localhost:5000/viewFile'>View</a>
        <a href='http://localhost:5000/downloadFile'>Download</a>`);
});

app.get('/viewFile', (req, res) => {
    res.sendFile(path.resolve(__dirname, './bangalore.jpg'));
});

app.get('/downloadFile', (req, res) => {
    res.download(path.resolve(__dirname,'./bangalore.jpg'));
});



app.listen(5000, () => {
    console.log('Server is running at PORT 5000');
});