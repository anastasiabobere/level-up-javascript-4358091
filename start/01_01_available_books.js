class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    getAvaibility() {
        if ((this.numCopies = 0)) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        } else {
            return "In stock";
        }
    }
    sell(numCopies) {
        if ((numCopies = null)) {
            this.numCopies - 1;
        } else {
            this.numCopies - numCopies;
        }
    }
    restock(numCopies) {
        if ((numCopies = null)) {
            this.numCopies + 5;
        } else {
            this.numCopies + numCopies;
        }
    }
}
const harryPotter = new Book("Harry Potter", "ROwling", 829818, 20)
console.log(harryPotter)