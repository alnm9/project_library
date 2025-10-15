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
    const objectTr = document.createElement("tr");
    tableBody.appendChild(objectTr);

    for (let key in book) {

        const keyTd = document.createElement("td");
        objectTr.appendChild(keyTd);
        keyTd.textContent = book[key];
    }

    //delete book button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("type", "button");
    deleteBtn.addEventListener("click", () => {
        tableBody.removeChild(objectTr);
        myLibrary.splice(myLibrary.indexOf(book), 1);
    })
    objectTr.appendChild(deleteBtn);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages");
const book2 = new Book("Harry Potter", "J.K. Rowling", "500 pages");
addBookToLibrary(book1);
addBookToLibrary(book2);


addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`);
    addBookToLibrary(newBook);
})
