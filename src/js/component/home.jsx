import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = ({digito,digito2,digito3,digito4,digito5,digito6}) => {
    return (
        <div className="text-center">
        <div className="row bg-dark">
            <div className="col-1"  style={{fontSize:"250px", color:"white"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>
            </div>
          
            <div className="col-11">
            <SecondsCounter digito= {digito} digito2= {digito2} digito3= {digito3}  digito4= {digito4}  digito5= {digito5}  digito6= {digito6}/>
            </div>
           
            </div>
        
           
        </div>
    );
};
export default Home;
