import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomeScreen from './Components/Screens/HomeScreen';


function App() {




  return (
    
    <>
    
      <Navbar />
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column-reverse"
      }}>
        <HomeScreen />
     
  </div>
    </>
  );
}

export default App;
