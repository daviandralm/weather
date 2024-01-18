const key = "dec601eef1fd9fc3c23456aad18b6434" //your api key inside the double quotes

function onScreen(data){
    document.querySelector(".city").innerHTML = "<br>" + data.name
    document.querySelector(".celsius").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".feelslike").innerHTML = "feelslike: " + Math.floor(data.main.feels_like) + "°C"
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

async function searchCity(input) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt-br&units=metric`).then(Response => Response.json())
    onScreen(data)
    console.log(data)
}

function button(){
    const input = document.querySelector(".search").value;
    searchCity(input);
}