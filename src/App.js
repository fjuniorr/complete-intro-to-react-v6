import React from 'react'
import ReactDOM from 'react-dom'
import report from './data.json';
import 'frictionless-components/lib/styles/report.css'
import { Report } from 'frictionless-components/lib/components/Report'
import { render } from 'frictionless-components/lib/render'

console.log("report", report)
console.log("Report", Report);

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };
  
//   const App = () => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet, {
//         name: "Lun",
//         animal: "Dog",
//         breed: "Havanese",
//       }),
//       React.createElement(Pet, {
//         name: "Pepper",
//         animal: "Bird",
//         breed: "Cockatiel",
//       }),
//       React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//     ]);
//   };
  
//   ReactDOM.render(React.createElement(App), document.getElementById("root"));


// const App = () => {
//     return React.createElement(
//       "div",
//       {},
//       React.createElement("h1", {}, "Adopt Me!")
//     );
//   };
  
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

// ReactDOM.render(React.createElement(Report), {report}, document.getElementById("root"));

render(Report, {report}, document.getElementById("root"));