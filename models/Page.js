import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    describe: {
      type: String,
      require: false,
    },
    author: {
      type: String,
      require: true,
    },
    sourcePageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SourcePage",
    },
    uid: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Page", schema);
