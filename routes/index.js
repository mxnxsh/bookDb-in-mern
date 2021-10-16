const express = require('express');
const router = express.Router();
const Books = require('../model/books');
const User = require('../model/user');

router.use('/user', require('./user.js'));
router.use('/admin', require('./admin.js'));

router.get('/getBooks', async (req, res) => {
    const result = await Books.find({});
    res.send(result).status(201)

})

router.get('/dash', async (req, res) => {
    const users = await User.count();
    const books = await Books.count();
    res.send({ 'books': books, 'users': users }).status(200);
})


module.exports = router;