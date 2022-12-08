import React, {useState, useEffect} from "react";

function EnfantUn(props) {
  return (
    <div className="App" style={{border:"1px black solid", margin:5, padding:2}}>
        <p style={{color:"black"}} >
        Composant Enfant n°1 
        </p>

        <button onClick={props.misAjourDuClique}> Clique !</button>
    </div>
  );
}

export default EnfantUn;
