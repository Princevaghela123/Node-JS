//const os = require('os');
const http = require('http');
//console.log("Cpus :" , os.cpus().length);



const server = http.createServer((req,res) => {
    res.write("Welcome To Node Js Server");
    res.end();
});

server.listen(8080 , (err) => {

    if(err){
        console.log("Erorr The Server Not Start Please Check It ",erorr)
    }
    console.log("Node Js Server Is Perfectly Running On Port");
})


