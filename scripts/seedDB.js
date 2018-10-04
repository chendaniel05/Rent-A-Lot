const mongoose = require("mongoose");
const Spot = require("../models/Spot.js");

// This file empties the Spots collection and inserts the spots below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/parkingspotslisting"
);

const spotSeed = [
  {
    address: "32 ACACIA RD",
    postalcode:  "",
    price: "$10",
    type: "Widened Driveway",
    description: "Single",
    contact: "robo3t@mail.com"
  },
  {
    address: "60 BABY POINT RD",
    postalcode:  "",
    price: "$13",
    type: "Front yard",
    description: "Single",
    contact: "mongod@mail.com"
  },
  {
    address: "60 BABY POINT RD",
    postalcode:  "",
    price: "$7",
    type: "Front yard",
    description: "Single",
    contact: "javascript@mail.com"
  },
  {
    address: "12 DACRE CRES",
    postalcode:  "",
    price: "$10",
    type: "Widened Driveway",
    description: "Single",
    contact: "html@mail.com"
  },
  {
    address: "150 EARLSCOURT AVE",
    postalcode:  "",
    price: "$15",
    type: "Front yard",
    description: "Single",
    contact: "css@mail.com"
  },
  {
    address: "98 FURNIVAL RD",
    postalcode:  "",
    price: "$5",
    type: "Front yard",
    description: "Single",
    contact: "mern@mail.com"
  },
  {
    address: "166 GAINSBOROUGH RD",
    postalcode:  "",
    price: "$9",
    type: "Widened Driveway",
    description: "Single",
    contact: "crud@mail.com"
  },
  {
    address: "23 HADDON ST",
    postalcode:  "",
    price: "$11",
    type: "Front yard",
    description: "Single",
    contact: "java@mail.com"
  }
];

Spot
  .remove({})
  .then(() => Spot.collection.insertMany(spotSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
