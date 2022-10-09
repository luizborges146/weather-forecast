let weather={
    apiKey:"18f2b4783decaf3b750cf7554dde6fa5",
    fetchWeather:function(city){
        fetch(
            // "https://api.openweathermap.org/data/2.5/weather?q="
            // + city 
            // + "&units=metric&appid=" 
            // + this.apiKey
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data) {
        console.log(data);
        var name = data.city.name;// ask the support assistance tomorrow
        var nameCountry = data.city.country;
        var {icon,description} = data.list[0].weather[0];
        var {temp,humidity} = data.list[0].main;
        var {speed} = data.list[0].wind;
        console.log("City name: " + name
                    + " \nsymbol :" + icon 
                    + " \nWeather Desc : " + description
                    + " \nTemperature " + temp
                    + " \nHumidity: " + humidity 
                    + " \nWind speed: " + speed
                    );
        document.querySelector(".city").innerText = "Weather today in " + name + " / " + nameCountry;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
        // for(var i = 0; i < city.length; i++){
        //     city.innerText = "Weather today in " + name;
        // };
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
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