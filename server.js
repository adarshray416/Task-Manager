const express = require("express")
const {db}=require('./db')
const todoroute=require('./route/todo')
const app=express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', express.static(__dirname + '/public'))
app.use("/todo",todoroute)
const server_port=process.env.PORT ||3333
db.sync()
.then(()=>{
  app.listen(server_port)
})
.catch((err)=>{
Console.error(err);

}
)