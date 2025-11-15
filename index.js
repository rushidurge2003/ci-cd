const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

//Check server status
app.get('/', (req, res) => {
    return res.send('Hello Omkar! SERVER IS RUNNING ON PORT ' + (process.env.PORT || 3000));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
