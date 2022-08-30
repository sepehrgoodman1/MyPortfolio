import "./App.css";
import Logo from "./images/logo.png";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import SiteDesign from "./Components/SiteDesign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GameDev, GraphicDesign, ListWebDesign } from "./Data";
import MyCodes from "./Components/MyCodes";

function App() {
  return (
    <Router>
      <Navbar Logo={Logo} />
      <div className="App">
        <Routes>
          <Route
            path="/Graphic"
            element={
              <>
                <SiteDesign
                  MyList={GraphicDesign}
                  Title={"طراحی های گرافیکی برای شرکت های خارجی "}
                />{" "}
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/GameDev"
            element={
              <>
                <SiteDesign MyList={GameDev} Title={"بازی های کامپیوتری"} />{" "}
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/webdesign"
            element={
              <>
              <div className="Mt_150">
                <MyCodes/>
              </div>
              
                <SiteDesign
                  MyList={ListWebDesign}
                  Title={"سایت های طراحی شده"}
                />{" "}
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Carousel /> <AboutMe /> <Skills />
                <MyCodes/>
                <SiteDesign
                  MyList={ListWebDesign}
                  Title={"سایت های طراحی شده"}
                />{" "}
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
