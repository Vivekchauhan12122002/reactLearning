import {useState} from 'react'

function TOdo() {
    const [ newtodo, setnewtodo] = useState("");
    const[todo, settodo] = useState([]);

    const handleSubmit=(e) => {
        e.preventDefault();
        if (newtodo) {
            settodo([...todo, {text:newtodo,completed: false}])
            setnewtodo("")
        }
         }

    const handleDelete=(index)=>{
      const newtodos = [...todo];
      newtodos [index].completed =!newtodos [index].completed
      settodo(newtodos)

    }

  return (
    <div> 
        <h2> To Do Form</h2>
      <form onSubmit={handleSubmit}>
       
        <input 
        type="text" 
        placeholder='Enter Your Task' 
        value={newtodo}
        onChange={(e)=>setnewtodo(e.target.value)}
        />
        <button type='submit'>Add new todo</button>
        
      </form>

      <ol>
        {todo.map((todo,index)=>(
            <li key={index}>
                <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>{todo.text}</span>
                <button onClick={()=>handleDelete(index)}>Delete</button>
                
            </li>
            
        ))}
        
      </ol>
    </div>  
  )
}



export default TOdo