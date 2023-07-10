const express = require("express");
const pool = require("../modules/pool");
const routerFeedback = express.Router();

//to GET all new feedback
router.get("/", (req, res) => {
    const queryText = "SELECT * FROM feedback";
    pool
       .query(queryText)
       .then((result) => {
        res.send(result.rows);
       })
       .catch((err) => {
        console.log("Error completing SELECT feedback query", err);
        res.sendStatus(500);
      });
});

//to POST all new feedback
router.post("/", (req, res) => {
    const newFeedback = req.body;
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4)`;
    const queryFeedback = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
    ];
    pool
      .query(queryText, queryFeedback)
      .then(() => {
        res.sendStatus(201);
      });
});

module.exports = routerFeedback;