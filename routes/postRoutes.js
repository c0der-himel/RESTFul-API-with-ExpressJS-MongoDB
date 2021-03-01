const express = require('express');
const {
    getAllPosts,
    getSinglePost,
    createPost,
    deletePost,
    updatePost,
} = require('../controllers/postControllers');

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
router.post('/', createPost);

module.exports = router;
