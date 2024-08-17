const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


app.use(express.json());
app.use(morgan('dev'));

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DataBase');
    }catch(err) {
        console.error('Failed to connect',err);
    }
}
connectToDb();

app.use('/inventory', require('./routes/inventoryRouter'));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message});
})


app.listen(9000, () => {
    console.log('Server running at http://localhost:9000');
})