let weather={
    apiKey:"18f2b4783decaf3b750cf7554dde6fa5",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data) {
        var {name} = data;
        var {icon,description} = data.weather[0];
        var {tem,humidity} = data.main;
        var {speed} = data.wind;
    }
}