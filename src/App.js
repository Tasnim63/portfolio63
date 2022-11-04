import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";

function App() {
  const [navToggle,setNavToggle] =useState(false);
  const navClick =()=>{
    setNavToggle(!navToggle)

  }
  return (
    <>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : '' }`}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
          <div className="content">
            
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage/>}></Route>
              <Route path="/portfolios" element={<Portfolio/>}></Route>
              <Route path="/blogs" element={<Blogs/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
