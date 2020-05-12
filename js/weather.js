class Weather {
    getWeather(cb) {
        const url = 'https://next.json-generator.com/api/json/get/4ko3FfRKO';
        fetch(url, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(respons => respons.json())
            .then((data) => {
                cb(data)
            })
            .catch(error => console.warn(error));
    }
}










