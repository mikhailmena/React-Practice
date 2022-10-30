import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MainDiv from './MainDiv';
 
import "./intro.css"


function Intro(){
    return (
        <div className="card" id="introCard">
            <h1>Welcome to SSG's interactive eBook:</h1>
            <img id="cover" src='./GettingOut.jpg' style={{width: '25%'}}></img>
            
            
            <button className="btn btn-white btn-animate" id="Enter" onClick={EnterPage}>Click here to enter</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro/>
    
  </React.StrictMode>
); 

function EnterPage() {
root.render(
  <React.StrictMode>
    <Header/>
    <MainDiv/>
    
  </React.StrictMode>
)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
