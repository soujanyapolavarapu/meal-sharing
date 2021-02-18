const express = require("express");
const router = express.Router();
const knex = require("../database");


//Returns all reviews
router.get("/", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      // const titles = await knex("meals").select("title");
      // response.json(titles);
      const reviews = await knex("review");
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });

  //Adds a new review
  router.post("/", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      // const titles = await knex("meals").select("title");
      // response.json(titles);
      const reviews = await knex("review")
      .insert(request.body);
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });

//Returns review by id
  router.get("/:id", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      // const titles = await knex("meals").select("title");
      // response.json(titles);
      const reviews = await knex("review")
      .where({id: parseInt(request.params.id)});
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });

//Updates the review by id
  router.put("/:id", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      // const titles = await knex("meals").select("title");
      // response.json(titles);
      const reviews = await knex("review")
      .where({id: parseInt(request.params.id)})
      .update(request.body);
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });

  //Deletes the review by id
  router.delete("/:id", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      // const titles = await knex("meals").select("title");
      // response.json(titles);
      const reviews = await knex("review")
      .where({id: parseInt(request.params.id)})
      .del();
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });












module.exports = router;