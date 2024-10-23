const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register all users

router.get('/', async (req, res) => {
    try {
        const Users = await User.find();
        res.status(200).send(Users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Register a new user
router.post('/register', async (req, res) => {
    const { email, password, fullName, role } = req.body;

    try {
        const newUser = new User({ email, password, fullName, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a user
router.delete('/deleteUser/:mail', async (req, res) => {
    try {
        const result = await User.deleteOne({ email: req.params.mail });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login user
router.get('/login/:mail/:password', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.mail, password: req.params.password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// View user profile
router.get('/profile/:mail', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.mail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
