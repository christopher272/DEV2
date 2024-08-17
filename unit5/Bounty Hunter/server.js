const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

async function connectToDb(){
    try {
        console.log('Connected to DB');
        await mongoose.connect(process.env.MONGO_URI);
    }catch(err) {
        console.log(err);
    }
}
connectToDb();

app.use('/bounty', require('./routes/bountyRouter'));

app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message});
})


app.listen(9000, () => {
    console.log('Server running at http://localhost:9000');
});

