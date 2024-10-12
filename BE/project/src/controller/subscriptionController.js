const subscriptionService = require('../services/subscriptionService');

const getSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionService.getSubscription(req.user.id);
        res.status(200).json({ subscription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateSubscription = async (req, res) => {
    try {
        const updatedSubscription = await subscriptionService.updateSubscription(req.user.id, req.body);
        res.status(200).json({ updatedSubscription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getSubscription, updateSubscription };
