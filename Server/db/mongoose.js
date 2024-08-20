const mongoose = require('mongoose');

//In mongoose we are providing database name alsng with connection URL
const connectionURL = 'mongodb+srv://cipher_quiz:cipher_quiz321@cluster0.g00ib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(connectionURL, {});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connection established');
});

db.on('error', () => {
    console.log('Unable to establish connection');
});