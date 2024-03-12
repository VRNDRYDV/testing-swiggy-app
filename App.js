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
import ReactDOM from "react-dom/client"


// const parent= React.createElement(
//     "div",
// {id:"parent"},
//      [  React.createElement(
//         "div",
//           {
//            id: "child"
//           },
//           [React.createElement("h1",{},"I,am h1 tag"),
//           React.createElement("h2",{},"I,am h2 tag")]
//      ),
//      React.createElement(
//         "div",
//           {
//            id: "child"
//           },
//           [React.createElement("h1",{},"I,am h1 tag"),
//           React.createElement("h2",{},"I,am h2 tag")]
//      )]
//     )


// const heading= React.createElement("h1",{

//     id:"heading",
//     xyz:"hi"
// }, "Hello World From NamasteReact")

// console.log(parent)

//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(parent)
   

// const jsxHeading =<h1 id="heading">NamasteReact</h1>
// console.log(jsxHeading);
// root.render(jsxHeading)


//React Element 

const Title=()=>(
  <h1 className="head" tabIndex="5">Namaste React using jsx </h1>
)


//React functional component
const HeadingComponent = ()=>(
  <div id="container">
    <Title/>
 <h1>Namaste React from functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById(  "root"))
root.render(<HeadingComponent/>)