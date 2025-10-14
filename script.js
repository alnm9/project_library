const tableBody = document.querySelector(".tableBody");

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages");
const book2 = new Book("Harry Potter", "J.K. Rowling", "500 pages");

