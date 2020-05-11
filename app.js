const weather = new Weather();

class App {
    constructor() {
        this.weatherData = {};
        weather.getWeather(this.getWeatherData);
    }

    getWeatherData = (data) => {
        this.weatherData = data;
        this.render();
        this.createChar();
    }

    createChar = () => {
        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    data: [7, 7, 8, 8],
                    label: false,
                    borderColor: "#f9d348",
                    fill: false
                },
                ]
            },
            options: {
                title: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                },
                elements: {
                    line: {
                        tension: 0,
                        fill: false
                    },
                },
                layout: {
                    padding: {
                        left: 40,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 0,
                        fontSize: 0,

                    }
                }


            }


        });
    }

    render = () => {
        console.log(this.weatherData)
        this.app = document.querySelector('.whether__box-right');
        this.app.innerHTML = `
        <div class="whether__boxData2 owl-carousel">
            <div class="whether__data whether__data--day"><div class="whether__text">
                <p>Dzień</p>
            </div>
                <div class="whether__desc2 whether__desc--hour "></div>
            </div>
            <div class="whether__data whether__data--hour">
                <div class="whether__text">
                    <p>Godzina</p>
                </div>
                <div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `<div class="whether__desc whether__desc--hour ">${hourData.hour}:00</div>`
        }).join('')}
                </div>
            </div>
            <div class="whether__data whether__data--forecast">
            <div class="whether__text">
                <p>Prognoza</p>
            </div>
            <div class="whether__dataHour">${this.weatherData.map(s => {
            return `<div class="whether__desc whether__desc--img"> <img class="whether__img" src="test.png" alt=""></div>`
        }).join('')}
                </div>
            </div>
            <div class="whether__data whether__data--temperature">
            <div class="whether__text">
                <p>Temperatura</p>
            </div>
            <div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `<div class="whether__desc whether__desc--temp ">${hourData.temperature}
                </div>
                `
        }).join('')}
                </div>
            </div>
            <div class="whether__data whether__data--rain">
                <div class="whether__text">
                    <p>Opady</p>
                </div>
                <div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `<div class="whether__desc whether__desc--rainMm ">${hourData.rainMm}mm</div>`
        }).join('')}
                </div>
            </div>
            <div class="whether__data whether__data--windDegree">
                <div class="whether__text">
                    <p>Kierunek </br> wiatru</p>
                </div>
                <div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `
            <div class="whether__desc whether__desc--windDegree ">${hourData.windDegree}</div>`
        }).join('')}
                    </div>
            </div>
            <div class="whether__data whether__data--windSpeed">
                <div class="whether__text">
                    <p>Prędkość </br> wiatru</p>
                </div>
            <div class="whether__dataHour">${this.weatherData.map(hourData => {
            return `<div class="whether__desc whether__desc--windSpeed ">${hourData.windSpeed}
                <div class="whether__desc--windSpeedkmh">${hourData.windSpeedkmh} km/h</div>
            </div>`
        }).join('')}
                </div>
            </div>
            <div class="whether__data whether__data--hpa">
                <div class="whether__text">
                    <p>Ciśnienie</p>
                </div>
                <div class="whether__dataHour">
                ${this.weatherData.map(hourData => {
            return `<div class="whether__desc whether__desc--hpa ">${hourData.hpa}hPa 
            </div>`
        }).join('')}
                </div>
            </div>
            <div class="whether__data whether__data--hpa">
                <div class="whether__text">
                    <p>Ciśnienie</p>
                </div>
                <canvas id="line-chart"></canvas>
        </div>
            
                <div class="whether__data whether__data--hpa">
                
                <canvas id="line-chart">
                    <div class="whether__text">
                        <p>Ciśnienie</p>
                    </div>
                    <div class="whether__dataHour">
                    ${this.weatherData.map(hourData => {
            return `<div class="whether__desc whether__desc--hpa ">${hourData.hpa}hPa 
                </div>`
        }).join('')}
        </canvas>
                    </div>

           
        </div>
        
        `
    }

}

new App();


{/* <div class="whether__dataHour">${this.weatherData.map(hourData => {
    return `<div class="whether__boxData">
                <div class="whether__desc whether__desc--hour "></div>
                <div class="whether__desc whether__desc--hour ">${hourData.hour}:00</div>
                <div class="whether__desc whether__desc--ico ">
                    <img src="test.png" alt="">
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
}).join('')} */}