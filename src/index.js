import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// let docTitle= document.title;

// window.addEventListener('blur', ()=>{
//     docTitle =" Come Back :(";
// });

// window.addEventListener('focus', (location)=>{
//   location.reload(true);
//   document.title= docTitle;
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

