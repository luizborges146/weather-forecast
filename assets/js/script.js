var apiKey="18f2b4783decaf3b750cf7554dde6fa5"; //Api key to be used in the current weather and forecast weather


var cityContainer = document.querySelector("#cityContainer");


var localStg = [];
//console.log(localStg);
displayCity();

var weather={
    /* ##################### Current Weather ###################################*/
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" 
            + apiKey
        )
        // .then((response) => response.json())
        // .then((data) => this.displayWeather(data));

        .then( (response) => {
            if (response.ok) {
                // console.log(city + " Checking if this is the right one 111111111111111111111111");
                //localStorage.setItem("city" ,JASON.stringfy(city));
                localStg[localStg.length] = city;
                localStorage.setItem("cities", JSON.stringify(localStg));
                //console.log(localStg);
              response.json().then((data) =>{
                //console.log(data);
                this.displayWeather(data);
              });
            } else {
              alert('Error: ' + response.statusText);
              return;
            }
          })
    },
    displayWeather:function(weatherDt) {
        ///////////////////////////////////////////////////////////////console.log(weatherDt);
        var {name} = weatherDt;// ask the support assistance tomorrow
        var {country} = weatherDt.sys;
        var {icon,description} = weatherDt.weather[0];
        var {temp,humidity} = weatherDt.main;
        var {speed} = weatherDt.wind;
        // var {dt_text} = data.list[0]dt_text;
        // console.log("City name: " + name
        //             + " \nsymbol :" + icon 
        //             + " \nWeather Desc : " + description
        //             + " \nTemperature " + temp
        //             + " \nHumidity: " + humidity 
        //             + " \nWind speed: " + speed
        //             // + " \nDate: " + dt_text
        //             );
        document.querySelector(".city").innerText = "Weather today in " + name + " / " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";

    },
    /* ##################### Weekly Weather ###################################*/
    fetchWeatherW:function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city 
            + "&units=metric&appid=" 
            + apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeatherW(data));

    },
    displayWeatherW:function(data) {
        //console.log(data);
        for (var i = 0; i < 5; i++){
            var {icon, description} = data.list[i*8].weather[0];
            var {temp, humidity} = data.list[i*8].main;
            var { speed } = data.list[i*8].wind;
            //console.log(name,icon,description,temp,humidity,speed + " Test if this is going to be displayed");

        document.querySelector("#icon"+(i) ).src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector("#description"+(i)).innerText = description;
        document.querySelector("#temp"+(i)).innerText = Math.round(temp) + "°C";
        document.querySelector("#humidity"+(i)).innerText = "Humidity: " + humidity + "%";
        document.querySelector("#wind"+(i)).innerText = "Wind Speed: " + speed + "Km/h";
        }
        displayCity();
    },

    /* ##################### End Weekly Weather ###################################*/
    search:function(){

        this.fetchWeather(document.querySelector(".search-bar").value);
        this.fetchWeatherW(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter") {
        weather.search();
    }
})



/*-------------------------WEEKLY weather info-----------------------------*/
function displayCity() { // save in the array the localStorage information
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        localStg = storedCities;
        //console.log(localStg);
        addCityDisplay()
    }    
}
function addCityDisplay() {
    cityContainer.innerHTML = "";
    for (var i = 0; i < localStg.length; i++){
        var stgCity = localStg[i];
        console.log(localStg);
        console.log(i);

        var div = document.createElement("div");
        div.textContent = stgCity;
        
        div.setAttribute("class","btn");
        console.log(div);

        cityContainer.appendChild(div);
    }
}
displayCity();

document.getElementsByClassName(".btn").addEventListener("click", weather.search());

// btn.addEventListener("click", function(event){
//     var element = event.target;
//     console.log(element);
// })
   
// document.querySelectorAll(".btn").addEventListner("click", weather.search());