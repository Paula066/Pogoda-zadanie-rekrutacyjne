const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {};
        weather.getWeather(this.getWeatherData);
    }

    getWeatherData = (data) => {
        this.weatherData = data;
        this.render();

    }
    render = () => {
        console.log(this.weatherData)
        this.app = document.querySelector('.whether__box-right');
        this.app.innerHTML = `<div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `<div class="whether__boxData">
                        <div class="whether__desc whether__desc--hour "></div>
                        <div class="whether__desc whether__desc--hour ">${hourData.hour}:00</div>
                        <div class="whether__desc whether__desc--ico ">
                            <img class="whether__img" src="test.png" alt="">
                        </div>
                        <div class="whether__desc whether__desc--temperature ">${hourData.temperature}
                        </div>
                        <div class="whether__desc whether__desc--rain ">${hourData.rainMm}mm</div>
                        <div class="whether__desc whether__desc--windDegree ">${hourData.windDegree}</div>
                        <div class="whether__desc whether__desc--windSpeed">${hourData.windSpeed}
                            <div class="whether__desc--windSpeedkmh">${hourData.windSpeedkmh} km/h</div>
                        </div>
                        <div class="whether__desc whether__hpa">${hourData.hpa} hPa</div>
                    </div>   
        
            `
        }).join('')} 
        `
    }
}
new App();


