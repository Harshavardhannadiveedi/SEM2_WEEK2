const express = require('express');
const { getSubscription, updateSubscription } = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getSubscription);
router.put('/update', authMiddleware, updateSubscription);

module.exports = router;
