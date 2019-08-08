import express from 'express';

import bodyParser from 'body-parser';

const app = express();

import router from './routes/route';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/v1',  router);
const externalPort = process.env.PORT || 3000;
app.listen (externalPort,(req,res)=>{
    console.log(`you are listening on port:${externalPort}...`);
});

export default app;
