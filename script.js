const tableBody = document.querySelector(".tableBody");
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")
const addBookBtn = document.querySelector("#addBook");

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

addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`);
    addBookToLibrary(newBook);
    addElementToTable();
})


//make function that loops through the array and displays each book on the page
//the books would be displayed in a table or a "card"
//a button for a form that adds books
//a button that deletes books