const http=require('http');
const url=require('url');
const user='Praharsha';
const pass='123456';
const PORT=3002;
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const pathname=parsedUrl.pathname;
    const query=parsedUrl.query;
    if (pathname==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`<h2>Login System</h2>`);
        res.write(`<form action='/login' method='GET'>
            Username:<input type='text' name='username' required>
            Password:<input type='password' name='password' required>
            <button type='submit'>Login</button>`);
        res.end(`</form>`);
    }else if(pathname==='/login'){
        const {username, password}=query;
        if(username===user && password===pass){
            res.writeHead(200,{'content-type':'text/html'});
            res.write('Login Succesful');
            res.end(`Username:${username}, password:${password}`);
        }else{
            res.writeHead(200,{'content-type':'text/html'});
            res.end('Invalid credentials');
        }
    }else{
        res.writeHead(404);
        res.end("Bye");
        return;
    }
}).listen(PORT);