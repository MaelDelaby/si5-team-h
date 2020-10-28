const express = require('express');
const axios = require('axios');

const bookingRouter = express.Router();
const registry = require("./registry");

/**
 * POST /bookings
 * Payload: {
 *     "id": string,
 *     "idsTravel": [string]
 * }
 */
bookingRouter.route('/').post(async (req, res) => {
    axios.post(registry.services.booking.url + 'bookings', req.body)
        .then(response => res.status(response.status).send())
        .catch(err => console.log("Error sending request to booking service", err));
});

/**
 * GET /bookings
 */
bookingRouter.route('/').get(async (req, res) => {
    axios.get(registry.services.booking.url + "bookings")
        .then(response => res.status(response.status).send(response.data))
        .catch(err => console.log("Error sending request to booking service", err));
});

module.exports = bookingRouter;
