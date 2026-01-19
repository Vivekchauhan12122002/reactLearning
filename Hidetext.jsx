import { use } from "react";
import { useState } from "react";
function Hidetext() {
  const [isvisible, setvisible] = useState(false);
  return (
    
    <div>
      
      <button onClick={() => setvisible(!isvisible)}>
        text
        {isvisible ? "Hide" : "Show"}
      </button>
      {isvisible && <p>i am here</p>}
    </div>
  );
}
export default Hidetext;

