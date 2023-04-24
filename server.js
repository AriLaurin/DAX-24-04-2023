const express = require('express');
const Routes = require("./routes/routes"); //importing the routes so our app actually uses them

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json()); //takes any json data from requests, and parses it into a js code

// view engine
app.set('view engine', 'ejs');

app.listen(80)
console.log("LOCAL SERVER: CONNECTION ESTABLISHED");

// routes
app.use(Routes);