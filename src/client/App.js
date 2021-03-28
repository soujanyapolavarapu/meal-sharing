import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meals from "./components/TestComponent/Meals.js";
import Nav from "./components/TestComponent/Nav.js";
import Footer from "./components/TestComponent/Footer.js";
import MealDetails from "./components/TestComponent/EachMeal.js";
import Home from "./components/TestComponent/Home.js";
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <div>
        <style>{"body { background-image: url(src/client/components/TestComponent/img2.jpeg); }"}</style>
        </div> */}
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/meals/:id">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path="/meals">
            <Meals></Meals>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
