import React from 'react'

function buttons({name, color}) {


function changeColor() {

   if (name === "Grey") {  
    color("grey")
    } else if (name === "Blue") {
      color("blue")
    } else if (name === "Orange") {
      color("orange")
    } else if (name === "Pink") {
      color("pink")
    } else if (name === "Purple") {
      color("purple")
    } else if (name === "Red") {
      color("red")
    } else if (name === "Yellow") {
      color("yellow")
   }
}
  return (

      <button onClick={changeColor} className="px-8 py-3 mr-5 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
      style={{ backgroundColor: name.toLowerCase() }}
      >{name}</button>
     
  )
}

export default buttons