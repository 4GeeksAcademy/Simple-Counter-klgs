//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";


let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
function display() {
    //render your react application
    //            qué vamos a dibujar,    donde lo vamos a dibujar
    ReactDOM.render(<Home digito={num1} digito2={num2} digito3={num3} digito4={num4} digito5={num5} digito6={num6}/>, document.querySelector("#app"));
    num1++;
    if (num1 > 6) {
        num2++
        num1 = 0
    }
    if (num2> 6) {
        num3++
        num2 = 0
    }
    if (num3> 6) {
        num4++
        num3 = 0
    }
    if (num4> 6) {
        num5++
        num4 = 0
    }
    if (num5> 6) {
        num6++
        num5 = 0
    }



}
setInterval(display, 1000)
