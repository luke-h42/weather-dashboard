import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import * as locationAPI from './location-api';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get("/api/location/search", async(req, res) => {
    const searchTerm = req.query.searchTerm as string;
    const results = await locationAPI.geocodeLocation(searchTerm);
    return res.json(results);
})

app.get("/api/weather/search", async (req, res) => {
    const lat = parseFloat(req.query.latitude as string);
    const long = parseFloat(req.query.longitude as string);
    const results = await locationAPI.getWeatherData(lat, long);
    return res.json(results);
});

app.listen(port, () => {
    console.log(`Server running on localhost: ${port}`)
})