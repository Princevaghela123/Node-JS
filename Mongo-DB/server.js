const express= require('express');
require('./config/db.config');
const app = express();

const PORT = 8080;

app.set('view engine','ejs');



app.get('/' , (req ,res) =>{
    res.render('index');
});


app.listen(PORT , (err)=>{
    if(err){
        console.log("Server Ma Error Che :",err);
        return;
    }
    console.log("SERVER IS STARTED!!");
})