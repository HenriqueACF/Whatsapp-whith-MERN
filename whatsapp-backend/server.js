//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';

//app config
const app = express();
const port = process.env.PORT ||9000

const pusher = new Pusher({
    appId: "1108883",
    key: "a582f519bac68a7650ad",
    secret: "4e8573d569e1fe4c9042",
    cluster: "us2",
    useTLS: true
  });

//middleware
app.use(express.json())

//DB config
const connection_url = 'mongodb+srv://admin:admin@cluster0.ldkms.mongodb.net/test';
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB CONNECTED!!!');
    
    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log("A CHANGE OCCURED!!!",change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
                {
                    name:messageDetails.name,
                    message:messageDetails.message,
                }
            );
        }else{
            console.log('Error triggering Pusher');
        }
    })
});

//api routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.get('/messages/sync', (req, res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) =>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port, () =>console.log(`LISTENING ON LOCALHOST:${port}`));