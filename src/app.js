const express = require('express');
require("../src/db/conn");
const EconomiesRanking = require("../src/models/economies");
const router = require('./routers/economy');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(router);




app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
});