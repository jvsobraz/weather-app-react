import React, {useState} from 'react';
import axios from 'axios';

function App() {

  //const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e5d55877d7ef290e791dd048dfd1bbaa'

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>São Paulo</p>
          </div>
          <div className="temp">
            <h1>25°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>30°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
