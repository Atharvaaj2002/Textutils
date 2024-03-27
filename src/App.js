
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import  Alert  from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App(){
  const[mode, setmode]=useState('light');
  const[alert, setAlert]= useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
 
  const toggleMode=()=>{
  if(mode==='light'){
    setmode('dark');
   document.body.style.backgroundColor= '#0e0e33';
   showAlert("DARK MODE IS ON", "SUCCESS") ;
  // document.title='Textutils'-'dark mode'
  }


  else{
    setmode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light MODE IS ON", "SUCCESS");
   // document.title='Textutils'-'light mode'
   }
}
  return(
   
  <Router>
      <Navbar title="TextUtils"   aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>     
<div className="container my-3  ">
<Routes>   
          <Route path="/about" element={<About mode={mode} / >}/>
          \
        
   <Route path="/" element={<Textform heading=" TextUtils-Word Counter, Character Counter, Undo, Copy function"  mode={mode} showAlert={showAlert} />}/>
   </Routes>
          </div>
    
        
          </Router>


  );
}
export default App;
