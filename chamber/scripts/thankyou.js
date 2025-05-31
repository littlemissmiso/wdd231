const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamButton.classList.toggle('active');

});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('first-name'));
console.log(myInfo.get('last-name'));
console.log(myInfo.get('organizational-title'));
console.log(myInfo.get('phone-number'));
console.log(myInfo.get('business-name'));
console.log(myInfo.get('timestamp'));

document.querySelector('#results').innerHTML = ` 
    <p>Applicant Name: <strong>${myInfo.get('first-name')} ${myInfo.get('last-name')}</strong></p>
    <p>Position Title: <strong>${myInfo.get('organizational-title')}</strong></p>
    <p>Phone Number: <strong>${myInfo.get('phone-number')}</strong></p>
    <p>Business Name: <strong>${myInfo.get('business-name')}</strong></p>
    <p>Date & Time Sent: <strong>${myInfo.get('timestamp')} UTC</strong></p>
`;

//Footer Date Function
const date = new Date();
let year = date.getFullYear();

document.getElementById('year').textContent = year;


let lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;