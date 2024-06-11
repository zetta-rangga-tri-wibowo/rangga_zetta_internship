async function purchaseBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    stockAmount,
    purchaseAmount,
    creditDuration,
    additionalPricePerTerm,
) {
    return new Promise((resolve, reject) => {
        try {
            const BOOK_PRICE = bookDetails.price;
            const DISCOUNT = BOOK_PRICE * (discountPercentage / 100);
            const TAX = (BOOK_PRICE - DISCOUNT) * (taxPercentage / 100);
            const PRICE_AFTER_TAX = BOOK_PRICE - DISCOUNT + TAX;

            let remainingStock = stockAmount;
            const purchaseDetails = [];

            const totalAmount = PRICE_AFTER_TAX * purchaseAmount;
            const monthlyPaymentAmount = totalAmount / creditDuration;
            const currentDate = new Date();
            const nextMonth = currentDate.getMonth() + 1;

            for (let month = 0; month < creditDuration; month++) {
                const dueDate = new Date(currentDate.getFullYear(), nextMonth + month, 1);
                const formattedDueDate = dueDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                let additionalPrice = 0;

                // Check if additional price should be added for this term
                if (additionalPricePerTerm && (month + 1) % additionalPricePerTerm === 0) {
                    additionalPrice = 10; // Example additional price
                }

                const totalPaymentForTerm = monthlyPaymentAmount + additionalPrice;


                let purchaseMessage = "";

                if (remainingStock <= 0) {
                    purchaseMessage = "Sorry, the book is out of stock.";
                    purchaseDetails.push({
                        dueDate: formattedDueDate,
                        amountOfPayment: totalPaymentForTerm,
                        purchaseMessage: purchaseMessage
                    });
                    break;
                }

                if (remainingStock < purchaseAmount && remainingStock > 0) {
                    purchaseMessage = `You've purchased ${remainingStock} available books out of ${purchaseAmount} requested.`;
                }

                remainingStock -= purchaseAmount;

                purchaseDetails.push({
                    dueDate: formattedDueDate,
                    amountOfPayment: totalPaymentForTerm,
                    purchaseMessage: purchaseMessage
                });
            }

            const purchaseSummary = {
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

            resolve(purchaseSummary);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = purchaseBook;
