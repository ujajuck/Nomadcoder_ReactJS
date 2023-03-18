import Button from "./Button";
import ToDoList from "./ToDoList";
import styles from "./App.module.css"

import {useState,useEffect} from "react"

function App() {
  const [counter,setValue]=useState(0);
  const [keyword,setKeyword]=useState("");
  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(()=>{
    console.log("it run just one time. like calling api ");
  },[]);
  useEffect(()=>{
    if(keyword!==""&&keyword.length>5){
      console.log("this code run only when keyword is changed ",keyword);
    }
  },[keyword]);
  console.log("I refresh all time")
  return (
    <div>
        <h1 className={styles.title}>{counter}</h1>
        <input 
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="????"
        ></input>
        <button onClick={onClick}>button</button>
        {counter%2===1?<Button text={"my Button"}/>:null}
        <ToDoList/>
    </div>
  );
}

export default App;
