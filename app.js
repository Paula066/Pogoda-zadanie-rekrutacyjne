const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {};
        weather.getWeather(this.getWeatherData);
    }

    getWeatherData = (data) => {
        this.weatherData = data;
        console.log(data);
        this.render();
    }

    render = () => {
        console.log(this.weatherData)
        this.app = document.querySelector('.whether__box-right');
        this.app.innerHTML = `
            <div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `<div class="whether__hour">${hourData.hour}</div>`
        }).join('')}</div>
        `
    }


}

new App(); 