const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified;
const weatherAPI = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.15846&lon=-117.343&exclude=minutely,hourly,alerts&units=imperial&appid=b1159721bd65dac769dcd4f88420a53a'
let numDrinks = localStorage.getItem(0) ? localStorage.getItem(0) : 0

fetch(weatherAPI)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const currentTemp = data.current.temp
        const currentDescription = data.current.weather[0].description
        const currentHumidity = data.current.humidity
        const currentIcon = data.current.weather[0].icon

        document.querySelector('.description').innerHTML = `${currentDescription}`
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`
        document.querySelector('.temperature').innerHTML = `${currentTemp} °F`
        document.querySelector('.humidity').innerHTML = `Humidity: ${currentHumidity}%`
        document.querySelector('.forecast').innerHTML = `
            <u><h3>3 Day Forecast (Day)</h3></u>
            Day 1: ${data.daily[0].temp.day}°F <br>
            Day 2: ${data.daily[1].temp.day}°F <br>
            Day 3: ${data.daily[2].temp.day}°F <br>
        `
    })

document.getElementById("clearFormBtn").addEventListener("click", clear);

function clear(event) {
    console.log("clear")
    localStorage.clear()
    location.reload()
}

document.querySelector('.freshInfo').innerHTML = `${numDrinks}`
document.querySelector('.copyright').innerHTML = `Copyright ${year} | Jake Edwards`
document.querySelector('.modified').innerHTML = `Last Modified: ${modifiedDate}`