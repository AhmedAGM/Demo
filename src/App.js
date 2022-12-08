import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import EnfantDeux from './EnfantDeux';

import EnfantUn from './EnfantUn';

import EnfantTrois from './EnfantTrois';

function App() {

  const [cliqué, setCliqué] = useState(0)


  //Fonction a passer dans l'enfant 1
  const misAjourDuClique = () => {
    setCliqué(cliqué + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Composant Parent
        </p>
        <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "white", width: "75%", height: 150, borderRadius: 10 }} >


          <div>
            <EnfantUn misAjourDuClique={misAjourDuClique} />
          </div>


          <div>
            <EnfantDeux cliqué={cliqué} />
          </div>

          {/* On affiche le Composant enfant 3 que si la variable cliqué est égale a 15 ou plus */}
          {
            cliqué >= 15 &&
            <div>
              <EnfantTrois />
            </div>
          }

        </div>
      </header>

    </div>
  );
}

export default App;
