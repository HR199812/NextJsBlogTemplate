const mongoose = require("mongoose");

const schema = mongoose.Schema;

const articlesSchema = new schema(
  {
    AuthorId: {
      type: mongoose.Schema.Types.ObjectId, // here you set the author ID
      // from the Author colection,
      // so you can reference it
      required: true,
    },
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    Body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Articles = mongoose.model("Articles", articlesSchema);
module.exports = Articles;
