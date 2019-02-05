var swaggerJSDoc = require("swagger-jsdoc");
var express = require("express");
var app = express();
const port = 3000;

var api = require("./routes/index");

app.use(express.static("public"));

app.use("/", api);

app.get("/", (req, res) => res.send("Hello World!"));

// swagger definition
var swaggerDefinition = {
  info: {
    title: "Node Swagger API",
    version: "1.0.0",
    description: "Demonstrating how to describe a RESTful API with Swagger"
  },
  host: "localhost:3000",
  basePath: "/"
};
// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ["./**/routes/*.js", "routes.js"] // pass all in array
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get("/swagger.json", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
