let myLibrary = [];
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const idk = new Book('my book', 'michael', 100, true);
const third = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const fourth = new Book('my book', 'michael', 100, true);
const fifth = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const sixth = new Book('my book', 'michael', 100, true);

const container = document.querySelector('#container');
const table = document.createElement('table');
container.appendChild(table);

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${readStatus}`
    }

}

function addBookToLibrary(...book) {
    myLibrary.push(...book);

}

function displayBook() {
    myLibrary.forEach(Book => console.log(Book));

}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        row.appendChild(th);
        th.appendChild(text);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

addBookToLibrary(hobbit, idk, third, fourth, fifth, sixth);
displayBook();

let data = Object.keys(myLibrary[0]);
generateTableHead(table, data);
generateTable(table, myLibrary);