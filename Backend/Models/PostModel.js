import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    image: String,
    project: {
      type: String,
      required: [true, "Project Title is required:"],
    },
    description: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
