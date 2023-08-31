import { useRef } from "react";

function Ref(){

let inp1 = useRef();
let inp2 = useRef();
let inp3 = useRef();


function btn(){
    inp3.current.focus();
}
    
return(

<div className="container">

    <input ref={inp1} type="text" placeholder="Enter Something on Input 1..."  />
    <input ref={inp2} type="text" placeholder="Enter Something on Input 2..."  />
    <input ref={inp3} type="text" placeholder="Enter Something on Input 3..."  />

    <hr />

    <button onClick={btn}>Focus</button>

</div>

);
}

export default Ref;