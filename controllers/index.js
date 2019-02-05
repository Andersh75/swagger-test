const getUsers = (req, res) => {
  res.send({
    name: "Sune",
    email: "sune@test.se",
    age: 20,
    sex: "m"
  });
};

module.exports = {
  getUsers
};
