const express= require('express');
require('./config/db.config');
const app = express();

const PORT = 4545;

app.set('view engine','ejs');



app.get('/' , (req ,res) =>{
    res.render('form');
});

// insert book details
app.post('/addbook' , (req ,res) =>{

    
});


app.listen(PORT , (err)=>{
    if(err){
        console.log("Server Ma Error Che :",err);
        return;
    }
    console.log("SERVER IS STARTED!!");
})