class Weather {
    getWeather(cb) {
        const url = 'https://next.json-generator.com/api/json/get/EJ3LSJptO';
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










