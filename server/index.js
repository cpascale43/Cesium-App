const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;

const mockResponse = [
  {
    name: "New Jersey Sand",
    type: "Sand",
    density: 97,
    costPerPound: 4.58,
    pic:
      "https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon.jpg",
  },
  {
    name: "Quikrete Gravel",
    type: "Gravel",
    density: 105,
    costPerPound: 5.32,
    pic:
      "https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon.jpg",
  },
  {
    name: "Scotts Lawn Soil",
    type: "Dirt",
    density: 76,
    costPerPound: 7.98,
    pic:
      "https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon.jpg",
  },
];

const createApp = () => {
  // logging middleware
  app.use(morgan("dev"));

  // returns a dummy JSON object to show how fetching data would work
  app.get("/api", (req, res) => {
    res.send(mockResponse);
  });

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, "..", "public")));

  // sends index.html
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
};

createApp()
