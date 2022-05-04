const mongoose = require("mongoose");

const schema = mongoose.Schema;
// ObjectId = Schema.ObjectId;

const articlesSchema = new schema(
  {
    authorId: {
      // type: ObjectId, // here you set the author ID
      type: mongoose.Schema.Types.ObjectId,
      // from the Author colection,
      // so you can reference it
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    catergory: {
      type: Stering,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Articles = mongoose.model("Articles", articlesSchema);
module.exports = Articles;
