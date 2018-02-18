var axios = require('axios');

module.exports = {
    getTemp: function (location) {
        //prepare apiQuery
        const api_key = 'd478acb8da5e47bbb20d53e3d42ef9df';
        location = encodeURIComponent(location);
        let queryString = 'q=' + location + "&appid=" + api_key;
        let apiQuery = 'http://api.openweathermap.org/data/2.5/weather?';
        apiQuery = apiQuery + queryString;
        
        //call api using axios lib
        let weatherData = axios.get(apiQuery)
            .then(function(response) {            
                return response.data.main;
            })
            .catch(function(error) {
                console.log("error in app: " + error);
                return error.response.data;
            });

        return weatherData;
    }
};