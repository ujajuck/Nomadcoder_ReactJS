import { useState } from "react";
import Button from "./Button";

function ToDoList(){
    const [toDo,setToDo]=useState("");
    const [toDos,setToDos]=useState([]);
    const onChange=(event)=>setToDo(event.target.value);
    const onSubmit=(event)=>{
        event.preventDefault();
        if(toDo===""){
            return;
        }
        setToDos((currentArray)=>[toDo, ...currentArray]);
        console.log(toDos)
        setToDo("");
    }
    return(
        <div>
            <h1>TO DO LIST</h1>
            <from onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button onClick={onSubmit}>"Add To Do"</button>
            </from>
            {toDos.map((item,index)=>(<li key={index}>{item}</li>))}
        </div>
    );
}

export default ToDoList;