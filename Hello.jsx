    import { useRef } from "react";
function Hello() {
    const name =useRef();
    const email =useRef();

    const handlesubmit = (e) =>{
      e.preventDefault()
      console.log("Name : ",name.current.value);
      console.log("Email : ",email.current.value);
      
    }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h3>Uncontroled Form</h3>
        <input type="text" ref={name} placeholder="Name" />
        <br />
        <input type="email" ref={email} placeholder="Email" />
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Hello;
