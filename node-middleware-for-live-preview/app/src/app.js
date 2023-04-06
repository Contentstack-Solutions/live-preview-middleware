import serverless from 'serverless-http';
import express from 'express';  //Import the express dependency
import cors from 'cors';        //Import the cors dependency
import dotenv from 'dotenv';    //Import the dotenv dependency
import {getEntries} from './entries.js'

const app = express();          //Instantiate an express app, the main work horse of this server
const port = 5000;              //Save the port number where your server will be listening
dotenv.config();

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Working!!!')
})

app.get('/entries', async (req, res) => {
    try {
        const response = await getEntries(req.query); 
        res.send(response); 
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, async () => {
    //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});

export default serverless(app);