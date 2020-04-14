const {Router}=require("express")
const  Todo  = require('../db').todos
const noteroute=require('./note')
const route=Router()
route.use("/notes",noteroute)
route.get("/",async (req,res)=>{

    const todo= await Todo.findAll()
    
    res.send(todo)
    
    })
    route.get("/:id", async (req,res)=>{
       if(isNaN(Number(req.params.id))){
       res.status(400).send({
           error: 'Invalid todo ID'
       })
       return}
       const todo =await Todo.FindByPk(req.params.id)
       if(!todo){
    return res.status(404).send({
        error : "No Matching id"+req.params.id,
    })
    
       }
       res.send(todo)
        
        })
        route.post('/',async (req, res) => {
            if (typeof req.body.task != 'string') {
              return res.status(400).send({ error: 'Task name not provided' })
            }
            if (req.body.done == 'true') {
              req.body.done = true
            } else {
              req.body.done = false
            }
          const newTodo = await  Todo.create({
               task: req.body.task,
               done: req.body.done,
               due: req.body.due,
               priority: req.body.priority,
               description: req.body.description,

           })
          
            res.status(201).send({success: 'New task added', data: newTodo})
          })
    
    
module.exports = route