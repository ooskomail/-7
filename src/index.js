import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tick = ()=> {
  const elem = (
    <div>
      <h1>oosta</h1>
   
    <h2>
      it is {new Date().toLocaleTimeString()}
    </h2>
    </div>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 elem
);
}

setInterval(() => {
  tick()
}, 1000);




