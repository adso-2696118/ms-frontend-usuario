import server from "./server";

server.listen(server.get("port"),()=>{
    console.log(`Frontend en el puerto ${server.get("port")}`);
})