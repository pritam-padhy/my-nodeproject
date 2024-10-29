import express from 'express';
import formidable from 'formidable';
import fs from 'fs';
const __dirname = import.meta.dirname;

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="myFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

let options = {
  multiple: true,
  maxFileSize: 1024 * 1024 * 5,
  filter: function ({ mimetype }) {
      return mimetype && mimetype.includes('image')
  }
}
app.post('/api/upload', (req, res, next) => {
    const formidableObj = formidable(options);
    formidableObj.parse(req, (err, fields, files) => {
        let allFiles = files.myFiles;
        for (let fileObj of allFiles) {
            let oldPath = fileObj.filepath;
            let newPath = `${__dirname}/assets/${fileObj.originalFilename}`;
            let imageFile = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, imageFile);
        }
        res.send('File Uploaded Succesfully!!')
    })
});

app.listen(5000, () => {
  console.log('Server listening on 5000');
});