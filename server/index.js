const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const userRouter = require('./routes/user-router');

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/', userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));


const https = require('https');
const fs = require('fs');

//
// // for (let i = 1; i < 100; i++) {
//     let file = fs.createWriteStream("slides/file" + 14 + ".png");
//     let link = "https://room.asanseminar.ir/presentation/c0ba17c23a26ff8c314478bc69f30963a6e4a754-1585807369428/presentation/8254e64f254354dd8ce3baf40905430ef8a576d4-1585807408606/slide-" + 14 + ".png";
//     // let link2 ="https://room.asanseminar.ir/presentation/f37062d9a65543a46f2ba13299ba77a370a1c4eb-1585894201091/presentation/a99e55666dc4255075b8dbb8167d1b3adadb507b-1585894281351/slide-"+ i +".png";
//     const request = https.get(link, function (response) {
//         response.pipe(file);
//     });
//
// // }

