import { useState } from "react";

function Userprophile() {
  const [Name, setName] = useState(" Guest");
  const [Age, setAge] = useState(18);
  return (
    <div>
      <button onClick={() => setName("vivek chauhan")}>set my name</button>
      <button onClick={() => setAge(Age + 1)}>set my age</button>

      <h1>Name : {Name}</h1>
      <h3>Age : {Age}</h3>
    </div>
  );
}

export default Userprophile;
