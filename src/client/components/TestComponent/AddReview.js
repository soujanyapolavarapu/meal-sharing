// @ts-ignore
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostData from "./PostData";

const AddReview = () => {
  const [meal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [created_date, setCreated_date] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState("");
  const [isvisible, setIsvisible] = useState(false);

  const params = useParams();

  const minDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const currentDate = `${year}${"-"}${
      month < 10 ? `0${month}` : `${month}`
    }${"-"}${date < 10 ? `0${date}` : `${date}`}`;
    
    console.log(currentDate)
    return currentDate;
  };

  useEffect(() => {
    //fetching specific meal with id
    // @ts-ignore
    fetch(`/api/meals/${params.id}`)
      .then((res) => res.json())
      .then((meal) => {
        setMeal(meal[0]);
      });
  }, []);

  const setStatesEmpty = () => {
    setTitle("");
    setDescription("");
    setStars("");
  };

  function onSubmit(e) {
    e.preventDefault();
    const newReview = {
      // @ts-ignore
      meal_id: params.id,
      title,
      created_date,
      description,
      stars,
    };
    //posting a review
    const response = PostData("/api/reviews", newReview);

    if (response) {
      alert("Thank You For Your Review");
    } else {
      // @ts-ignore
      throw new Error(response.status);
    }

    // setForm(false);
    setStatesEmpty();
  }

  const addReservation = () => {
    console.log("hello please add reservation to meal");
    setIsvisible(!isvisible);
  };

  return (
    <div>
    <div className='mealItem'>
      <div className="mealDetails">
        <img
          src="https://i.ibb.co/fMVnBYH/imgdefault.jpg"
          width="250px"
          height='150px'
        ></img>
        <h3>
          Meal :{" "}
          {
            // @ts-ignore
            meal.title
          }
        </h3>
        <h4>
          Description:{" "}
          {
            // @ts-ignore
            meal.description
          }
        </h4>
        <h4>
          Price :{" "}
          {
            // @ts-ignore
            meal.price
          }
          DKK
        </h4>
        </div>
        </div>

      <div className="Addbutton">
        <button onClick={addReservation}>Add review</button>
      </div>
      {isvisible && (
        <div className="formData">
        <form onSubmit={onSubmit} >
          <br />
          <label htmlFor="title">*Meal Title</label>
              <input
                type="text"
                id="title"
                className='title'
                value={title}
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />

<br />
          
            <label htmlFor="created_date">*Created_date </label>
            <input
              type="date"
              id="created_date"
              className='cre_date'
              value={created_date}
              min={minDate()}
              required
              name="created_date"
              onChange={(e) => setCreated_date(e.target.value)}
              placeholder="Created date"
            ></input>
          
          <br />
            <label htmlFor="description">
              *Description
            </label>
            <input
            type='text'
              id="description"
              name="description"
              className='description'
              value={description}
              // @ts-ignore
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          
          <br />
            <label htmlFor="rating">*Rating </label>
            <select
              id="Rating"
              name="stars"
              className='rating'
              value={stars}
              required
              onChange={(e) => setStars(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br />
          <button type="submit" className="Addbutton">
            {" "}
            Submit
          </button>
        </form>
        </div>)}
      </div>  
      
  
  );
};
export default AddReview;
