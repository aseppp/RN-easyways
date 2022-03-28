const express = require("express");
const cors = require("cors");
const router = require("./src/routes/");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/", router);

app.get("/", (request, response) => {
  response.json("Hello from server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
