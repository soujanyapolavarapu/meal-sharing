import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/TestComponent/Home.js";
import Meals from "./components/TestComponent/Meals.js";
import MealDetail from "./components/TestComponent/MealDetail.js";
import "./App.css";
import Header from "./components/TestComponent/Header";
import Footer from "./components/TestComponent/Footer";
import AddReview from "./components/TestComponent/AddReview";
import AddMeal from "./components/TestComponent/AddMeal";
//import AddMeal from "./components/TestComponent/AddMeal";

function App() {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchMeal, setSearchMeal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fechedData();
    fetchedReviewData();
  }, [searchMeal]);

  const fechedData = () => {
    if (searchMeal == "") {
      fetch("/api/meals")
        .then((res) => res.json())
        .then((meals) => {
          setIsLoading(false);
          setMeals(meals);
        });
    } else {
      fetch(`/api/meals?title=${searchMeal}`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          console.log('hello i am serching')
          setMeals(data);
        })
    }
  };

  const fetchedReviewData = () => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((meals) => {
        const reviews = meals.map((meal) => {
          return {
            mealid: meal.meal_id,
            stars: meal.stars,
          };
        });
        setReviews(reviews);
      });
  };

  return (
    <Router>
      
      <Header />
      {/* <style>{"body { background-image: url(src/client/components/TestComponent/backgroundImg.jpeg); }"}</style> */}
      <Route exact path="/">
        <Home
          meals={meals}
          //setSearchMeal={setSearchMeal}
          //searchMeal={searchMeal}
          isLoading={isLoading}
        />
      </Route>
      <Route exact path="/meals">
        <Meals
          meals={meals}
          setSearchMeal={setSearchMeal}
          searchMeal={searchMeal}
          isLoading={isLoading}
          reviews={reviews}
        />
      </Route>
      <Route exact path="/meals/addMeal">
      <AddMeal/>
        </Route>
        <Route exact path="/meals/contact">
          <h1>contact</h1>
        </Route>  
      <Route exact path="/meals/:id">
        <MealDetail meals={meals} />
      </Route>
      <Footer />
     
    </Router>
  );
}

export default App;
