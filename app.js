const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {};
        weather.getWeather(this.getWeatherData);
    }

    getWeatherData = (data) => {
        this.weatherData = data;
        this.render();
        this.owlCarousel();
        this.displaysDescWind();

    }

    owlCarousel = () => {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                items: 16,
                nav: true,
                navText: ["<img src='myprevimage.png'>", "<img src='mynextimage.png'>"]

            });
        });
    }

    getHigestRain = () => {
        let higest = 0;
        this.weatherData.forEach(day => {
            higest = Math.max(higest, parseFloat(day.rainMm));
        });
        return higest;
    }

    displaysDescWind = () => {
        let first = 0
        this.weatherData.forEach(wind => {
            first = wind.windSpeedkmh;
        })

        return first;
    }

    render = () => {
        const higestRainMM = this.getHigestRain();
        const pxPerMM = 10 / higestRainMM;
        const DescRain = this.displaysDescWind();
        console.log(this.displaysDescWind())
        this.app = document.querySelector('.whether__box-right');
        this.app.innerHTML = `
        <div class="whether__dataHour owl-carousel owl-theme">      
            ${this.weatherData.map(hourData => {
            return `<div class="whether__boxData ">
                        <div class="whether__desc whether__desc--hour "></div>
                        <div class="whether__desc whether__desc--hour ">${hourData.hour}:00</div>
                        <div class="whether__desc whether__desc--ico ">
                            <img class="whether__img" src="test.png" alt="">
                        </div>
                        <div class="whether__desc whether__desc--temperature ">${hourData.temperature}
                        </div>
                        <div class="whether__desc whether__desc--rain ">${hourData.rainMm}mm
                        <div class="whether__background" style="height: ${pxPerMM * parseFloat(hourData.rainMm)}px"></div>
                        </div>
                        <div class="whether__desc whether__desc--windDegree ">${hourData.windDegree}
                            <img class="whether__windImg" src="right.png" alt="">
                        </div>
                        <div class="whether__desc whether__desc--windSpeed">${hourData.DescRain}
                            <div class="whether__desc--windSpeedkmh">${hourData.windSpeedkmh} km/h</div>
                        </div>
                        <div class="whether__desc whether__desc--hpa">${hourData.hpa} hPa</div>
                    </div>   
                    
            `
        }).join('')} 
        `
    }
}
new App();


