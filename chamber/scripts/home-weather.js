const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const todayHigh = document.querySelector('#today-high');
const tomorrowHigh = document.querySelector('#tomorrow-high');
const day3High = document.querySelector('#day3-high');

const myLat = "41.74";
const myLong = "-111.83";
const apiKey = "d7d95c6471f256e45ef6008c4e19415c";

const url = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=imperial`;

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
    console.log('');
    currentTemp.innerHTML = `${Math.round(data.list[0].main.temp)} °F`;   
    captionDesc.innerHTML = data.list[0].weather[0].description

    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description);

    const highs = getDailyHighs(data);
if (highs.length >= 3) {
    todayHigh.innerHTML = `${Math.round(highs[0].high)} °F`;
    tomorrowHigh.innerHTML = `${Math.round(highs[1].high)} °F`;
    day3High.innerHTML = `${Math.round(highs[2].high)} °F`;
}
}

//Had to get AI help for this section. I was SO lost. 

function getDailyHighs(data) {
    const forecastList = data.list;
    const dailyHighs = {};

    forecastList.forEach(item => {
        const date = item.dt_txt.split(" ")[0];
        const tempMax = item.main.temp_max;

        if (!dailyHighs[date] || tempMax > dailyHighs[date]) {
            dailyHighs[date] = tempMax;
        }
    });

    const sortedDates = Object.keys(dailyHighs).sort();

    return sortedDates.slice(0, 3).map(date => ({
        date,
        high: dailyHighs[date]
    }));
}



apiFetch();
    
    
