const tableBody = document.querySelector(".tableBody");
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")
const inputRead = document.querySelector("#read");
const dialog = document.querySelector("dialog");
const dialogBtn = document.querySelector("#dialogBtn")
const form = document.querySelector("#form");

const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
}


Book.prototype.setRead = function () {
    if (this.read == "no") {
        this.read = "yes";
    } else if (this.read == "yes") {
        this.read = "no";
    }
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    const objectTr = document.createElement("tr");
    tableBody.appendChild(objectTr);
    objectTr.setAttribute("id", crypto.randomUUID());

    //strictly reffers to the object keys and its content
    for (let key in book) {

        if (key == "title" || key == "author" || key == "pages" || key == "read") {

            const keyTd = document.createElement("td");
            keyTd.setAttribute("class", key);
            keyTd.textContent = book[key];
            objectTr.appendChild(keyTd);

            if (key == "read") {
                keyTd.setAttribute("id", book.read);
            }
        }

    }

    addChangeReadBtn(objectTr, book);

    addDeleteBookBtn(objectTr, book);
}


//read function

function addChangeReadBtn(someTr, someBook) {
    const changeReadBtn = document.createElement("button");
    const readTd = someTr.querySelector(".read")
    changeReadBtn.textContent = "Change Status";
    changeReadBtn.classList = "changeBtn";
    changeReadBtn.addEventListener("click", () => {
        someBook.setRead();
        readTd.textContent = someBook.read;
        readTd.setAttribute("id", someBook.read);
    });

    const btnTd = document.createElement("td");
    btnTd.appendChild(changeReadBtn);
    someTr.appendChild(btnTd);
}

//delete function

function addDeleteBookBtn(someTr, someBook) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList = "deleteBtn";
    deleteBtn.addEventListener("click", () => {
        tableBody.removeChild(someTr);
        myLibrary.splice(myLibrary.indexOf(someBook), 1);
    })

    const btnTd = document.createElement("td");
    btnTd.appendChild(deleteBtn);
    someTr.appendChild(btnTd);
}


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "no");
const book2 = new Book("Harry Potter", "J.K. Rowling", "500", "yes");
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(new Book("Harry Potter", "J.K. Rowling", "500", "yes"));
addBookToLibrary(new Book("Harry Potter", "J.K. Rowling", "500", "yes"));
addBookToLibrary(new Book("Harry Potter", "J.K. Rowling", "500", "yes"));
addBookToLibrary(new Book("Harry Potter", "J.K. Rowling", "500", "yes"));
addBookToLibrary(new Book("Harry Potter", "J.K. Rowling", "500", "yes"));


//dialog open

dialogBtn.addEventListener("click", () => {
    dialog.showModal();
});



form.addEventListener("submit", (event) => {

    event.preventDefault();

    const newBook = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${inputRead.value}`);
    addBookToLibrary(newBook);
    dialog.close();
    clearForm();
})


function clearForm() {
    inputAuthor.value = "";
    inputPages.value = "";
    inputTitle.value = "";
}


const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    clearForm();
})