import React, {useState, useEffect} from "react";

function EnfantDeux(props) {

  return (
    <div style={{border:"1px black solid", margin:5, padding:2}}>
    <p style={{color:"black"}} >
    Composant Enfant n°2
    </p>
        <p style={{color:"black", fontSize:15}} >
        Nombres de cliques :  
        {props.cliqué}
        </p>

    </div>
  );
}

export default EnfantDeux;
