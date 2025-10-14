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



function addElementToTable() {

    myLibrary.forEach((item) => {

        const objectTr = document.createElement("tr");
        tableBody.appendChild(objectTr);

        for (let key in item) {

            const keyTh = document.createElement("th");
            objectTr.appendChild(keyTh);
            keyTh.textContent = item[key];

        }
    })
}

