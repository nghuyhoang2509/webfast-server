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
    sourcePageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SourcePage",
    },
    uid: {
      type: String,
      require: true,
    },
    key: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Page", schema);
