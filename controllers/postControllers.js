const Post = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
};

const getSinglePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
};

const createPost = async (req, res) => {
    const { title, description } = req.body;
    const post = new Post({
        title,
        description,
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (err) {
        res.json({ message: err });
    }
};

const deletePost = async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.id });
        res.json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, description } = req.body;
        const updatePost = await Post.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    title,
                    description,
                },
            }
        );
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost,
    deletePost,
    updatePost,
};
