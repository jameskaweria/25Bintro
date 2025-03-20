// Smart Grocery Checkout System

// Function to calculate total cost with discounts
function calculateTotal(cart) {
    let total = 0;
    let itemCounts = {}; // To track the quantity of each item

    // Calculate the total cost and count items
    for (let item of cart) {
        total += item.price * item.quantity;

        // Track the quantity of each item
        if (itemCounts[item.name]) {
            itemCounts[item.name] += item.quantity;
        } else {
            itemCounts[item.name] = item.quantity;
        }
    }

    // Apply discounts based on total purchase amount
    let discount = 0;
    if (total >= 50 && total <= 100) {
        discount = total * 0.05; // 5% discount
    } else if (total > 100) {
        discount = total * 0.10; // 10% discount
    }

    // Apply extra discount for buying more than 3 of the same item
    for (let itemName in itemCounts) {
        if (itemCounts[itemName] > 3) {
            let extraItems = itemCounts[itemName] - 3;
            discount += extraItems * 2; // $2 discount per extra item
        }
    }

    // Calculate final total
    let finalTotal = total - discount;

    return { total, discount, finalTotal };
}

// Example usage
const cart = [
    { name: "Apple", price: 1.5, quantity: 4 }, // 4 apples
    { name: "Bread", price: 2.0, quantity: 2 }, // 2 breads
    { name: "Milk", price: 3.0, quantity: 5 },  // 5 milk
];

const result = calculateTotal(cart);

console.log(`Total: $${result.total.toFixed(2)}`);
console.log(`Discount: $${result.discount.toFixed(2)}`);
console.log(`Final Total: $${result.finalTotal.toFixed(2)}`);
