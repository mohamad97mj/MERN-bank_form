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


// const https = require('https');
// const fs = require('fs');

//
// for (let i = 1; i < 100; i++) {
//     let file = fs.createWriteStream("slides/file" + i + ".png");
//     let link = "https://room.asanseminar.ir/presentation/9a70776c743352cfcf688e52512673332e5e4007-1586064475401/presentation/c6dacf0d3ba9b093561a43858eef510e9da69694-1586064575497/slide-" + i + ".png";
//     // let link2 ="https://room.asanseminar.ir/presentation/f37062d9a65543a46f2ba13299ba77a370a1c4eb-1585894201091/presentation/a99e55666dc4255075b8dbb8167d1b3adadb507b-1585894281351/slide-"+ i +".png";
//     const request = https.get(link, function (response) {
//         response.pipe(file);
//     });
//
// }

