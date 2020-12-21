// import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
// import LoginForm from './LoginForm';
// import UserStore from './components/UserStore';
// import InputField from './InputField';
// import SubmitButton from './SubmitButton';
import './App.css';
import Sidebar from './Sidebar'
import HomeHeader from './HomeHeader.js';

function App(){
  return(
    <div className="App">
   
    <HomeHeader />
    <Sidebar />
    
    </div>
  )
}







export default App
