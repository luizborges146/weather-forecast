var apiKey="18f2b4783decaf3b750cf7554dde6fa5";
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
        // for (var i = 0; i < 1; i++){
            var {icon, description} = data.list[0].weather[0];
            var {temp, humidity} = data.list[0].main;
            var { speed } = data.list[0].wind;
            console.log(name,icon,description,temp,humidity,speed + " Test if this is going to be displayed");

        // document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector("#icon0").src = "https://openweathermap.org/img/wn/" + icon +".png";
        //document.querySelector(".description0").innerText = description;
        document.querySelector(".temp0").innerText = temp + "°C";
        // document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        // document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
        // }
    },

    /* ##################### End Weekly Weather ###################################*/
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
        this.fetchweatherW(document.querySelector(".search-bar").value)
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
weather.fetchWeather("London");
weather.fetchWeatherW("London");


/*-------------------------------------- WEEKLY weather info-----------------------------------------*/

