// 1st task
console.log('1st task');
// declare a type StringOrNumber that can be either a string or a number
type StringOrNumber = string | number;

// combineElements function will combine all elements in the array into a single string
function combineElements(elements: StringOrNumber[]): string {
    // Join all elements in the array into a single string
    return elements.join(' ');
}

console.log(combineElements([1, 'data', '3', 'result'])); // Outputs: '1 data 3 result'
console.log(combineElements(['Bejo', 'has', 4, 'sport', 'car'])); // Outputs: 'Bejo has 4 sport car'


// 2nd task
console.log('2nd task');

// declare a type User that has 2 properties: name and age
function processArray(input: (number | string)[]): string | number {
    if (input.length === 0) {
        return 'invalid input';
    }

    const firstElement = input[0];

    // check if the first element is a number
    if (typeof firstElement === 'number') {
        let sum = 0;
        for (const item of input) {
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
    } else if (typeof firstElement === 'string') {
        let result = '';
        // loop all elements in the array into a single string
        for (const item of input) {
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
console.log(processArray(['Bejo', 'has', 4, 'sport', 'car']), 'Case 3') // Outputs: 'invalid input'


// Task 3
console.log('3rd task');

type Product = {
    name: string;
    vendor: string;
    quantity: number;
    inStock: number;
    price: number;
};

type SimplifiedProduct = {
    name: string;
    buyAble?: boolean;
    totalPrice?: number;
};


function transformProduct(product: Product): SimplifiedProduct {
    // Create a simplified product object
    let simplifiedProduct: SimplifiedProduct = { name: product.name };

    // check if quantity is less than or equal to inStock then set buyAble to true and calculate the total price
    if (product.quantity <= product.inStock) {
        simplifiedProduct.buyAble = true;
        simplifiedProduct.totalPrice = product.price * product.quantity;
    } else {
        // if quantity is more than inStock then set buyAble to false
        simplifiedProduct.buyAble = false;
    }

    // return the simplified product object
    return simplifiedProduct;
}

let product1: Product = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 5,
    inStock: 100,
    price: 5000
};

console.log(transformProduct(product1));
// Outputs: { name: 'Coca Cola', buyAble: true, totalPrice: 25000 }

let product2: Product = {
    name: 'Sari Roti',
    vendor: 'Toko Kue Sebelah',
    quantity: 2,
    inStock: 0,
    price: 10000
};

console.log(transformProduct(product2));
// Outputs: { name: 'Sari Roti', buyAble: false }