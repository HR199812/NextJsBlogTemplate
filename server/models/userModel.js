const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    UserName: {
      type: String,
      required: true,
      trim: true,
    },
    UserPassword: {
      type: String,
      required: true,
      trim: true,
    },
    UserMail: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
