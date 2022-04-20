const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to Atlas is successful");
  })
  .catch((error) => {
    console.log(error);
  });

const userRouter = require("./routes/userRoute");
const articleRouter = require("./routes/articleRoute");

app.use("/User", userRouter);
app.use("/Article", articleRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
