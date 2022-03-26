import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import Navbar from "./Components/Navbar";
import { getLibrary } from "./config/connector";
import HomeScreen from "./screens/Home";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column-reverse",
        }}
      >
        <HomeScreen />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
