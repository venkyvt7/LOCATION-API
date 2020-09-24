const express=require('express');
const app=express();

const bodyparser=require('body-parser');


app.use(bodyparser.json());


const router=require('./routes/api');
app.use(router);
app.listen(process.env.PORT || 3000);
