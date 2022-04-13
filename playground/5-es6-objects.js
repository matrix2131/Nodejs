// Object property shorthand

const name = 'Soniya'
const userAge = 21

// Creating a object with different properties
const user = {
    // property of the object with the same name
    // [name: name] Thi can written in shorthand as shown below
    name, 
    age: userAge,
    location: 'India'
}

console.log(user)


// Object Destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 9
}

// const label = product.label
// const stock = product.stock

// We can also rename the variable as done below for the label property
// Syntax => const {property names to extract} = object name
// If we add variable which isnt present in the object, it will take the default value
// of that mentioned(eg- rating = 5). 

/* const {label:productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)
*/


// Object Destructuring in Function arguments
const transactions = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transactions('order', product)
