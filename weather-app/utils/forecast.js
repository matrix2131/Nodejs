const request = require('request')


const forecast = (latitude, longitude, callback) =>{
    // weatherstack api to get weather details giving lat/long as input query
    const url = 'http://api.weatherstack.com/current?access_key=4493c0517f52745c1e65bd487894d222&query='+ latitude + ',' +longitude + '&units=f'
    request({url:url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather services :(',undefined)
        }
        else if(response.body.error){
            callback('Unable to find the location', undefined)
        }
        else{
            callback(undefined,
                response.body.current.weather_descriptions[0] + ". It is currently "+response.body.current.temperature + 
            " Fahrenheit out. It feels like "+ response.body.current.feelslike + " Fahrenheit out.")
        }
    })
}

module.exports = forecast