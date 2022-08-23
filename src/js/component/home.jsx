import React, { useState, useEffect } from "react";


const Todolist = () => {

  const [lista, setLista] = useState([]);
  const [tareas, setTareas] = useState("");
  const onkey=(e)=>{
    if(e.key=="Enter"){
      setLista([...lista, tareas]);
    }

  }
  const handleChange = (e) => {
    setTareas(e.target.value);
  };
  
  const DeleteItems = (indexItem) => {
    setLista(lista.filter((item, index)=>index!= indexItem));
  };
    
  useEffect(()=>{
    console.log(lista, tareas)
   },[lista, tareas])
   
  return (
    <div>
      <h1>Todolist</h1>
      <h1>Agregar Tareas</h1>
     
        <input
          type="text"
          onKeyPress={onkey}
          value={tareas}
          onChange= {handleChange}
          placeholder="Agregar tarea"
		  
        />
      <ul>
      {lista.map((item, index) => (
        <li key={index}>
          {item}
           <button className="btn" onClick={(e) =>
            {
              e.preventDefault();
               DeleteItems(index)}}>
            <i className="fas fa-trash-alt" />
          </button>
        </li>
      ))}
    </ul>
    
    </div>
  );
};
export default Todolist;
