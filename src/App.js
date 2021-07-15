import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return(
      <Router>
        <div className="App">
          <Nav/>
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </switch>
          <Footer/>
        </div>  
      </Router> 
    );
}  
export default App;
