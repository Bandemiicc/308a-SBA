import { checkWeather } from './weatherAPI.mjs'; 

const searchBox = document.querySelector (".search input");
const searchBtn = document.querySelector (".search button");
// let city = "New York"
 
// checkWeather(city)


searchBtn.addEventListener("click", async ()=>{
// checkWeather (searchBox.value);
const city = searchBox.value
const data = await checkWeather(city)

if (data && data.name) {
    document.querySelector (".city").innerHTML = data.name;
    document.querySelector (".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector (".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector (".wind").innerHTML = data.wind.speed + " km/h"
}
else {
    console.error("No data avaiable");
    window.alert("City not found. Input a valid city");
}

})





// document. querySelector (".city").innerHTML = data.name;

// document. querySelector (".temp").innerHTML = Math.round(data.main.temp) + "°c";

// document. querySelector (".humidity").innerHTML = data.main.humidity + "%"

// document. querySelector (".wind").innerHTML = data.wind.speed + " km/h"