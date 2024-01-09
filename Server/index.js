const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const TodoModel= require("./models/todos")

const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://katkuriprathyusha465:NecrlnZT4Th7lZyC@cluster0.qdgrr8l.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to database")
})
.catch((e)=>{
    console.log(e);
})


app.post("/add",(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    })
    .then(result=> res.json(result))
    .catch(err=>res.json(err))
})
app.get("/get",(req,res)=>{
    TodoModel.find()
    .then(result=>{res.json(result)})
    .catch(result=> res.json(result))
})
app.put("/update/:id",(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id:id}, {done:true})
    .then(result => res.json(result))
    .catch(res=> console.log(res))
})
app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(res=res.json())
    .catch(res => console.log(res))
})
app.listen(3000, ()=>{
    console.log("port started on 3000");
})