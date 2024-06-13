function purchaseBook(
    {price, title, author, ...additionalDetails}, // destructing and spread the object of bookOfDetails
    discountPercentage,
    taxPercentage,
    stockAmount,
    bookPurchases,
    creditDuration
) {
    const BOOK_PRICE = price;
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
    const totalAmount = PRICE_AFTER_TAX * bookPurchases;

    // Calculate monthly payment amount
    const monthlyPaymentAmount = totalAmount / creditDuration;

    // Get the current date
    const currentDate = new Date();
    // Get the next month
    const nextMonth = currentDate.getMonth() + 1;

    // Check bookPurchase amount
    if (bookPurchases <= 0)  {
        return {
            error: "Please provide a valid book purchase amount."
        }
    }

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

        //
        if (remainingStock <= 0) {
            purchaseMessage = "Sorry, the book is out of stock.";
            purchaseDetails.push({
                dueDate: formattedDueDate,
                amountOfPayment: 0,
                purchaseMessage: purchaseMessage
            });
            break;
        }
        // Check if the remaining stock is less than the book purchases
        if (remainingStock < bookPurchases && remainingStock > 0) {
            purchaseMessage = `You've purchased ${remainingStock} available books out of ${bookPurchases} requested.`;
            bookPurchases = remainingStock; // Update the bookPurchases to the remaining stock
        }

        purchaseMessage = `You've purchased ${remainingStock} available books out of ${bookPurchases} requested.`;
        purchaseDetails.push({
            dueDate: formattedDueDate,
            amountOfPayment: monthlyPaymentAmount,
            purchaseMessage: purchaseMessage
        });

        // Update the remaining stock
        remainingStock -= bookPurchases;
    }

    // Store purchase summary
    let purchaseSummary
    purchaseSummary = {
        bookTitle: title,
        author: author,
        price: BOOK_PRICE,
        discountPercentage: discountPercentage,
        amountOfDiscount: DISCOUNT,
        taxPercentage: taxPercentage,
        amountOfTax: TAX,
        totalPrice: totalAmount,
        remainingStock: remainingStock,
        canPurchaseAgain: remainingStock > 0 ? "Yes" : "No",
        purchaseDetails: purchaseDetails,
        ...additionalDetails // spread additional details
    };

    return purchaseSummary;
}

// Example usage:
const bookDetails = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 20,
};
const discountPercentage = 0; // 10%
const taxPercentage = 0; // 5%
const stockAmount = 5; // total available stock
const bookPurchases = 5; // number of books to purchase
const creditDuration = 1; // credit term length in months

const purchaseSummaryData = purchaseBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    stockAmount,
    bookPurchases,
    creditDuration
);
console.log(purchaseSummaryData);


// naming variable
// more describe

// standart pattern camelCase dan Uppercase

// conditonal thinking

