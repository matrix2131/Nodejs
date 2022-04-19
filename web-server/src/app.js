const express = require('express')

const app = express()

//  Get lets us configure what the server should do when someone tries to get the resource at a specific url.

// The function here will tell what to do when someone visits url present in ''.
app.get('', (req, res) => {
    // To send something back to the requester
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send("About page")
})

app.get('/weather', (req, res) => {
    res.send("Weather page")
})
// app.com       --> root route
// app.com/help      --> help route
// app.com/about      --> about route

// to run the server
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
