import React from 'react';
import './Button.css';

const isOperator = val =>{
 return !isNaN(val) || val==="." || val==="="
}
//Esto de arriba quiere decir que evalúe si la tecla es Igual, punto o número 

const Button = props => <div 
      onClick={()=>props.handleClick(props.children)}
      className={`button-wrapper ${isOperator(props.children) ? null:"operator" }`}> 
      {props.children} 
     </div>
//Esto de arriba significa que evalúe qué clase ponerle segun sea operador, o si ya es un símbolo de multiplicación,
//resta, etc, entonces que le ponga la clase de color naranja
export default Button;