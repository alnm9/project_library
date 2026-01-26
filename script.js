const tableBody = document.querySelector(".tableBody");
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")
const inputRead = document.querySelector("#read");
const dialog = document.querySelector("dialog");
const dialogBtn = document.querySelector("#dialogBtn")
const form = document.querySelector("#form");
const closeBtn = document.querySelector("#closeBtn");


const myLibrary = [];


class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    setRead() {
        if (this.status == "Not read") {
            this.status = "Read";
        } else if (this.status == "Read") {
            this.status = "Not read";
        }

    }
}



function addBookToLibrary(book) {
    myLibrary.push(book);
    const objectTr = document.createElement("tr");
    tableBody.appendChild(objectTr);
    //strictly reffers to the object keys and its content
    for (let key in book) {

        if (key == "title" || key == "author" || key == "pages" || key == "status") {

            const keyTd = document.createElement("td");
            keyTd.setAttribute("class", key);
            keyTd.textContent = book[key];
            objectTr.appendChild(keyTd);

            if (key == "status") {
                if (keyTd.textContent == "Read") {
                    keyTd.setAttribute("style", "background-color: rgba(122, 255, 95, 0.3)");
                } else {
                    keyTd.setAttribute("style", "background-color: rgba(255, 91, 91, 0.3)");
                }

            }
        }

    }

    addChangeStatusBtn(objectTr, book);

    addDeleteBookBtn(objectTr, book);
}



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


closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    clearForm();
})


//change status function

function addChangeStatusBtn(someTr, someBook) {
    const changeReadBtn = document.createElement("button");
    const readTd = someTr.querySelector(".status")
    changeReadBtn.textContent = "Change Status";
    changeReadBtn.classList = "changeBtn";
    changeReadBtn.addEventListener("click", () => {
        someBook.setRead();
        readTd.textContent = someBook.status;
        if (someBook.status == "Read") {
            readTd.setAttribute("style", "background-color: rgba(122, 255, 95, 0.3)");
        } else {
            readTd.setAttribute("style", "background-color: rgba(255, 91, 91, 0.3)");
        }
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



function clearForm() {
    inputAuthor.value = "";
    inputPages.value = "";
    inputTitle.value = "";
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", "310", "Not read"));
addBookToLibrary(new Book("Carrie", "Stephen King", "199", "Read"));
addBookToLibrary(new Book("The Shining", "Stephen King", "439", "Read"));
addBookToLibrary(new Book("Interview with the Vampire", "Anne Rice", "342", "Not read"));
addBookToLibrary(new Book("Midnight's Children", "Salman Rushdie", "446", "Not read"));
addBookToLibrary(new Book("Anna Karenina", "Leo Tolstoy", "864", "Not read"));
addBookToLibrary(new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "223", "Read"));
addBookToLibrary(new Book("Rebecca", "Daphne du Maurier", "446", "Not read"));
addBookToLibrary(new Book("The Tale of Peter Rabbit", "Beatrix Potter", "56", "Read"));