import React from 'react'

function buttons({name, color, nameMm, txtColor}) {


function changeColor() {

   if (name === "Grey") {  
    color("grey")
    nameMm("Grey")
      txtColor("white")
    } else if (name === "Blue") {
      color("blue")
      nameMm("Blue")
      txtColor("white")
    } else if (name === "Orange") {
      color("orange")
      nameMm("Orange")
      txtColor("white")
    } else if (name === "Pink") {
      color("pink")
      nameMm("Pink")
      txtColor("black")
    } else if (name === "Purple") {
      color("purple")
      nameMm("Purple")
      txtColor("white")
    } else if (name === "Red") {
      color("red")
      nameMm("Red")
      txtColor("white")
    } else if (name === "Yellow") {
      color("yellow")
      nameMm("Yellow")
      txtColor("black")
   }
}
  return (

      <button onClick={changeColor} className="px-8 py-3 mr-5  rounded-xl"
      style={{ backgroundColor: name.toLowerCase()}}
      >{name}</button>
     
  )
}

export default buttons