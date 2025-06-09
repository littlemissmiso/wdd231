const cards = document.querySelector('#cards');

function randomizeBooks(array) {
    let random = [];
    let bookCopy = [...array];

    while (bookCopy.length > 0) {
        let randomIndex = Math.floor(Math.random() * bookCopy.length);
        let selected = bookCopy.splice(randomIndex, 1)[0];
        random.push(selected);
    }

    return random;
}

function displayBooks(books) {
    
    const randomBooks = randomizeBooks(books);

    for (let i=0; i < 3 && i < randomBooks.length; i++) {

        let book = randomBooks[i];
    
        let card = document.createElement('section');
        let bookImage = document.createElement('img');
        let bookName = document.createElement('h2');
        let author = document.createElement('p');
        let genre = document.createElement('p');
        let review = document.createElement('p');
        
        bookImage.setAttribute('src', book.image);
        bookImage.setAttribute('alt', `Image of ${book.name}`);
        bookImage.setAttribute('loading', 'lazy');   
        
        bookName.textContent = `${book.name}`;

        author.innerHTML = `<strong>Author: </strong>${book.author}`;
            
        genre.innerHTML = `<strong>Genre: </strong>${book.genre}`;

        review.innerHTML = book.review;
            
        card.appendChild(bookImage);
        card.appendChild(bookName);
        card.appendChild(genre);
        card.appendChild(review);

        cards.appendChild(card);
        }
    }

async function getData() {
    const response = await fetch('data/books.json');
    const data = await response.json();
    displayBooks(data.books);
}

getData();








//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;