function Inventory(item, price) {
    // add code here
    const inventory = {};
    
    inventory[item]={
      price: price,
      quantity: 1
    };
    
    inventory.prototype.addItem = function (item, price){
      if(this.hasOwnProperty(item)){
        this.quantity +=1;
        this.price = price;
      }else{
        this.item = item;
        this.price = price;
      }
    };
    inventory.prototype.deleteItem = function (item){
      if(this.hasOwnProperty(item)){
        this.quantity -= 1;
        return 'Deleted';
      }else if(this.quantity === 0){
        return 'Nothing to delete';
      }
    };
    inventory.prototype.checkItem = function (item){
        if(this.hasOwnProperty(item)){
            return this;
        }else{
            return 'Item is not in Inventory';
        }      
    };


    return inventory;
}
  
const myInventory = new Inventory('cucumber', 2);
  
// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'