class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    getAvailability() {
        if (this.numCopies === 0) {
            console.log("Out of stock");
        } else if (this.numCopies <= 10) {
            console.log("Low stock");
        } else {
            console.log("In stock");
        }
    }
    sell(sellingNumCopies) {
        if (sellingNumCopies === NaN) {
            return this.numCopies - 1;
        } else {
            return (this.numCopies -= sellingNumCopies);
        }
    }
    restock(restockNumCopies) {
        if (restockNumCopies === NaN) {
            this.numCopies += 5;
        } else {
            this.numCopies += restockNumCopies;
        }
    }
}
const harryPotter = new Book("Harry Potter", "ROwling", 829818, 100);
console.log(harryPotter);
harryPotter.sell(100);
console.log(harryPotter.numCopies);
harryPotter.getAvailability();
harryPotter.restock(900);
console.log(harryPotter.numCopies);
