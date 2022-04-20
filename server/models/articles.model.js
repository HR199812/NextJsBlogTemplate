const mongoose = require("mongoose");

const schema = mongoose.Schema;
// ObjectId = Schema.ObjectId;

const articlesSchema = new schema(
  {
    AuthorId: {
      // type: ObjectId, // here you set the author ID
      type: mongoose.Schema.Types.ObjectId,
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
