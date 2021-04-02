const express = require("express");
const router = express.Router();
const knex = require("../database");

//Adds a new meal
 router.post("/", async (request, response) => {
  try {
  return await knex("meal")
      .insert(request.body)
      .then(mealId => {
        knex("meal")
          .where({ id: mealId[0] })
          .then(selectedMeal => {
            response.status(201).json(selectedMeal[0])
          })
      });
  } catch (error) {
    response.status(400).json(error)
    //throw error
  }
});

// router.post("/", async (request, response) => {
//   try {
//     return await knex("meal")
//       .insert(request.body)
//       .then(concertId => {
//         knex("meal")
//           .where({ id: concertId[0] })
//           .then(selectedConcert => {
//             response.status(201).json(selectedConcert[0])
//           })
//       });
//   } catch(err) {
//     if (err) {
//       return response.status(400).send(err)
//     } else {
//       return next(err)
//     }
//   }
// });


//Returns meal by id
router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const mealsById = await knex("meal").where({id: parseInt(request.params.id) });
      response.json(mealsById);
    } catch (error) {
      throw error;
    }
});

//Updates the meal by id
router.put("/:id", async (request, response) => {
  try {
    console.log(request.params);
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const mealsById = await knex("meal")
      .where({ id: parseInt(request.params.id) })
      .update(request.body)
      .then()
      response.json(mealsById);
    } catch (error) {
      throw error;
    }
});

//Deletes the meal by id
router.delete("/:id", async (request, response) => {
  try {
    console.log(request.params);
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const mealsById = await knex("meal")
      .where({ id: parseInt(request.params.id)})
      .del()
      response.json(mealsById);
    } catch (error) {
      throw error;
    }
});

//query params 
router.get("/", async (request, response) => {
  try{
     key = Object.keys(request.query)[0];

    const maxPrice = parseInt(request.query.maxPrice) || '1e500';
    const matchingTitle = request.query.title || '';
    let  createdAfter = new Date(request.query.createdAfter) ;
    createdAfter = (createdAfter > 0) ? createdAfter.toISOString() : 0;
    const availableReservations = request.query.availableReservations || '';
    value = parseInt(request.query.limit) || '1e500';

switch(true){
    case  typeof(key) === "undefined":
            meals = await knex("meal")
           response.send(meals);
         break;

    case  key === "maxPrice":
          meals = await knex("meal")
          .where( 'price', '<', maxPrice )
            response.status(200).send(meals);
        break;

    case  key === "availableReservations":
          if (availableReservations === "true"){
          const availableMeals = await knex("meal")
              .select('meal.id',
              'meal.title',
               'meal.location',
               'meal.when',
               'meal.max_reservations as Total_reservations',
               'reservation.number_of_guests as reserved')
            // knex.raw('meal.max_reservations - reservation.number_of_guests as unreserved'))
             .from('meal')
             .leftJoin("reservation", "meal.id", "=", "reservation.meal_id");
          
             //making null values to zeros for getting unreserved column/key
            const changedValue = availableMeals.forEach(meal =>{
               if(meal.reserved === null){
                meal.reserved=0;
              }
              let unreserved= meal.Total_reservations - meal.reserved;
              meal.unreserved = unreserved;
             });
             response.status(200).send(availableMeals);
            }else{
              response.status(400).send();
            }  
                break;

    case  key === "title":
              meals = await knex("meal")
              .where('title', 'like' ,`%${matchingTitle}%`)
                response.status(200).send(meals);
            break; 
            
    case  key === "createdAfter":
                  meals = await knex("meal")
                  .where('created_date', '>' , createdAfter)
                    response.status(200).send(meals);
                break; 
                
    case  key === "limit":
                  meals = await knex("meal")
                  .limit(value)
                  response.status(200).send(meals);
                break;           
    }
   } 
   catch (error) {
          throw error;
        }
  });
  
module.exports = router;

 