import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import For_css from "./for_css"
import reportWebVitals from './reportWebVitals';

// import Practice from "./practice"
// import Class from "./Class_container"
// import Corn from "./class_cointainer_practice"
// import Onchange from "./Onchange"
// import Change from "./onchange_practice"
// import Practice2 from "./practice2"
// import Mount from "./mounting"
// import Lap from "./life_cycle/constructor"
// import Up from "./life_cycle/Updating_lifecycle"
// import Map_list from "./map_list"
// import Mounting from "./New folder/getDerivedStateFromProps"
import Shouldcomponentupdate from "./New folder/shouldComponentUpdate"
import UseState from "./hooks/usestate"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <For_css/> */}
    {/* <Practice/> */}
    {/* <Practice2/> */}
    {/* <Class/> */}
    {/* <Corn/> */}
    {/* <Onchange/> */}
    {/* <Change/> */}
    {/* <Mount myname="john" myplace="kovai"/> */}
    {/* <Lap/> */}
    {/* <Up name="john"/> */}
    {/* <Map_list/> */}
    {/* <Mounting/> */}
    {/* <Shouldcomponentupdate/> */}
    <UseState />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
