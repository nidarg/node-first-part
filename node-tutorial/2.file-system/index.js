const fs = require('fs')
const path = require('path')

// create new directory 
// first create path then verify if directory exists if not create it at the new path

const dataFolderPath = path.join(__dirname, 'data')
if(!fs.existsSync(dataFolderPath)){
    fs.mkdirSync(dataFolderPath)
}

// create a file inside directory
// same pattern, create file path and at that path create file
// write to file
const filePath = path.join(dataFolderPath,'example.txt')
fs.writeFileSync(filePath,'this text is in example.txt file')
console.log('File created successfully');

// read from file
const readContentFromFile = fs.readFileSync(filePath,'utf8')
console.log(readContentFromFile);

//append text
fs.appendFileSync(filePath,'\nThis is a new text line appended')
console.log('new file content added');

// async way of creating file
const asyncFilePath = path.join(dataFolderPath,'async-example.txt')
// async write
fs.writeFile(asyncFilePath,'text inside file created async',(err)=>{
    if(err) throw(err);
    console.log('Async file created successfully');
})
// async read
fs.readFile(asyncFilePath,'utf8',(err, data)=>{
    if(err) throw(err);
    console.log('Async file content ', data);
})
// async append
fs.appendFile(asyncFilePath,'\nthis is another line',(err)=>{
    if(err) throw(err);
    console.log('new text appended');
})
fs.readFile(asyncFilePath,'utf8',(err,updatedData)=>{
    if(err) throw(err);
    console.log('Updated text ', updatedData);
    
})