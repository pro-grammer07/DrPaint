import Post from "../Models/PostModel.js";

export const createPost = async (req, res, next) => {
  try {
    const { image, project, description } = req.body;

    if (!description) {
      next("You must provide description");
      return;
    }

    const post = await Post.create({
      image,
      project,
      description,
    });

    res.status(200).json({
      success: true,
      message: "Post Created Successfully",
      data: post,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const post = await Post.find();
    console.log(post);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: post,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
