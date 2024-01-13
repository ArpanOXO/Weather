const apiId = 'a86ab9f0c9d5f10968cf33888d23d67d';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?';
const weatherIcon = document.querySelector('.weather-condition-js');
async function checkWeather(city){
    const responce = await fetch(apiURL  + `q=${city}` + `&units=metric` + `&appid=${apiId}`);
    let data = await responce.json();
    let k = data.weather[0].main;
    console.log(data);
    console.log(data.weather[0].main);
    document.querySelector('.temperature-js').innerHTML = Math.round(data.main.temp) + `°C`; 
    document.querySelector('.humidity-js').innerHTML = data.main.humidity + `%`;
    document.querySelector('.windSpeed-js').innerHTML = data.wind.speed + `Km/Hr`;
    document.querySelector('.weatherCon').innerHTML = data.weather[0].main;
                
    if(k === 'Mist'){
        weatherIcon.src = "icons/mist.png";
    } else if( k === "Clear"){
        weatherIcon.src = "icons/sunny.png";
    } else if( k === "Clouds"){
        weatherIcon.src = "icons/clouds.png";
    } else if( k === "Rain"){
        weatherIcon.src = "icons/rain.png";
    } else if( k === "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
    } else if( k === "Haze"){
        weatherIcon.src = "icons/haze.png";
    } else if( k === "Fog"){
        weatherIcon.src = "icons/haze.png";
    } else if( k === "Smoke"){
        weatherIcon.src = "icons/haze.png";
    }
}
function setCityName(cityName){
    document.querySelector('.cityName').innerHTML = cityName;
}