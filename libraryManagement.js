class Library {
    constructor() {
        this.listOfBooks = new Set();
        this.dicOfNames = new Map();
    }

    displayBooks() {
        return this.listOfBooks;
    }
    addBook(book) {
        if (!book) {
            return "name of book is required";
        } else {
            this.listOfBooks.add(book);
        }
    }
    removeBook(book) {
        if (!book) {
            return "name of book is required";
        }
        else if (this.listOfBooks.has(book)) {
            return this.listOfBooks.delete(book);
        } else {
            return "Book is not in Library"
        }
    }
    borrowBook(book, name) {
        if (!book) {
            return "name of book is required";
        } else if (this.listOfBooks.has(book)) {
            this.removeBook(book)
            this.dicOfNames.set(book, name);
            return `congratulations,${book} book has been issue to you, ${name}! `
        } else if (this.dicOfNames.has(book)) {
            return `sorry book has been already issued to ${this.dicOfNames.get(book)}`;
        } else {
            return "sorry we doesn't have that book :(";
        }
    }
    returnBook(book) {
        if (!book) {
            return "name of book is required"
        } else if (this.listOfBooks.has(book)) {
            return "Library has already this book"
        }
        else if (!this.listOfBooks.has(book) && this.dicOfNames.has(book)) {
            let name = this.dicOfNames.get(book);
            this.addBook(book);
            this.dicOfNames.delete(book);
            return `thanks for returning this ${book} book, ${name}`;
        } else {
            this.addBook(book);
            return `No Book was borrowed by that name`;
        }

    }
}

const lib = new Library();
lib.addBook("Shreemad Bhagwad Geeta");
lib.addBook("The Story Of My Experiments With The Truth");
lib.addBook("A song of Ice and Fire");
lib.addBook("Attack on Titan");
lib.addBook("Harry Potter");
lib.addBook("Alchemist");
lib.addBook("Lord of the Rings");
lib.addBook("Alice's Adventures in Wonderland");
lib.addBook("Pinocchio");
lib.addBook("Twenty Thousand Leagues Under the Sea");
lib.displayBooks();

// lib.borrowBook("GOT", "Vishal");
// lib.borrowBook("GOT", "Vishal");
// lib.returnBook("GOT");

// lib.borrowBook("GOT", "Mahesh");
// lib.returnBook("Vinland Saga");
// lib.displayBooks();


// const donateButton = document.querySelector("#donBut")
const returnButton = document.querySelector("#retBut");
const returnBox = document.querySelector("#return");
const returnform = document.querySelector("#returnForm");

// const donateform = document.querySelector("#donate form");
const section = document.querySelector("section");
const retbook = document.querySelector("#returnForm input");

returnButton.addEventListener("click", (e) => {

    returnBox.classList.toggle("hidden");

    e.stopPropagation();
})

returnform.addEventListener("submit", (e) => {
    e.preventDefault();


    const data = lib.returnBook(retbook.value);
    const alertBox = document.querySelector("#offcanvasExample")
    const alertText = document.querySelector("#alertText");
    const closeButton = document.querySelector("#closeButton");
    alertText.innerText = data;
    alertBox.classList.add("show");


})


const appendBook = (book, imgSource) => {
    const card = document.createElement("div")
    const img = document.createElement("img")
    const h5 = document.createElement("h5")
    const p = document.createElement("p");
    const borrow = document.createElement("button");
    const borrowinp = document.createElement("input");
    borrowinp.style.borderRadius = "20px";
    borrowinp.style.padding = "0 1em";
    borrowinp.style.margin = "0.3em 0";
    borrowinp.placeholder = "your Name..."
    borrow.innerText = "Borrow";
    card.classList.add("card");
    borrow.classList.add("btn")
    borrow.classList.add("btn-warning")
    img.classList.add("card-img-top");
    img.src = imgSource;
    h5.classList.add("card-title");
    h5.innerText = book;

    card.append(img)
    card.append(h5)
    card.append(borrowinp);
    card.append(borrow)

    borrow.addEventListener("click", () => {
        const data = lib.borrowBook(book, borrowinp.value);
        const alertBox = document.querySelector("#offcanvasExample")
        const alertText = document.querySelector("#alertText");
        const closeButton = document.querySelector("#closeButton");
        alertText.innerText = data;
        alertBox.classList.add("show");
        closeButton.addEventListener("click", () => {
            alertBox.classList.remove("show");
        })


    })

    section.append(card);

}



for (let book of lib.listOfBooks) {
    const card = document.createElement("div")
    const img = document.createElement("img")
    const h5 = document.createElement("h5")
    const p = document.createElement("p");
    const borrow = document.createElement("button");
    const borrowinp = document.createElement("input");
    borrowinp.style.borderRadius = "20px";
    borrowinp.style.padding = "0 1em";
    borrowinp.style.margin = "0.3em 0";
    borrowinp.placeholder = "your Name..."
    borrow.innerText = "Borrow";
    card.classList.add("card");
    borrow.classList.add("btn")
    borrow.classList.add("btn-warning")
    img.classList.add("card-img-top");
    img.src = `images/${book}.jpg`
    h5.classList.add("card-title");
    h5.innerText = book;

    card.append(img)
    card.append(h5)
    card.append(borrowinp);
    card.append(borrow)

    borrow.addEventListener("click", () => {
        const data = lib.borrowBook(book, borrowinp.value);
        const alertBox = document.querySelector("#offcanvasExample")
        const alertText = document.querySelector("#alertText");
        const closeButton = document.querySelector("#closeButton");
        alertText.innerText = data;
        alertBox.classList.add("show");
        closeButton.addEventListener("click", () => {
            alertBox.classList.remove("show");
        })


    })

    section.append(card);

}




