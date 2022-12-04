const mongoose = require("mongoose")
const {MONGO_URI} = process.env;
exports.dbConnect = () =>{
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((conn)=>{
        console.log(`Connected to database ${conn.connection.host}`);
    }).catch((err)=>{
        console.log(`Connection to database failed: ${err.message}`);
        process.exit(1)
    })
}