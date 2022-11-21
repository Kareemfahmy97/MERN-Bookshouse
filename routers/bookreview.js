const express = require("express");
const router = express.Router();
const {
   addBookReview,
   getBookReviewById,
   getAllBookRewiew,
   deleteBookReview,
   updateBookReview,
} = require("../controller/bookreview.controller");
// const auth = require('../middelware/auth')

router.post("/newbookreview", addBookReview); // add book review

router.get("/bookreview/getall", getAllBookRewiew); // get all books review

router.get("/bookreview/:id", getBookReviewById); // get by id

router.delete("/bookreview/remove/:id", deleteBookReview); // delete

router.put("/bookreview/updateBookReview/:id", updateBookReview); // update

module.exports = router;
