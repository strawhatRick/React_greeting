import React from 'react';
import * as Calc from './Calc';
function App(){
    return(
        <>
            <ol>
            <li>SUM {Calc.add(40, 3)} </li>
            <li>SUBS {Calc.subs(30, 19)} </li>
            <li>MUL {Calc.mul(30, 7)} </li>
            <li>DIV {Calc.div(45, 7)} </li>
            </ol>
        </>
    )
}

export default App;