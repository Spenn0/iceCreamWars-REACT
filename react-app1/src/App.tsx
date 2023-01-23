import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import AdDesigner from './AdDesigner';
import Votes from './Votes';
import Ad from './components/Ad'

function App() {
  return (
    <div className="App">
    <Header name="Chirpus" />
        <Ad flavor="strawberry" adFontSize = {24} theme={false} />
        <Ad flavor="chocolate" adFontSize = {32} theme={false}/>
        <Ad flavor="vanilla" adFontSize = {12} theme={true}/>
      <div className="AppComponents">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
