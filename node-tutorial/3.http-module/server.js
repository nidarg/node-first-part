const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Server is running...')
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
})