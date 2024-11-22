import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const listFile = ()=>{

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirpath = path.join(__dirname,'files');
    console.log(dirpath);

    for(let i = 0; i<5; i++){
        fs.writeFileSync(dirpath+`/hello${i}.txt`,`a simple text file ${i+1}`);
    }

}

export default listFile;