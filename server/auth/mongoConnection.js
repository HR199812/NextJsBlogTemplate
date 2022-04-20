var mongoose = require("mongoose");
mongoose.connect(process.env.Mongo_Atlas_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{})
.catch(err => console.log( err ));

var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
module.exports = conn;