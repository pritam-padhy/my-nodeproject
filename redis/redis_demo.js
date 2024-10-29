import axios from "axios";
import express from "express";
import { createClient } from "redis";


const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

let app = express();

app.get('/fetchData', async (req, res) => {
    let countryName = req?.query?.countryName || 'india';
    let url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${countryName}`
});

const dataInRedis = await redisClient.get(countryName);

if (dataInRedis) {
    console.log('Data present in Redis');
    let output = JSON.parse(dataInRedis);
    res.send({ source: 'REDIS', output });
} else {
    let response = await axios.get(url);
    let output = JSON.parse(response.data);
    await redisClient.set(countryName, JSON.stringify(output), {EX:120});
    console.log('Data stored in Redis');
    res.send({ source: 'API', output });
}


app.listen(5000, () => {
    console.log('Server listening to port 5000');
});
