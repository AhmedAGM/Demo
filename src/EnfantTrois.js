import React, {useState, useEffect} from "react";

function EnfantDeux(props) {

  return (
    <div style={{border:"1px black solid", margin:5, padding:2}}>
    <p style={{color:"black"}} >
    Composant Enfant n°3
    </p>
        <p style={{color:"black", fontSize:15}} >
            Coucou tu veux voir mon useState ?
        </p>

    </div>
  );
}

export default EnfantDeux;
