import express from 'express';

const app=express();
app.use(express.json())

const PORT=3000

let todo=[]
let nextId=1

app.post('/tasks',(req,res)=>{
    const {title,description}=req.body
    if(!title || !description){
        return res.status(400).json({message:"please provide title and description"})
    }
    const newTask={id:nextId++,title,description}
    todo.push(newTask) 
    res.status(201).json(newTask)
})

app.get('/tasks',(req,res)=>{
    res.status(200).json(todo)
})

app.get('/tasks/:id',(req,res)=>{
    const {id}=req.params
    const task=todo.find((task)=>{
        return task.id==id
    })
    if(!task){
        return res.status(404).json({message:"Tasks not found"})
    }
    res.status(200).json(task)
})

app.put('/tasks/:id',(req,res)=>{
    const id=req.params.id
    const task=todo.find((task)=>{
        return task.id==id
    })
    if(!task){
        return res.status(404).json({message:"Tasks not found"})
    }
    const {title,description}=req.body
    if(!title || !description){
        return res.status(400).json({message:"please provide title and description"})
    }
    task.title=title
    task.description=description
    res.status(200).json(task)
})

app.delete('/tasks/:id',(req,res)=>{
    const {id}=req.params
    const taskIndex=todo.findIndex((task)=>{
        return task.id==id
    })
    if(taskIndex==-1){
        return res.status(404).json({message:"task not fond"})
    }
    todo.splice(taskIndex,1)
    return res.status(200).json({message:"task deleted successfully"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
