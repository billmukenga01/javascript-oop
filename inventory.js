function Inventory(item, price) {
    // add code here
    const inventory = Object.create(Inventory.prototype);
    
    inventory[item] = {
        price: price,
        quantity: 1
    }

    return inventory;

}

Inventory.prototype.addItem = function (newItem, price){
    if(this.hasOwnProperty(newItem)){
        this[newItem].quantity += 1;
        this[newItem].price = price;
    }else{
        this[newItem] = {
            price: price,
            quantity: 1
        };
    }
}
Inventory.prototype.deleteItem = function (deleteItem){
    if(this[deleteItem].quantity === 0){
        return 'Nothing to delete';
    }
    if(this.hasOwnProperty(deleteItem)){
        this[deleteItem].quantity -= 1;
        return 'Deleted';
    }
    
}
Inventory.prototype.checkItem = function (checkItem){
    if(this.hasOwnProperty(checkItem)){
        return this[checkItem];
    }else{
        return 'Item is not in inventory';
    }
}
const myInventory = new Inventory('cucumber', 2);

console.log(myInventory);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'