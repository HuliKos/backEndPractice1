const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/users', (req, res) => {
    let friends = ['Lei', 'Tiffany', 'Celine', 'Andy', 'Olivia'];
    res.status(200).send(friends)
})

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`));
