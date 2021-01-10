import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Counter />
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
