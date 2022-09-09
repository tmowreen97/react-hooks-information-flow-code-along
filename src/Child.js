import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  console.log(onChangeColor)

  function handleClick(){
    const newColor = getRandomColor()
    onChangeColor(newColor)
    //now since onChangeColor references our handleChangeColor function which now takes an argument, we intorduce another function which we'll pass as an event handler. This function passes a new random color into our prop onChangeColor as an argument. 
  }
  return (
    <div  
      onClick ={handleClick}
      //now our onClick event handler uses handleClick as its function reference
      className="child" 
      style={{ backgroundColor: color }} 
      //using the color props data inside the Child component as the style color.
    />
  );
}
//Were using the prop onChangeColor as an event handler with onClick. The onChangeColor prop references a function passed down from the Parent component.

export default Child;
