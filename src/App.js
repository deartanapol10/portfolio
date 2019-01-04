import React, { Component } from "react";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Fade from "react-reveal/Fade";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="App">
               {/* <Navbar /> */}
               <Landing />
               <Fade>
                  <Education />
                  <Skills />
                  <Experiences />
                  <Contact />
               </Fade>
               <Footer />
            </div>
         </React.Fragment>
      );
   }
}

export default App;
