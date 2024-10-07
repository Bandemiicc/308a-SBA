const apiKey = 'f255066122c5507dddb4d37aa61f3d3a';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
}

checkWeather();






// export async function fetchWeather(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${apiKey}&units=metric`;
    
//     try {
//         const response = await axios.get(url);
//         console.log("Weather data:", response.data);  // Log the data for debugging
//         return response.data;  // Return the data to use in other parts of your app
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         throw error;
//     }
// }














// const apiKey = '1c79d0e78a53ee421fefabb383b1708f';  // Your API key

// export const fetchWeather = (city) => {
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`1c79d0e78a53ee421fefabb383b1708f`}&units=metric`)    
//     axios.get(url).then(response =>{
//         console.log(response.data);
//     })

// }
























// export async function fetchWeather(city) {
//     // Construct the full API URL with the city and API key
//     const weatherURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(city)}`;
    
//     console.log(`Fetching weather data for city: ${city}`);
//     console.log(`Using URL: ${weatherURL}`);

//     try {
//         const response = await axios.get(weatherURL);  // Perform the Axios request
//         console.log('API response received:', response.data);  // Log the response data

//         // Return only the current weather data if available
//         if (response.data && response.data.current) {
//             return response.data.current;
//         } else {
//             throw new Error('Weather data not found!');
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         throw error;  // Throw the error to handle it in another module
//     }
// }
