


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