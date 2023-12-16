const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.put('/edit', async (req, res) => {
    try {
        const post = await Post.editPost(req.body);
        res.send({ ...post });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

router.delete('/delete', async (req, res) => {
    try {
        await Post.deletePost(req.body.postId);
        res.send({ success: "Post Deleted" })
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.getPosts();
        res.send(posts);
    } catch (err) {
        res.status(401).send({ message: error.message });
    }
});

module.exports = router;