import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";

const Home = ({ meals, isLoading }) => {
  const [searchMeal, setSearchMeal] = useState("");
  console.log(meals);

  return (
    <div>
      <div className="homeDiv">
        <h1 className="headingInHome">Welcome to Meal Sharing</h1>
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div className="search_input_box">
            {/* <input
              className="search_input"
              type="text"
              placeholder="search meal..."
              value={searchMeal}
              onChange={(e) => setSearchMeal(e.target.value)}
            /> */}
            {/* <FaSearch /> */}
          </div>
          
        )}
        <div className='row'>
          
         {searchMeal !== ''&& meals.map((meal) => (
        <div key={meal.id}>
            <div >
            <h1>{meal.title}</h1>
        </div>
        </div>
      ))}
      </div>
      </div>
      <img
      className='home-img'
        src="https://i.ibb.co/SKn0nSF/img2.jpg"
        alt="food_image"
        // width="100%"
        // height="700%"
      />

      
    </div>
  );
};
export default Home;
