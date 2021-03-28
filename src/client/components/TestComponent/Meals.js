import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("/api/meals");
    const mealsArray = await data.json();
    console.log(mealsArray);
    setMeals(mealsArray);
  };
  return (
    <div>
      <h1>Welcome to Meal App</h1>
      <Meal meals={meals} />
    </div>
  );
};

function Meal({ meals }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [created_date, setCreated_date] = useState("");
  const [location, setLocation] = useState("");
  const [max_reservations, setMax_reservations] = useState("");
  const [price, setPrice] = useState("");
  const [when, setWhen] = useState("");
  const [formNotFill, setFormNotFill] = useState(false);

  //post
  async function postData(url = "", data = {}) {
    try {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    } catch (err) {
      console.log(err);
    }
  }

  const addMeal = (e) => {
    e.preventDefault();
    if (
      title === "" &&
      description === "" &&
      created_date === "" &&
      location === "" &&
      max_reservations === "" &&
      price === "" &&
      when === ""
    ) {
      setFormNotFill(!formNotFill);
    } else {
      const mealData = {
        id: Math.floor(Math.random() * 100),
        title: title,
        description: description,
        created_date: created_date,
        location: location,
        max_reservations: max_reservations,
        price: price,
        when: when,
      };
      postData("/api/meals", mealData).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
      setFormNotFill(!formNotFill);
    }
  };
  

  return (
    <div>
      <div className="App">
        <form onSubmit={addMeal} className="boxEffect">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <br />
          <label htmlFor="created_date">created_date</label>
          <input
            type="date"
            id="created_date"
            name="created_date"
            value={created_date}
            onChange={(e) => setCreated_date(e.target.value)}
            placeholder="Title"
          />
          <br />
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
          <br />
          <label htmlFor="max_reservations">Max_reservations</label>
          <input
            type="text"
            id="max_reservations"
            name="max_reservations"
            value={max_reservations}
            onChange={(e) => setMax_reservations(e.target.value)}
            placeholder="Max_reservations"
          />
          <br />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
          <br />
          <label htmlFor="when">When</label>
          <input
            type="date"
            id="when"
            name="when"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            placeholder="When"
          />
          <br />
          <br />
          <button type="submit">Add Meal </button>
        </form>
      </div>

      {formNotFill && <h2>Please fill the data</h2>}

      <ul>
        {meals.map((meal) => (
          <div key={meal.id} className="meals">
            <Link to={`/meals/${meal.id}`}>
              <div className="boxEffect">
                <div>
                  <li>
                    <h2>{meal.title}</h2>
                  </li>
                  {/* <li><h3>{meal.description}</h3></li> */}
                </div>
                <div className="mealImg">
                  <img
                    src="src/client/components/TestComponent/newImg.png"
                    alt="salad"
                    width="100"
                    height="80"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Meals;
