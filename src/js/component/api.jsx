import React, { useState, useEffect } from "react";

export default function App() {
const [tareas, setTareas] = useState([]);
useEffect(() => {
fetch('https://assets.breatheco.de/apis/fake/todos/user/mcfrank18', {
      method: "PUT",
      body: JSON.stringify(tareas),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
},[tareas]);
useEffect(() => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/mcfrank18', {
      method: 'GET',
      //redirect: 'follow'
      body: JSON.stringify(tareas),
      headers: {
        "Content-Type": "application/json"
      }
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
},[]);
    return (
        <div className="App">
        {lista.map((item, index) => {
        return <li>{obj.item.lista}</li>;
        })}
        </div>
    );
}


