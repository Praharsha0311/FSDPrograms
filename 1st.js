const http=require('http');
const PORT=3001;
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World');
});
server.listen(PORT,()=>{
    console.log(`Server running on localhost:${PORT}`);
});