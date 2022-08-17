// importing
const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlenDBex'

// strating express
const app = express();

// connecting mongoose
mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

// for all routing purpose
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

// aap needs to listen
app.listen(9000, () =>{
    console.log('Server started')
})