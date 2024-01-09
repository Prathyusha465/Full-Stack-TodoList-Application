import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Create(){
    
     const [task,setTask]=useState("")

    const handleAdd=()=>{
         axios.post("http://localhost:3000/add",{task:task})
         .then(result=> location.reload())
         .catch(err=>console.log(err))
    }
    return (
        <div className="create_form">
            <input type="text" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit" onClick={handleAdd}>Add</button>
        </div>
    )
}