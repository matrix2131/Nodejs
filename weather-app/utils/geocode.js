const request = require('request')

const geocode = (address, callback) => {
    // using mapbox api to get lat/long by entering any location
    const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic29uaXlhLTEzMTAiLCJhIjoiY2wwajVzZDk5MDdmaDNqcXRldnpqc3dmYSJ9.c2zYNU2cOlS5a4f9_lHYhA'
    request({url:url2, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to location servies :(', undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find Location!! Try another search', undefined)
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode