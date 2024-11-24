const path = require('path');
const fs = require('fs');

const crud = () => {
    const dirPath = path.join(__dirname,'CRUD');
    const filePath = `${dirPath}/apple.txt`;
    // fs.writeFileSync(filePath,'This is a simple text file');
    // fs.appendFile(filePath,'and this file name is apple.txt',(err)=>{
    //     if(!err) console.log("file is updated...");
    // });
    // fs.readFile(filePath, 'utf8', (err, data) => {

    //         console.log(data); // Logs the file content as a string
    // });
    // fs.rename(filePath,`${dirPath}/banana.txt`,(err)=>{
    //     if(!err) console.log(`file name is updated`);
    // })
    // fs.unlinkSync(`${dirPath}/banana.txt`);
}

module.exports = crud;