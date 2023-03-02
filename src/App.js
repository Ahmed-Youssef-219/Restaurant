import React, { useState } from "react";
import About from "./component/About";
import BestDishes from "./component/BestDishes";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";


function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={`${isDark ? 'dark' : ''} box-border scroll-smooth transition-all delay-1000 duration-1000 ease-linear`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Home />
      <About />
      <BestDishes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
