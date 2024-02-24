import React, { useEffect } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import Card from "./components/card";
import Footer from "./components/footer";
import profilPicture from "./components/image/profil2.jpg";

const App = () => {

  useEffect (() => {
    document.title = "Raju Yadera - LinkTree"
  });

  return (
    <div className="App">
      <ParticlesBg
        type="thick"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          height: 1100,
        }}
      />
      <header className="App-header">
        <img src={profilPicture} />
        <h1>@rajuydr</h1>
      </header>
      <Card />
      <Footer/>
    </div>
  );
};

export default App;
