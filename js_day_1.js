function purchaseBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    stockAmount,
    purchaseAmount,
    creditDuration
) {
    const BOOK_PRICE = bookDetails.price;
    // Calculate discount amount
    const DISCOUNT = BOOK_PRICE * (discountPercentage / 100);
    // Calculate tax amount
    const TAX = (BOOK_PRICE - DISCOUNT) * (taxPercentage / 100);
    // Calculate price after discount and tax
    const PRICE_AFTER_TAX = BOOK_PRICE - DISCOUNT + TAX;

    // Check if the stock is available
    let remainingStock = stockAmount;

    // Store purchase details
    const purchaseDetails = [];

    // Calculate total amount to be paid
    const totalAmount = PRICE_AFTER_TAX * purchaseAmount;

    // Calculate monthly payment amount
    const monthlyPaymentAmount = totalAmount / creditDuration;

    // Get the current date
    const currentDate = new Date();
    // Get the next month
    const nextMonth = currentDate.getMonth() + 1;

    // Loop through the credit duration
    for (let month = 0; month < creditDuration; month++) {
        const dueDate = new Date(currentDate.getFullYear(), nextMonth + month, 1);
        // Format the due date
        const formattedDueDate = dueDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        // Check if the stock is available adn give purchase message
        let purchaseMessage = "";

        // Check if the stock is available
        if (remainingStock === 0) {
            purchaseMessage = "Sorry, the book is out of stock.";
        }

         // Check if the stock is less than the purchase amount
        if (remainingStock < purchaseAmount) {
            purchaseMessage = `You've purchased ${remainingStock} available books out of ${purchaseAmount} requested.`;
        }

        // Update the remaining stock
        remainingStock -= purchaseAmount;

        // Add purchase details to the array
        purchaseDetails.push({
            dueDate: formattedDueDate,
            amountOfPayment: monthlyPaymentAmount,
            purchaseMessage: purchaseMessage
        });
    }

    // Store purchase summary
    let purchaseSummary;
    purchaseSummary = {
        bookTitle: bookDetails.title,
        author: bookDetails.author,
        price: BOOK_PRICE,
        discountPercentage: discountPercentage,
        amountOfDiscount: DISCOUNT,
        taxPercentage: taxPercentage,
        amountOfTax: TAX,
        totalPrice: totalAmount,
        remainingStock: remainingStock,
        canPurchaseAgain: remainingStock > 0 ? "Yes" : "No",
        purchaseDetails: purchaseDetails,
    };

    return purchaseSummary;
}

// Example usage:
const bookDetails = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 20,
};
const discountPercentage = 10; // 10%
const taxPercentage = 5; // 5%
const stockAmount = 6; // total available stock
const purchaseAmount = 2; // number of books to purchase
const creditDuration = 6; // credit term length in months

const purchaseSummaryData = purchaseBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    stockAmount,
    purchaseAmount,
    creditDuration
);
console.log(purchaseSummaryData);

