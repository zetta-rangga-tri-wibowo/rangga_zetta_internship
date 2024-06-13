// 1st task
console.log('1st task');
// combineElements function will combine all elements in the array into a single string
function combineElements(elements) {
    // Join all elements in the array into a single string
    return elements.join(' ');
}
console.log(combineElements([1, 'data', '3', 'result'])); // Outputs: '1 data 3 result'
console.log(combineElements(['Bejo', 'has', 4, 'sport', 'car'])); // Outputs: 'Bejo has 4 sport car'
// 2nd task
console.log('2nd task');
// declare a type User that has 2 properties: name and age
function processArray(input) {
    if (input.length === 0) {
        return 'invalid input';
    }
    var firstElement = input[0];
    // check if the first element is a number
    if (typeof firstElement === 'number') {
        var sum = 0;
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var item = input_1[_i];
            // check if the item is a number
            if (typeof item !== 'number') {
                // if the item is not a number, return 'invalid input'
                return 'invalid input';
            }
            // sum all numbers in the array
            sum += item;
        }
        return sum;
        // check if the first element is a string
    }
    else if (typeof firstElement === 'string') {
        var result = '';
        // loop all elements in the array into a single string
        for (var _a = 0, input_2 = input; _a < input_2.length; _a++) {
            var item = input_2[_a];
            // check if the item is a string
            if (typeof item !== 'string') {
                // if the item is not a string, return 'invalid input'
                return 'invalid input';
            }
            // combine all elements in the array into a single string and concatenate with a space
            result += item + ' ';
        }
        // return the result and trim the trailing space
        return result.trim();
    }
    return 'invalid input';
}
console.log(processArray([1, 2, 3, 4]), 'Case 1'); // Outputs: 10
console.log(processArray(['the', 'dolphins', 'of', 'zettacamp']), 'Case 2'); // Outputs: 'the dolphins of zettacamp'
console.log(processArray(['Bejo', 'has', 4, 'sport', 'car']), 'Case 3'); // Outputs: 'invalid input'
// Task 3
console.log('3rd task');
function transformProduct(product) {
    var simplifiedProduct = { name: product.name };
    if (product.quantity <= product.inStock) {
        simplifiedProduct.buyAble = true;
        simplifiedProduct.totalPrice = product.price * product.quantity;
    }
    else {
        simplifiedProduct.buyAble = false;
    }
    return simplifiedProduct;
}
var product1 = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 5,
    inStock: 100,
    price: 5000
};
console.log(transformProduct(product1));
// Outputs: { name: 'Coca Cola', buyAble: true, totalPrice: 25000 }
var product2 = {
    name: 'Sari Roti',
    vendor: 'Toko Kue Sebelah',
    quantity: 2,
    inStock: 0,
    price: 10000
};
console.log(transformProduct(product2));
// Outputs: { name: 'Sari Roti', buyAble: false }
