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
        var {name} = data.city.name;
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

        var city = document.querySelectorAll(".city")//.innerText = "Weather today in " + name;
        for(var i = 0; i < city.length; i++){
            city.innerText = "Weather today in " + name;
        };
    }
}