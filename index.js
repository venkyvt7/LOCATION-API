const express=require('express');
const app=express();

const bodyparser=require('body-parser');

const PORT = process.env.PORT || 5001;
app.use(bodyparser.json());


const router=require('./routes/api');
app.use(router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
