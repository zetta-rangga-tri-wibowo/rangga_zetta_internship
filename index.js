const express = require('express');
const purchaseBook = require('./js_day_2'); // Import the purchaseBook module
const app = express();
const port = 3000;

app.use(express.json());

app.post('/calculate-credit-terms', async (req, res) => {
    try {
        const { bookDetails, discountPercentage, taxPercentage, stockAmount, purchaseAmount, creditDuration, additionalPricePerTerm } = req.body;
        const purchaseSummary = await purchaseBook(bookDetails, discountPercentage, taxPercentage, stockAmount, purchaseAmount, creditDuration, additionalPricePerTerm);
        res.json(purchaseSummary);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
