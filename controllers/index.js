const request = require("request");
const getPosts = (req, res) => {
  request("http://localhost:3000/posts", function(error, response, body) {
    res.send(body);
  });
};

const getDepartments = (req, res) => {
  request("https://www.kth.se/api/kopps/v2/departments.sv.json", function(
    error,
    response,
    body
  ) {
    res.send(body);
  });
};

module.exports = {
  getPosts,
  getDepartments
};
