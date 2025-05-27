
const fs = require('fs')

fs.readFile("input.txt","utf8", (err, data)=>{
    if(err) {
        console.error("Error reading the file")
        return;
    }
    console.log(data)
    
})