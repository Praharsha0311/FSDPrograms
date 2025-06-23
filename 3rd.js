const fs=require('fs');

fs.writeFileSync('ex.txt',"HI this is Praharsha");
console.log('File written');

data=fs.readFileSync('ex.txt','utf-8');
console.log(data);

fs.appendFileSync('ex.txt','this is second line');
console.log(fs.readFileSync('ex.txt','utf-8'));

fs.renameSync('ex.txt','newFile.txt');

fs.unlinkSync('newFile.txt');