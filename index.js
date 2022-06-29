//importnado la biblioteca express
const express = require('express')
const path = require('path') // ayuda a que en funcion del sistema operativo construyamos la ruta adecuada
// Crear una aplicacion web
const app = express();

//Establecer un middleware que configure donde se encuentran los recursos
//publicos

app.use(express.static(path.join(__dirname,'public')))

//construyendo la ruta lo mas general general posible Recurso tiene el nombre de 'recurso'
app.get('/mifps',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

//Escuchando peticiones
app.listen(8081,()=>{
    console.log("Servidor online en el puerto 8081")
})