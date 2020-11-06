import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const y = new Date();
const th = String(y.getHours());

const heading = {
  color: '#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontFamily: "'Itim', cursive",
  backgroundColor: '#ffe9c5',
  borderRadius: '20px',
  padding: '20px 20px'
};

ReactDOM.render(
  <>
    {/* <App /> */}
    {/* <h1 style={heading}>{`Hello Sir, ${x}`}</h1> */}
    <div>
      <h1 style={heading}>Hello Sir</h1>
    </div>
  </>,
  document.getElementById('root')
);

let x;
let z;
if(parseInt(th)>=1 && parseInt(th)<11){
  x = "Good Morning";
  z = x.fontcolor("green");
  document.getElementsByTagName('h1')[0].innerHTML = `Hello Sir, ${z}`;
}else if(parseInt(th)>=11 && parseInt(th)<19){
  x = "Good Afternoon";
  z = x.fontcolor("orange");
  document.getElementsByTagName('h1')[0].innerHTML = `Hello Sir, ${z}`;
}else if(parseInt(th)>=19 && parseInt(th)<24){
  x = "Good Night";
  z = x.fontcolor('black');
  document.getElementsByTagName('h1')[0].innerHTML = `Hello Sir, ${z}`;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
