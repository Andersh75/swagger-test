const request = require("request");
const PouchDB = require("pouchdb");
const database = new PouchDB("http://plex:1111111111@127.0.0.1:5984/test1");
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

const getNames = (req, res) => {
  database.allDocs({ include_docs: true }).then(result => {
    let names = result.rows.map(row => {
      return { name: row.doc.name };
    });
    res.send(names);
  });
};

module.exports = {
  getPosts,
  getDepartments,
  getNames
};
