const express= require("express");
const axios=require("axios");
const cors = require('cors');

const app = express();

require('dotenv').config();

const PORT= process.env.PORT;
const API_KEY=process.env.API_KEY;

app.use(express.json());
app.use(cors());


app.get('/fetch-data', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
