const apiKey = '4cf90865cd2594030205487461052ce9'

const resultDiv = document.querySelector(".result");
const searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', async () => {
    try {
        resultDiv.style.visibility = 'visible'
        const searchInput = document.getElementById("searchInput").value
        const cityGeo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput},US&appid=${apiKey}&units=imperial`)
        const city = await cityGeo.json();
        const cityName = await city.name
        const temp = await city.main.temp


        const iconDiv = document.getElementById("icon")
        const iconWeatherImg = document.createElement("img")
        const iconWeather = await city.weather[0].main

        iconDiv.innerHTML = '';
        const cityNameDiv = document.getElementById('city_name')
        const cityDegDiv = document.getElementById('city_degree')
        cityNameDiv.textContent = cityName
        cityDegDiv.textContent = Math.trunc(temp)
        if (iconWeather === 'Clouds') {
            iconWeatherImg.src = './cloud.png'
        } else if (iconWeather === 'Clear') {
            iconWeatherImg.src = './sunny.png'
        }

        console.log(city)
        console.log(iconWeather)
        iconDiv.append(iconWeatherImg)


    } catch (err) {
        console.log(err)
    }
})