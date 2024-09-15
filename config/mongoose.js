const mongoose = require('mongoose');


// connnect to databases


const DB = "mongodb+srv://bhupendra_giradkar:9JvdXxSriZ8aKvMp@csvupload.q3bxj.mongodb.net/";
    mongoose 
    .connect(DB)
    .then(() => {
        console.log("Connection successful!");
    })
    .catch((err) => console.log("no connection " + err));

// acquire the connection 
const db = mongoose.connection;

// Error 
db.once('error', console.error.bind(console,"Error in connecting to Database"));

// up and running then print the message
db.once('open', ()=> {
    console.log("Database connected successfully");
})

module.exports = db;
