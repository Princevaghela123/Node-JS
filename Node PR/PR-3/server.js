const express= require('express');
const app = express();
const path = require('path');

const PORT = 7878;

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname , "public")));

//middleware
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