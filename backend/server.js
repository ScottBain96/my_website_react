const express = require ('express');
const cors = require ('cors');
const path = require('path');
const mongoose = require ('mongoose');
require ('dotenv').config();



const app = express ();
const port = process.env.PORT || 5000;

app.use(cors());
app.use (express.json());



mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0-4xqf8.gcp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {

    console.log("MongoDB connection established");
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    // intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        // respond with 200
        console.log("Allowing OPTIONS");
        res.sendStatus(200);
    } else {
        // move on
        next();
    }

    
});

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
            res.redirect(`https://${req.header('host')}${req.url}`)
        else
            next()
    })
}

//server static filer fra react
app.use(express.static(path.join(__dirname, '../build')));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: err.message });
    }
});

app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send({msg: 'Something Broke'})
});






const jobRouter = require('./routes/jobs');
const userRouter = require('./routes/users');

app.use('/jobs', jobRouter);
app.use('/users', userRouter);

app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);

});
