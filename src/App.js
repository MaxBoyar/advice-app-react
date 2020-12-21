import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Advice from './components/Advice'
import './App.css';

function App() {

  //States
  const [advice,setAdvice]=useState({});
  
  //Function to fetch with axios
  const fetch=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(res=>{
      setAdvice(res.data.slip)
      
    }).catch(err=>{
      
      console.log(err)
    })
  }

  //Fetch from api by call fetch() function on mount
  useEffect(()=>{
    fetch();
  },[])

  //Destructure 
  const {advice:myAdvice}=advice;
  
  // or JSON stringify
  // JSON.stringify(advice.advice)
  return (
    <div className="App">
      
      <div className="app-body container">
      <Advice
        advices={myAdvice}
        call={fetch}
        

      />
       

      </div>
      
     
      
    </div>
  );
}

export default App;
