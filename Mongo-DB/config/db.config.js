const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/Sample";

mongoose.connect(URI).then(() => {
    console.log("DATABASE IS CONNECTED!!");
}).catch((err) => {
    console.log("DATABASE CONNECTION ERROR :" ,err);
}).finally(() => {
    console.log("DATABASE CONNECTION ATTEMPT FINISHED.");
})