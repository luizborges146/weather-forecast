# Description

This is a weather dashboard to show the user the current weather for a specific location. It also display the weather for the next 5 days forecast, easy display and also user friendly layout. The applied dark colors in the background and light colors on the information makes it simple to visualise the data.

The project use the API from [OpenWeathermap](https://api.openweathermap.org) to get the current weather information and also the forecast. Not only that, I create a saved cities, so the user can easily access the cities they already checked the weather with one click.




### Weather Dashboard: [Scheduler](https://luizborges146.github.io/Scheduler/)

## Installation

N/A

## Usage

* Functionalities:
 * Allow user to add a location to check the current weather.
 * Display current weather and 5 days forecast
 * User can select search or press enter once the location is added to the field
 * Saved cities, so the user can re-check in a click the weather that was already search:



 
#### Function below represents the fetch function where it uses the API to get the 5 days forecast, using variables to make it more dynamic, so the user can check it by city name;
 ```
fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city 
            + "&units=metric&appid=" 
            + apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeatherW(data));

    },
 ```

#### Function below represents is an if statement where JavaScript will check if the response was ok or 200 and if the information below has already being added to the localStorage, if not, save the information on the local storage.
 ```
.then( (response) => {
            city = city.trim(); // remove spaces from user input
            city = city.toLowerCase(); // save the input as lower case 
            console.log(localStg);
            if (response.ok) {
                if(localStg.includes(city) === false){// will check if the user has already added an iunput
                    localStg[localStg.length] = city;// it will save the information inside an array
                    console.log(localStg);// will display on cosoleLog that the information saved on the array
                    localStorage.setItem("cities", JSON.stringify(localStg));
                }
                //console.log(localStg);
                response.json().then((data) =>{
 ```



## External support documentation

As part of the process, I used some references to complete the task:

- [Font Awesome](https://fontawesome.com/)<br />
- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />
- [BootsStrap](https://getbootstrap.com/docs/4.5/)<br />
- [jQuery](https://jquery.com/)<br />
- [JqueryUi](https://jqueryui.com/)<br />
- [MomentJs](https://momentjs.com/docs/#/displaying/format/)<br />

## Social

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/luizborges146) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/https://www.linkedin.com/in/luiz-borges-2377b7142//)

N/A

## License

Please refer to the LICENSE in the repo.
