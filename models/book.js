const mongoose = require("mongoose");

const time = {
  timestamps: {
    currentTime: () => new Date().setHours(new Date().getHours() + 2),
  },
};

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    twAccount: {
      type: String,
      required: true,
    },
    bookDesc: {
      type: String,
    },
    pagesNum: {
      type: Number,
      required: true,
    },
    bookreview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BookReview",
    },
    rate: {
      type: Number,
    },
  },

  time
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
