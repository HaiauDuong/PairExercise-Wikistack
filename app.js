const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout.js")

const app = express();
const {db} = require('./models');
db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan("dev"));
app.use(express.static(__dirname + "/"));

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    // Do something
    res.send(layout("Hello World"));
})

const PORT = 1337;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
})
