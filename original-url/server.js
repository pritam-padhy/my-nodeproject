const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const Url = require('./models/Url');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/urlshortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.post('/api/url/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    
    if (!originalUrl) {
        return res.status(400).json({ message: 'Invalid URL' });
    }

    try {
       
        let url = await Url.findOne({ originalUrl });

        if (url) {
            return res.json(url);
        } else {
            
            const shortUrl = shortid.generate();

            
            url = new Url({
                originalUrl,
                shortUrl
            });

            await url.save();

            return res.json(url);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});


app.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ shortUrl: req.params.code });

        if (url) {
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json('No URL found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});