import React from 'react';
import Contobject from './Content';

import './App.css';

const Content = (props) => {
  console.log(this.props.Contobject)
 return <Contobject />

 
}

function App() {
  return (
    <div className="App">
        <div className='card'>
          <h2 className='card-title'>
            Introduction
          </h2>
          
          <div className='card-body'>
          <p className='card-text'>My name is Marc and I want to help you transition out of the Military without feeling overwhelmed and frustrated. I am a former Active Duty Staff Sergeant who served 8 years in the Army. During my service, I was a "hard charger", "high speed", "highly motivated" NCO and I gave everything I had to making my Soldiers' lives better. When I started the transition process, I was not expecting it to be so confusing, frustrating, and complicated. I made this guide to help you get out of the Military with less stress and more success.</p>
          <p className='card-text'>If you are feeling a little uncertain about getting out, here's my advice: <br></br>DO IT!!<br></br>There is a reason why you considered getting out and most of us get caught in the trap of staying in the Military because it seems easier to deal with the problems we know instead of dealing with new problems.</p>
          <h2>YOU ARE GOING TO BE OK!</h2>
          <p className='card-text'>If you want to talk to someone check out the link below</p>
          <a href='https://www.veteranscrisisline.net/get-help-now/military-crisis-line/'>Veteran Crisis Line</a>
          </div>
        </div>
   
     
    </div>
  );
}

export default App;
