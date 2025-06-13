const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');

});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

const favoriteGenres = myInfo.getAll('genre');

console.log(myInfo.get('title'));
console.log(myInfo.get('first-name'));
console.log(myInfo.get('last-name'));
console.log(myInfo.get('email-address'));
console.log(myInfo.get('timestamp'));

document.querySelector('#results').innerHTML = ` 
    <p>Applicant Name: <strong>${myInfo.get('first-name')} ${myInfo.get('last-name')}</strong></p>
    <p>Email: <strong>${myInfo.get('email-address')}</strong></p>
    <p>Date & Time Sent: <strong>${myInfo.get('timestamp')} UTC</strong></p>
    <p>Favorite Genres: <strong>${favoriteGenres.join(', ') || 'None selected'}</strong></p>
`;

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;