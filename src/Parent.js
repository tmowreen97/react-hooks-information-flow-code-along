import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";
//We want when either Child component is clicked, the Parent component should change color
function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  //inital value for color state is a random color
  const [childrenColor, setChildrenColor] = useState('#FFF')
  //create a variable to keep track of the color of the Child component using state

  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor)
    //updating color state to a new value, a new random color
    setChildrenColor(newChildColor)
    //updating the Children Color state, with an argument that will be passed through the handleChangeColor function
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child 
        color={childrenColor} 
        //since the data that represents the color of the two Child components live in the Parent, we pass that data down as props
        onChangeColor={handleChangeColor} 
      />
    
      <Child 
        color={childrenColor} 
        onChangeColor={handleChangeColor}
      />
    </div>
  );
  //We need to run the handleChangeColor() function when either Child component is clicked. So we are going to pass this state changing function as a prop to both Child components. (The Child component already has a prop labeled onChangeColor)
}


export default Parent;
