const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/top_economies', {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> {
    console.log("mongodb connected")
}).catch((err)=> {
    console.log("no connection", err)
});