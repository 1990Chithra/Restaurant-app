//1.import json-server
const jsonServer=require('json-server');
//2.Create a server application using json-server
const restServer=jsonServer.create()
//3.Set up path for db.json
const router=jsonServer.router('db.json')
//4.return a middleware instance using json-server
const middilware=jsonServer.defaults()
//setup port for db.json
const port=3001
//use in server

restServer.use(middilware);
restServer.use(router);
//to run the server
restServer.listen(port,()=>{
    console.log("rest server listerning on port" +port);
})

