const userService = require('../services/userService');

const signUp = async (req, res) => {
    try {
        const user = await userService.signUp(req.body);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await userService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const logout = (req, res) => {
    // Handle logout logic
    res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { signUp, login, logout };
