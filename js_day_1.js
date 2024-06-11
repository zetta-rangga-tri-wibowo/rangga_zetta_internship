function purchaseBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    stockAmount,
    purchaseAmount,
    creditDuration
) {
    const BOOK_PRICE = bookDetails.price;
    const DISCOUNT = BOOK_PRICE * (discountPercentage / 100);
    const TAX = (BOOK_PRICE - DISCOUNT) * (taxPercentage / 100);
    const PRICE_AFTER_TAX = BOOK_PRICE - DISCOUNT + TAX;

    let remainingStock = stockAmount;

    const purchaseDetails = [];

    // Calculate total amount to be paid
    const totalAmount = PRICE_AFTER_TAX * purchaseAmount;

    // Calculate monthly payment amount
    const monthlyPaymentAmount = totalAmount / creditDuration;

    const currentDate = new Date();
    const nextMonth = currentDate.getMonth() + 1;

    // Loop through the credit duration
    for (let month = 0; month < creditDuration; month++) {
        const dueDate = new Date(currentDate.getFullYear(), nextMonth + month, 1);
        const formattedDueDate = dueDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        let purchaseMessage = "";

        if (remainingStock === 0) {
            purchaseMessage = "Sorry, the book is out of stock.";
        }

        if (remainingStock < purchaseAmount) {
            purchaseMessage = `You've purchased ${remainingStock} available books out of ${purchaseAmount} requested.`;
        }

        remainingStock -= purchaseAmount;

        purchaseDetails.push({
            dueDate: formattedDueDate,
            amountOfPayment: monthlyPaymentAmount,
            purchaseMessage: purchaseMessage
        });
    }

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
const stockAmount = 10; // total available stock
const purchaseAmount = 3; // number of books to purchase
const creditDuration = 6; // credit term length in months

const purchaseSummaryData = purchaseBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    stockAmount,
    purchaseAmount,
    creditDuration
);
console.log(purchaseSummaryData.purchaseDetails);

