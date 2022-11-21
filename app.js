const express = require("express");
const path = require('path')


require("dotenv").config();

const connectDB = require("./db/connection");

const app = express();
const port = process.env.PORT || 3000;

require("./db/connection");
app.use(express.json());
connectDB();

const author = require("./routers/author");

const book = require("./routers/book");
const admin = require("./routers/admin");
const home = require("./routers/home");
const user = require("./routers/user");
const package = require("./routers/package");
// const service = require("./routers/service");
const stripeCart = require("./routers/stripeCart");
const stripeRouter = require("./routers/stripeRouter");
const bookReviewRoute = require("./routers/bookreview");
app.use(author);

app.use(book);
app.use(admin);
app.use(home);
app.use(user);
app.use(package);
// app.use(service);
app.use(author);

app.use(bookReviewRoute);
app.use(stripeRouter);
app.use(stripeCart);
app.use(express.static(path.join(__dirname,'uploadsImgs')))


app.listen(port, () => {
  console.log("Server is running " + port);
});
