const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Geocoding
// Address given by user --> converting it to latitutde/longitude --> weather forecast

const address = process.argv[2]

// If address is not provided.
if(!address){
    console.log("Please provide an address!")
}else{
geocode(address, (error,data) =>{
    // If there is an error, then the function stops and won't go to the forecast part.
    if(error){
        return console.log(error)
    }


    // Using callback function for forecasting
    forecast(data.latitude, data.longitude, (error, forecastData)=>{
    if(error){
        return console.log(error)
   }

    console.log(data.location)
    console.log(forecastData)
    })
})
}


 

// -----------------------------------------------------------------------

// Function of geocode without using the callback function

/* request({url:url2, json:true}, (error, response)=>{

    if(error){
        console.log("Unable to connect to the services :(")
    }
    else if(response.body.features.length === 0){
        console.log("Unable to find Location. Try another search")
}
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})  */


// ------------------------------------------------------------------------------------

/* request({url:url, json:true}, (error, response) =>{
    // Setup for low level error
    if(error){
        console.log('Unable to connect to weather services :(')
    }
    else if(response.body.error){
        console.log("Unable to find the location.")
    }    
    else{
    console.log(response.body.current.weather_descriptions[0] + ". It is currently "+response.body.current.temperature + 
    " Fahrenheit out. It feels like "+ response.body.current.feelslike + " Fahrenheit out.")
    }
})
*/

// ----------------------------------------------------------------------------------------