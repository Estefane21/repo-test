import React, { useState } from 'react';
import './styles.css';


function Welcome(props){
    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador+1);
    }

    return(
        <>
     <h1>Contador: {contador}</h1>
     <button onClick={incrementar}>incrementar</button>
     </>
    );
}
export default Welcome;