const express = require('express');
const app = express();
const parser = require('body-parser');

const cors = require('cors');
app.use(parser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
    const db = client.db('foods');
    const menusCollection = db.collection('menus');
    const menusRouter = createRouter(menusCollection);
    app.use('/api/menus', menusRouter);
    })
    .catch(console.err);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});