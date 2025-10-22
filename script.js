const tableBody = document.querySelector(".tableBody");
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")
const inputRead = document.querySelector("#read");
const addBookBtn = document.querySelector("#addBook");

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

        }

    }

    //read function

    addChangeReadBtn(objectTr, book);
    //delete book button

    addDeleteBookBtn(objectTr, book);
}


//read function

function addChangeReadBtn(someTr, someBook) {
    const changeReadBtn = document.createElement("button");
    const readTd = someTr.querySelector(".read")
    changeReadBtn.textContent = "Change Button";
    changeReadBtn.addEventListener("click", () => {
        someBook.setRead();
        // objectTr.dataset.read = book.read;

        readTd.textContent = someBook.read;
    });

    const btnTd = document.createElement("td");
    btnTd.appendChild(changeReadBtn);
    someTr.appendChild(btnTd);
}


function addDeleteBookBtn(someTr, someBook) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        tableBody.removeChild(someTr);
        myLibrary.splice(myLibrary.indexOf(someBook), 1);
    })

    const btnTd = document.createElement("td");
    btnTd.appendChild(deleteBtn);
    someTr.appendChild(btnTd);
}


function addButtonToTr() {
    let tr = document.querySelectorAll("table tbody tr");

    Array.from(tr).forEach(function (trArray) {
        let button = document.createElement("button");
        let td = document.createElement("td");
        button.innerText = "buy";
        button.className = "btn_buy";
        td.append(button);
        trArray.append(td);
    });
}




const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "no");
const book2 = new Book("Harry Potter", "J.K. Rowling", "500", "yes");
addBookToLibrary(book1);
addBookToLibrary(book2);


addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(`${inputTitle.value}`, `${inputAuthor.value}`, `${inputPages.value}`, `${inputRead.value}`);
    addBookToLibrary(newBook);
})
