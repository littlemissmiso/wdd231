

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

    for (let i = 0; i < randomBooks.length; i++) {
        let book = randomBooks[i];

        let card = document.createElement('section');
        let bookImage = document.createElement('img');

        bookImage.setAttribute('src', book.image);
        bookImage.setAttribute('alt', `Image of ${book.name}`);
        bookImage.setAttribute('loading', 'lazy');


        bookImage.addEventListener('click', () => {
            document.getElementById('modal-title').textContent = book.name;
            document.getElementById('modal-author').innerHTML = `<strong>Author:</strong> ${book.author}`;
            document.getElementById('modal-genre').innerHTML = `<strong>Genre:</strong> ${book.genre}`;
            document.getElementById('book-description').innerHTML = `<strong>Synopsis</strong> ${book.description}`;
            document.getElementById('modal-long-review').innerHTML = book.longreview;
            document.getElementById('two-cents').innerHTML = `Little Miss Miso's Review <br>${book.review}`;
            document.getElementById('purchase').innerHTML = `<a href="${book.purchaselink}" class="purchase-link" target="_blank" rel="noopener noreferrer">Purchase Book<br>(Amazon)</a>`;
            
            document.getElementById('book-modal').showModal();
        });

        card.appendChild(bookImage);

        cards.appendChild(card);
    }
}

async function getData() {
    try {
        const response = await fetch('data/books.json');
        if (!response.ok) {
            throw new Error(`Unable to retrieve data. Status: ${response.status}`);
        }
        const data = await response.json();
        displayBooks(data.books);
    } catch (error) {
        console.error("Unable to fetch/parse book data", error);
        cards.innerHTML = "<p class='error'>Very sorry, something went wrong trying to load the books.</p>"
    }   
}

getData();

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('book-modal').close();
});


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');

}); 

const time = new Date();
const formattedTime = time.toISOString().slice(0, 19).replace("T", " ");
document.getElementById('timestamp').value = formattedTime;

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;