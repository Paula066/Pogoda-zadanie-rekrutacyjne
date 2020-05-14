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
    }

    owlCarousel = () => {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                items: 11,
                nav: true,
                dots: false,
                navText: ["<img class='whether__arrowLeft' src='./img/leftarrow.png'>", "<img class='whether__arrowRight' src='./img/rightarrow.png'>"]

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
    convertToText = (wind) => {
        switch (true) {
            case (wind === 0):
                return 'Brak'
            case (wind <= 15):
                return 'Słaby'
            case (wind <= 22):
                return 'Umiar.'
            default:
                return 'Silny'
        }
    }

    convertToImg = (rain) => {
        switch (true) {
            case (rain <= 0):
                return '<img class="whether__cloudsPhoto" src="./img/cloudy.png" alt=""></img>'
            case (rain > 0):
                return '<img class="whether__cloudsPhoto" src="./img/rainimg.png" alt=""></img>'
        }
    }

    convertWindDegreeToText = (windDegree) => {
        switch (true) {
            case (windDegree < 45):
                return 'Południowy'
            case (windDegree < 90):
                return 'Pd-Zachód'
            case (windDegree === 90):
                return 'Zachodni'
            case (windDegree < 135):
                return 'Pd-Zachód'
            case (windDegree < 225):
                return 'Północny'
            case (windDegree < 270):
                return 'Pn-Wschód'
            case (windDegree === 270):
                return 'Wschodni'
            case (windDegree < 315):
                return 'Pd-Wschód'
            case (windDegree <= 360):
                return 'Południowy'
        }
    }

    render = () => {
        const higestRainMM = this.getHigestRain();
        const pxPerMM = 10 / higestRainMM;

        this.app = document.querySelector('.whether__box-right');
        this.app.innerHTML = `
        <div class="whether__box-left">
            <div class="whether__descLeft whether__desc--day">Dzień</div>
            <div class="whether__descLeft whether__desc--hours">Godzina</div>
            <div class="whether__descLeft whether__desc--ico">Prognoza</div>
            <div class="whether__descLeft whether__desc--temp">Temperatura</div>
            <div class="whether__descLeft whether__desc--rains">Opady</div>
            <div class="whether__descLeft whether__desc--windDegrees">Kierunek wiatru</div>
            <div class="whether__descLeft whether__desc--windSpeeds">Prędkość wiatru</div>
            <div class="whether__descLeft whether__desc--hpa">Ciśnienie</div>
        </div>
        <div class="whether__dataHour owl-carousel owl-theme">      
            ${this.weatherData.map(hourData => {
            return `<div class="whether__boxData">
                        <div class="whether__desc whether__desc--day"></div>
                        <div class="whether__desc whether__desc--hour">${hourData.hour}:00</div>
                        <div class="whether__desc whether__desc--ico">
                            ${this.convertToImg(hourData.rainMm)}
                        </div>
                        <div class="whether__desc whether__desc--temperature ">${hourData.temperature}
                        </div>
                        <div class="whether__desc whether__desc--rain">${hourData.rainMm}mm
                        <div class="whether__background" style="height: ${pxPerMM * parseFloat(hourData.rainMm)}px"></div>
                        </div>
                        <div class="whether__desc whether__desc--windDegree">${this.convertWindDegreeToText(hourData.windDegree)}
                            <img class="whether__windImg" style="transform: rotate(${hourData.windDegree}deg)" src="./img/uparrow.png" alt="">
                        </div>
                        <div class="whether__desc whether__desc--windSpeed">${this.convertToText(hourData.windSpeedkmh)}
                            <div class="whether__desc--windSpeedkmh">${hourData.windSpeedkmh} km/h</div>
                        </div>
                        <div class="whether__desc whether__desc--hpa">${hourData.hpa} hPa
                        </div>
                    </div>   
            `
        }).join('')} 
        `

    }
}
new App();


