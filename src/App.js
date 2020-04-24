import "./App.css";
import React from "react";
import Pizza from "./form"
import {Link, Route} from "react-router-dom";
import Home from "./home"

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pizza'>
          <Pizza />
        </Route>  
    </div>
  );
};
export default App;