const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/Employee";

mongoose.connect(URI).then(() => {
    console.log("DataBase Is Connected!!");
}).catch(err => {
    console.log("DataBase Is Not Connected..", err);
});