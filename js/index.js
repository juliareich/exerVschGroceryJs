var shopper = {
    nameFirst: "Sue",
    nameLast: "Jones",
    customerNumber: 444,
    rewardsMember: true,
    groceryCart: ['apples', 'milk', 'bread', 'eggs', 'cheese'],
    addItem: function(newItem){
        this.groceryCart.push(newItem);
    }
};

shopper.addItem("bananas")

console.log( shopper )






