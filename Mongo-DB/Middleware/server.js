const express = require ('express');
const app = express();
const PORT = 9000;


app.set('view engine','ejs');


app.get('/' , (req , res) => {

    res.render("index");
});

const midleware = ( req , res , next) => {
    
}


app.listen(PORT, (err) => {
    if (err) {
        console.error('server Is Not Start :', err);
        return;
    }
    console.log(`Server is running`);   
})
