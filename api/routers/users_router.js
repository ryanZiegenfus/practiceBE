const express = require('express');
const router = express.Router();
const Posts = require('../models/post_model');

router.use(express.json())

router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res.status(201).json({posts})
    })
    .catch(err => {
        console.log(err.message)
    })
})

router.post('/', (req, res) => {
    Posts.add(req.body)
    .then(posts => {
        res.status(201).json({posts})
    })
    .catch(err => {
        console.log(err.message)
    })
})

module.exports = router
