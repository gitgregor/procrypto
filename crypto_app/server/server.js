const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


const bodyParser = require('body-parser');
const logger = require('morgan');

const Data = require('./models/cryptoModel')

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
// const dbRoute =
//     'mongodb://jelo:password1@ds249583.mlab.com:49583/fullstack_app';

const dbRoute = "mongodb+srv://gregor:jwRPJ3HooGHL8Cfw@cluster0-ncnq4.mongodb.net/test?retryWrites=true&w=majority"

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.post('/a', (req, res) => {
    let data = new Data();

    // if (!req.body.price_usd) {
    //     return res.json({
    //         success: false,
    //         error: 'INVALID INPUTS',
    //     });
    // }

    data.price_usd = req.body.price_usd
    data.last_updated = req.body.last_updated

    data.save(() => {
        return res.json({ success: true });
    });
    // data.save((err) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true });
    // });
})




// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));