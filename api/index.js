const axios = require('axios');

module.exports = async (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: "Missing id parameter" });
    }

    try {
        const response = await axios.get(`https://catalog.roblox.com/v1/assets/${id}/bundles`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};