import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("name:",name);
        console.log("Email:",email);
        
    }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>react form </h2>
          <label htmlFor=""> Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          <br /> <br />
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e)=>setemail(e.target.value) }/>
          <br />
          <button type="submit"> submit</button>
        </form>
      </div>
    </>
  );
}
export default Form;
