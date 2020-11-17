//importing
import express from 'express';
import mongoose from 'mongoose';

//app config
const app = express();
const port = process.env.PORT ||9000

//middleware


//DB config
const connection_url = 'mongodb+srv://admin:admin@cluster0.ldkms.mongodb.net/test';
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// ??

//api routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

//listen
app.listen(port, () =>console.log(`LISTENING ON LOCALHOST:${port}`));