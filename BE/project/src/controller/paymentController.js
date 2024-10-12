const paymentService = require('../services/paymentService');

const processPayment = async (req, res) => {
    try {
        const paymentResult = await paymentService.processPayment(req.body);
        res.status(200).json({ paymentResult });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { processPayment };
