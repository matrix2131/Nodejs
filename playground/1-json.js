const fs = require('fs')

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

// takes in a object and gives the json string back.
// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

// takes the object and gives json object back
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// const dataBuffer = fs.readFileSync('1-json.json')  // read the file getting the binary data
// const dataJSON = dataBuffer.toString()  // converted binary to standard string in javascript
// const data = JSON.parse(dataJSON)    // parsed that json data into an object
// console.log(data)    // access the property

const data = fs.readFileSync('1-json.json')
const stringed = data.toString()
const user = JSON.parse(stringed)
console.log(user)

user.name = "Soniya"
user.age = 21

const changed = JSON.stringify(user)
fs.writeFileSync('1-json.json', changed)
