import React, { useState } from "react";
import About from "./component/About";
import BestDishes from "./component/BestDishes";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={`${isDark ? 'dark' : ''} box-border scroll-smooth transition-all delay-1000 duration-1000 ease-linear`}>
      <BrowserRouter>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='bestdishes' element={<BestDishes />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
