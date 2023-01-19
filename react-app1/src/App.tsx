import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import AdDesigner from './AdDesigner';
import Votes from './Votes';

function App() {
  return (
    <div className="App">
    <Header />
      <div className="AppComponents">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
