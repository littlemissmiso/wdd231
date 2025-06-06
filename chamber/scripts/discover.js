
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');

});

const cards = document.querySelector("#cards");

const displayLocations = (locations) => {
    locations.forEach((location) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let descriptionTitle = document.createElement('h3');
        let address = document.createElement('p');
        let description = document.createElement('p');
        let learn = document.createElement('button');

        

        if (location.image) {
            image.setAttribute('src', location.image);
            image.setAttribute('alt', `Image of ${location.name}`);
            image.setAttribute('loading', 'lazy');
        }
        
        name.textContent = `${location.name}`;
        address.innerHTML = `${location.address.street}<br>
            ${location.address.city}, ${location.address.state}, ${location.address.zip}`;

        address.classList.add('location-address');
        description.classList.add('location-description');
        
        descriptionTitle.innerHTML = `What's it all about?`;
        description.textContent = `${location.description}`

        learn.textContent = 'Learn More';
        learn.classList.add('learn-button');

        learn.addEventListener('click', () => {
            window.location.href = location.website;
        });

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(descriptionTitle);
        card.appendChild(description);
        card.appendChild(learn);

        cards.appendChild(card);
    })
}

async function getData() {
    const response = await fetch('data/discover.json');
    const data = await response.json();
    displayLocations(data.locations);
}

const sidebar = document.querySelector('.sidebar');
const sec_per_day = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

let message = '';

if (!lastVisit) {
    message = "Welcome! We hope you find something fun to do and see in Logan!";
}
else {
    const daysDifference = Math.floor((now - Number(lastVisit)) / sec_per_day);
    
    if (daysDifference < 1) {
        message = "Welcome back!";
    }
    else if (daysDifference === 1) {
    message = "You last visited 1 day ago.";
    }
    else {
        message = `You last visited ${daysDifference} days ago.`;
    }
}

if (sidebar) {
    sidebar.textContent = message;
}

localStorage.setItem('lastVisit', now);

getData();

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;