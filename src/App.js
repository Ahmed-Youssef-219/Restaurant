import React, { useState } from "react";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";


function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={`${isDark ? 'dark' : ''} box-border scroll-smooth transition-all delay-1000 duration-1000 ease-linear`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Home />
      <About />
    </div>
  );
}

export default App;
