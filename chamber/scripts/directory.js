

const cards = document.querySelector('#cards');

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let company = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');

        company.textContent = `${member.name}`;
        
        if (member.image) {
            image.setAttribute('src', member.image);
            image.setAttribute('alt', `Image of ${member.name}`);
            image.setAttribute('loading', 'lazy');   
        }

        address.innerHTML = `${member.address.street}<br> 
            ${member.address.city}, ${member.address.state}, ${member.address.zip}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membership.textContent = `Membership Level: ${member.membership}`;
        
        card.appendChild(company);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    })
}



async function getData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

getData();

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
    cards.classList.add('grid-view');
    cards.classList.remove('list-view');
});

listButton.addEventListener('click', () => {
    cards.classList.add('list-view');
    cards.classList.remove('grid-view');
});



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