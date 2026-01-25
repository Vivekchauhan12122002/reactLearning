import { useState } from "react";
function Validation() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [error,seterror]=useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!name || !email){
            seterror ("Please fill all fields!");
        }else{
            seterror("")
            console.log("Form submitted :",{name, email});
            alert("Form submitted sucessfully!")
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Form Validation</h2>
      
        <input type="text" 
        placeholder="Name " 
        value={name}
        onChange={(e)=>setname(e.target.value)}
        />
        <br />
        <input type="email"
         placeholder="Email"
          value={email}
        onChange={(e)=>setemail(e.target.value)}
         />
        <br />
        {error && <p style={{colour: "red"}}>{error}</p>}
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Validation;
