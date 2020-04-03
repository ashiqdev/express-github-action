const express = require("express");
const faker = require("faker");

const app = express();

app.get("/", (req, res) => {
  const fakeObj = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    card: faker.helpers.createCard()
  };

  res.status(200).json(fakeObj);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));

module.exports = app;
