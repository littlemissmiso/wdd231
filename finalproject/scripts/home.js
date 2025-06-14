

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
        let reviewContainer = document.createElement('div');
        let review = document.createElement('p');
        
        bookImage.setAttribute('src', book.image);
        bookImage.setAttribute('alt', `Image of ${book.name}`);
        bookImage.setAttribute('loading', 'lazy');   
        
        reviewContainer.classList.add('review');
        bookName.textContent = `${book.name}`;

        author.innerHTML = `<strong>Author: </strong>${book.author}`;
            
        genre.innerHTML = `<strong>Genre: </strong>${book.genre}`;

        review.innerHTML = book.review;
            
        card.appendChild(bookImage);
        card.appendChild(bookName);
        card.appendChild(genre);
        reviewContainer.appendChild(review);
        card.appendChild(reviewContainer);

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

const message = document.querySelector('.message');
const sec_per_day = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

let welcomeMessage = '';

if (!lastVisit) {
    welcomeMessage = "Nice to meet you! I'm so excited to share the love of reading!";
}
else {
    const daysDifference = Math.floor((now - Number(lastVisit)) / sec_per_day);
    
    if (daysDifference < 1) {
        welcomeMessage = "It's good to see you again!";
    }
    else if (daysDifference === 1) {
    welcomeMessage = "It's good to see you again! You last visited 1 day ago.";
    }
    else {
        welcomeMessage = `It's good to see you again! You last visited ${daysDifference} days ago.`;
    }
}

if (message) {
    message.textContent = welcomeMessage;
}

localStorage.setItem('lastVisit', now);

const modal = document.getElementById('genre-info');
const title = document.getElementById('modal-title');
const description = document.getElementById('modal-description');
const bookList = document.getElementById('modal-book-list');
const closeButton = document.getElementById('close-modal');

const genreInfo = {
    romance: {
        title: "Romance",
        description: "Romance books explore love, relationships, and emotional connection. They often feature heartfelt journeys, personal growth, and happy endings that celebrate the power of love.",
        books: [
            { name: "The Stand-In", author: "Lily Chu" },
            { name: "To All the Boys I’ve Loved Before", author: "Jenny Han" },
            { name: "The Two Lives of Lydia Bird", author: "Josie Silver" }
        ]
    },
    coming: {
        title: "Coming-of-Age",
        description: "Coming-of-age books follow a young protagonist’s journey to maturity, capturing personal growth, self-discovery, and life’s challenges as they navigate the path from youth to adulthood.",
        books: [
            { name: "Everything All At Once", author: "Katrina Leno" },
            { name: "The Inheritance Games", author: "Jennifer Lynn Barnes"}
        ]
    },
    science: {
        title: "Science Fiction",
        description: "Science fiction explores futuristic technology, space, or alternate realities. It asks “what if,” blending imagination and science to challenge ideas about humanity, society, and the universe.",
        books: [
            { name: "Warcross", author: "Marie Lu" },
            { name: "Wildcard", author: "Marie Lu" },
            { name: "Aurora Rising", author: "Amie Kaufman | Jay Kristoff" },
            { name: "Aurora Burning", author: "Amie Kaufman | Jay Kristoff" },
            { name: "Aurora's End", author: "Amie Kaufman | Jay Kristoff" }
        ]
    },
    fantasy: {
        title: "Fantasy",
        description: "Fantasy books transport readers to magical worlds with mythical creatures, epic quests, and supernatural powers—where imagination reigns and heroes face destiny, dragons, and ancient prophecies.",
        books: [
            { name: "Renegades", author: "Marissa Meyer" }
        ]
    },
    historical: {
        title: "Historical Fiction",
        description: "Historical fiction brings the past to life through vivid stories set in real time periods, blending fact and fiction to explore people, cultures, and historical events.",
        books: [
            { name: "The Nature of Small Birds", author: "Susie Finkbeiner" },
            { name: "The Guernsey Literary and Potato Peel Pie Society", author: "Mary Ann Shaffer & Annie Barrows" },
            { name: "The Hiding Place", author: "Corrie ten Boom" }
        ]
    },
    casual: {
        title: "Casual Reads",
        description: "Casual reads are light, engaging, and perfect for relaxation. They offer quick, enjoyable escapes—ideal for busy readers who want comfort, charm, and stress-free storytelling.",
        books: [
            { name: "The Bookshop on the Corner", author: "Jenny Colgan" },
            { name: "A Man Called Ove", author: "Fredrik Backman" },
            { name: "The Five People You Meet in Heaven", author: "Mitch Albom"}
        ]
    },
    selfhelp: {
        title: "Self-Help",
        description: "Self-help books guide readers toward personal growth, offering practical advice, motivation, and insights on relationships, habits, mental health, and success—all aimed at improving everyday life.",
        books: [
            { name: "Atomic Habits", author: "James Clear" },
            { name: "The Magnolia Story", author: "Chip and Joanna Gaines" }
        ]
    },
    classic: {
        title: "Classics",
        description: "Classics are timeless literary works that shaped culture and thought. They explore universal themes, rich language, and complex characters that continue to resonate through generations.",
        books: [
            { name: "The Secret Garden", author: "Frances Hodgson Burnett" }
        ]
    }
};

document.querySelectorAll('.learn-button').forEach(button => {
    button.addEventListener("click", () => {
        const key = button.getAttribute('data-key');
        const info = genreInfo[key];

        title.textContent = info.title;
        description.textContent = info.description;
        bookList.innerHTML = info.books
            .map(book => `<li><strong>${book.name}</strong> by ${book.author}</li>`)
            .join('');

        modal.showModal();
    });
});

closeButton.addEventListener("click", () => {
    modal.close();
})


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');

}); 


//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;