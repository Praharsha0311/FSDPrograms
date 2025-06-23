const http=require('http');
const url=require('url');
const restaurants={
    'dominos':["Pizza","Burger"],
    'pizza hut':['pizza','marghertia']
};
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const pathname=parsedUrl.pathname;
    const query=parsedUrl.query;

    if(pathname==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`<h2>Welcome to food delivery app</h2><ul>`);
            for(let name in restaurants){
        res.write(`<li><a href='/restaurants?name=${encodeURIComponent(name)}'>${name}</a></li>`);}
        res.end(`</ul>`);
    }else if(pathname==='/restaurants'){
        const name=query.name;
        const menu=restaurants[name];
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`<h2>Menu-${name}<h2>`);
        res.write(`<form action='/order' method='GET'><input type='hidden' name='restaurants' value=${name}>`);
        res.write(`<select name='item'>`);
        menu.forEach(item => {
            res.write(`<option value=${item}>${item}</option>`);            
        });
        res.write(`</select><button type='submit'>Order</button></form>`);
        res.end(`<br><a href='/'>Back to Home</a>`);
    }else if(pathname==='/order'){
        res.writeHead(200,{'content-type':'text/html'});
        const {restaurants,item}=query;
        res.write(`Order Placed\n`);
        res.write(`You ordered ${item} from ${restaurants}`);
        res.end(`<br><a href='/'>Back to home</a>`);
    }else{
        res.writeHead(404);
        res.end("Check");
    }
}).listen(3004);