var apiKey="18f2b4783decaf3b750cf7554dde6fa5";

var input = document.getElementById("input");
console.log(input);

var saved =[];

var weather={
    /* ##################### Current Weather ###################################*/
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" 
            + apiKey
            // "https://api.openweathermap.org/data/2.5/forecast?q="
            // + city
            // + "&units=metric&appid="
            // + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data) {
        console.log(data);
        var {name} = data;// ask the support assistance tomorrow
        var {country} = data.sys;
        var {icon,description} = data.weather[0];
        var {temp,humidity} = data.main;
        var {speed} = data.wind;
        // var {dt_text} = data.list[0]dt_text;
        console.log("City name: " + name
                    + " \nsymbol :" + icon 
                    + " \nWeather Desc : " + description
                    + " \nTemperature " + temp
                    + " \nHumidity: " + humidity 
                    + " \nWind speed: " + speed
                    // + " \nDate: " + dt_text
                    );
        document.querySelector(".city").innerText = "Weather today in " + name + " / " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
        // for(var i = 0; i < city.length; i++){
        //     city.innerText = "Weather today in " + name;
        // };
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
        console.log(data);
        var name = data.city.name;
        for (var i = 0; i < 5; i++){
            var {icon, description} = data.list[i*8].weather[0];
            var {temp, humidity} = data.list[i*8].main;
            var { speed } = data.list[i*8].wind;
            console.log(name,icon,description,temp,humidity,speed + " Test if this is going to be displayed");

        // document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector("#icon"+(i) ).src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector("#description"+(i)).innerText = description;
        document.querySelector("#temp"+(i)).innerText = Math.round(temp) + "°C";
        document.querySelector("#humidity"+(i)).innerText = "Humidity: " + humidity + "%";
        document.querySelector("#wind"+(i)).innerText = "Wind Speed: " + speed + "Km/h";
        }
    },

    /* ##################### End Weekly Weather ###################################*/
    search:function(){

        console.log("testing to see when this is going to be displaied");
        console.log(search1);
        this.fetchWeather(document.querySelector(".search-bar").value);
        //this.fetchweatherW(document.querySelector(".search-bar").value);
  

    }
    
    
};
var search1 = document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter") {
        weather.search();
    }
})
weather.fetchWeather("London");
weather.fetchWeatherW("London");


/*-------------------------WEEKLY weather info-----------------------------*/

localStorage.setItem("input", input.value);