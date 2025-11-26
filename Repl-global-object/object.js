console.log("Hello Node Js");

console.log("File Path is : ", __filename);
console.log("Directory Path is : ", __dirname);

let totalsecond = 30;

setTimeout(() => {
    console.log("Hello Settimeout function👋🏻 ")
},3000);

setInterval(() => {
    if(totalsecond == 0){
        return;
    }
    totalsecond--;
    let minutes = Math.floor(totalsecond / 60);
    let second = totalsecond % 60;
    console.log(`${minutes} : ${second}`);
}, 1000);