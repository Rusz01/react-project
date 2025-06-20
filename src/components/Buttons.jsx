import React from 'react'

function buttons({name, color, nameMm, txtColor}) {


function changeColor() {

   if (name === "Grey") {  
    color(name)
    nameMm(name)
      txtColor("white")
    } else if (name === "Blue") {
      color(name)
      nameMm(name)
      txtColor("white")
    } else if (name === "Orange") {
      color(name)
      nameMm(name)
      txtColor("white")
    } else if (name === "Pink") {
      color(name)
      nameMm(name)
      txtColor("black")
    } else if (name === "Purple") {
      color(name)
      nameMm(name)
      txtColor("white")
    } else if (name === "Red") {
      color(name)
      nameMm(name)
      txtColor("white")
    } else if (name === "Yellow") {
      color(name)
      nameMm(name)
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