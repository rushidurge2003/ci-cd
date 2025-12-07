const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

//Check server status
app.get("/", (req, res) => {
  const port = process.env.PORT || 3000;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Server Status</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background: #111827;
                font-family: Arial, Helvetica, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                color: white;
            }
            .box {
                text-align: center;
                background: #1f2937;
                padding: 28px 40px;
                border-radius: 12px;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            }
            h1 {
                margin: 0 0 10px;
                font-size: 30px;
            }
            p {
                font-size: 18px;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="box">
            <h1>🚀 Server Running Successfully</h1>
            <p>Hello Rushikesh!</p>
            <p>Backend is live on <strong>PORT ${port}</strong></p>
        </div>
    </body>
    </html>
  `);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
