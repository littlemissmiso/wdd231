const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const myLat = "49.75";
const myLong = "6.64";

const url = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=d7d95c6471f256e45ef6008c4e19415c&units=imperial`;

async function apiFetch() {
    try{
       const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        } 
    }   catch (error) {
        console.log(error);
    }
    }

function displayResults(data) {
    console.log('hello');
    currentTemp.innerHTML = `${data.list[0].main.temp} °F`;   
    captionDesc.innerHTML = data.list[0].weather[0].description
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description);
    // currentTemp.innerHTML = data.main.temp;
}

apiFetch();
    
    
