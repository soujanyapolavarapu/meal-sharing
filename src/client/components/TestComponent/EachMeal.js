import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MealDetails = () => {
  const [meal, setMeal] = useState({});
  const [phonenumber, setPhonenumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number_of_guests, setNumber_of_guests] = useState("");
  const [created_date, setCreated_date] = useState("");
  const [reservation, setReservation] = useState(null);
  const [reservationSucess, setReservationSucess] = useState(false);
  const [error, setError] = useState(false);
  //const [showReservation, setShowReservation]= useState('');
  const [formNotFill, setFormNotFill] = useState(false);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchItom();
    fetchItomReservation();
  }, []);

  const fetchItom = async () => {
    console.log("hello prams");

    const data = await fetch(`/api/meals/${params.id}`);
    const eachItem = await data.json();
    console.log(eachItem);
    setMeal(eachItem[0]);
  };
  const fetchItomReservation = async () => {
    try {
      const data = await fetch("api/meals?availableReservations=true");
      const eachReservationItem = await data.json();

      eachReservationItem.filter((eachItem) => {
        if (eachItem.id === Number(params.id)) {
          console.log(eachItem);
          setReservation(eachItem.unreserved);
        }
      });
    } catch (err) {
      setError(true);
    }
  };
  //console.log(meal)

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
      setError(true);
    }
  }
  const addReservation = (event) => {
    event.preventDefault();
    if (
      phonenumber === "" &&
      name === "" &&
      email === "" &&
      number_of_guests === "" &&
      created_date === ""
    ) {
      setFormNotFill(!formNotFill);
    } else {
      const reservationData = {
        meal_id: params.id,
        contact_phonenumber: phonenumber,
        contact_name: name,
        contact_email: email,
        number_of_guests: number_of_guests,
        created_date: created_date,
      };
      console.log(reservationData);

      postData("/api/reservations", reservationData).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        //setShowReservation(data)
        setReservationSucess(!reservationSucess);
        //console.log(setShowReservation);
      });
      setFormNotFill(!formNotFill);
    }
  };

  return (
    <div className="App">
      <div className="eachMeal">
        <h1>Title: {meal.title}</h1>
        <h1>Location: {meal.location}</h1>
        <h1>Reservations: {meal.max_reservations}</h1>
      </div>

      {reservation > 0 ? (
        <div>
          <h3 className="reservations">Available reservaions: {reservation}</h3>
          <h1>Please fill the form to reserve seat </h1>
          <form onSubmit={addReservation} className="boxEffect">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              placeholder="Phonenumber"
            />
            <br />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <label htmlFor="number_of_guests">Number_of_guests</label>
            <input
              type="number"
              id="number_of_guests"
              name="number_of_guests"
              value={number_of_guests}
              onChange={(e) => setNumber_of_guests(e.target.value)}
              placeholder="number_of_guests"
            />
            <br />
            <label htmlFor="created_date">Created_date</label>
            <input
              type="date"
              id="created_date"
              name="created_date"
              value={created_date}
              onChange={(e) => setCreated_date(e.target.value)}
              placeholder="number_of_guests"
            />
            <br />
            <button type="submit">Reserve Meal</button>
          </form>
        </div>
      ) : (
        <h2>This meal is not available </h2>
      )}
      {formNotFill && <h2>Please fill the data</h2>}

      <br />
      {name}
      <br />
      {email}
      <br />
      {phonenumber}

      {reservationSucess && <h2>Your reservation is succesful</h2>}
      {error && <h2>Your reservation is unsuccesfull</h2>}
    </div>
  );
};
export default MealDetails;
