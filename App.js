// import React, { useState } from "react";
// import "./App.css";

// function Multiplecounter(){
// const Multiplecounter = () => {
//   const[key,keyid]=useState(0);
//    const [count,setcount]=useState(0)
// };
// <button onClick={()=> keyid(key=1) }>1</button>
//    return (  
//   <div>
//     <h1>Counter</h1>
//     <button onClick={()=> setcount(count+1)}>+</button>
//     <button onClick={()=> setcount(count-1)}>-</button>
//     <button onClick={()=> setcount(0)}>Reset</button>
// </div>)
  
// }

// export default Multiplecounter;

import React,{useState} from "react";

const Multiplecounter = () => {
  //usestate keyID
  //3 buttons
  // button onClick key id change
  const [keyId, setkeyId] = useState(0);
  const[count,setcount]=useState(0);
  return(
    <><div>
     <button onClick={()=>setkeyId(1)}>1</button>
      <button onClick={()=>setkeyId(10)}>10</button>
      <button onClick={()=>setkeyId(100)}>100</button></div>

      {keyId === 1 && (<div className="App">
      <center>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}>+</button>
      <button onClick={()=> setcount(count-1)}>-</button>
      <button onClick={()=> setcount(0)}>Reset</button>
      </center>)</div>)}

      {keyId === 10 && (<div className="App">
        <center>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+10)}>+</button>
      <button onClick={()=> setcount(count-10)}>-</button>
      <button onClick={()=> setcount(0)}>Reset</button>
     </center> </div>)
      }
      
      {keyId === 100 && (<div className="App">
        <center>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+100)}>+</button>
      <button onClick={()=> setcount(count-100)}>-</button>
      <button onClick={()=> setcount(0)}>Reset</button>
     </center> </div>)
      }

</>);
};

export default Multiplecounter;