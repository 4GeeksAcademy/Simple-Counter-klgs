import React from "react";

const SecondsCounter = ({digito,digito2,digito3,digito4,digito5,digito6})=> {
    return (
        <div>
            <div className="Digitos" style={{fontSize:"250px", color:"white"}} >
            {digito6}
            {digito5}
            {digito4}
            {digito3}
            {digito2}
            {digito}   
          
            </div>
          
        </div>
        
        
    )
}

export default SecondsCounter;