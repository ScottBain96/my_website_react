const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
require ('dotenv').config();



const app = express ();
const port = process.env.PORT || 5000;

app.use(cors());
app.use (express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://dbUser:dbUser@cluster0-shard-00-00-4xqf8.gcp.mongodb.net:27017,cluster0-shard-00-01-4xqf8.gcp.mongodb.net:27017,cluster0-shard-00-02-4xqf8.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {

    console.log("MongoDB connection established");
})

const jobRouter = require('./routes/jobs');
const userRouter = require('./routes/users');

app.use('/jobs', jobRouter);
app.use('/users', userRouter);

app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);

});
