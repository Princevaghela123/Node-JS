const fs = require("fs");

/* W => Write
   R => Read
   A => Append
*/
//write sync
fs.writeFileSync("example.txt", "This is an Example.");

//write async
fs.writeFile("example.txt", "This is an Example Async.", (err) => {
    if (err) throw err;
    console.log("File written asynchronously.");
});
// delete sync
//fs.unlinkSync("examples.txt");

//read
 const result = fs.readFileSync("example.txt", "utf-8");

//read async
fs.readFile("example.txt", "utf-8", (err, result) => {
    if (err) { 
        console.log(err);
    };
    console.log(result);
   
});

