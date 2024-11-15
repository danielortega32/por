import React, { useRef } from 'react';
import {Main} from "./components";

function App() {
  
  const mainRef = useRef(null);
  


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
     
     
      
     
      <div ref={mainRef}><Main /></div>
     
     
    </div>
  );
}
export default App;

