
const http=require("http")
const dotenv=require("dotenv")
dotenv.config() //
const app=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<h1>Node js defined in next route</h1>")
        res.end();
    }
    else if(req.url=="/signup"){
res.write("<h1>Node.js Node is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.</h1>")
res.end();
    }
}) 
const port=process.env.PORT;
app.listen(port,
    console.log(`Server is run in port ${port}`)
);



