/*
<div id="parent">
    <div id="child">
    <h1> I,am h1 tag</h1>
    <h2>I am H2 Tag </h2>
    <div/>

    

    <div id="parent">
    <div id="child">
    <h1> I,am h1 tag</h1>
    <h2>I am H2 Tag </h2>
    <div/>

  </div> 
*/


import React from "react"
import  ReactDOM from "react-dom/client"


const parent= React.createElement(
    "div",
{id:"parent"},
     [  React.createElement(
        "div",
          {
           id: "child"
          },
          [React.createElement("h1",{},"I,am h1 tag"),
          React.createElement("h2",{},"I,am h2 tag")]
     ),
     React.createElement(
        "div",
          {
           id: "child"
          },
          [React.createElement("h1",{},"I,am h1 tag"),
          React.createElement("h2",{},"I,am h2 tag")]
     )]
    )


const heading= React.createElement("h1",{

    id:"heading",
    xyz:"hi"
}, "Hello World From NamasteReact")

console.log(parent)

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)
   