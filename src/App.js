import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <EventBind /> */}
        <ParentComponent />
        {/* <Navbar/> */}
        {/* <Counter /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Route exact path='/' component={Home}></Route> */}
        {/* <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
