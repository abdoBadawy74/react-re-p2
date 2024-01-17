import React, { useEffect, useState } from "react";

export default function Gallary() {
  let [count, setCount] = useState(0);
  let [name, SetName] = useState("Ali");

  // UnMountiing
  
  // mounting
  useEffect(() => {
    // call Api
    console.log("Componenet did mount");
  }, []);
  
  // updating
  useEffect(() => {
    if (count === 0) {
      return;
    }
    console.log("Componenet did update when count changed");
  }, [count]);

  useEffect(() => {
    if (count === 0 && name==="Ali") {
      return;
    }
    console.log("Componenet did update when count | name changed");
  }, [count,name]);

  useEffect(()=>{
    console.log("Componenet did mount ||");

    return (()=>{
      console.log("component will unMount");
    })

  },[])


  function changeCount() {
    count = setCount(Math.random());
  }

  function changeName() {
    name = SetName("Abdo");
  }

  return (
    <div>
      <h3>Gallary componenet</h3>
      <h5>Count: {count}</h5>
      <h5>Name: {name}</h5>
      <button onClick={() => changeCount()} className="btn btn-info">
        Change
      </button>
      <button onClick={() => changeName()} className="btn btn-info">
        Change Name
      </button>
    </div>
  );
}
