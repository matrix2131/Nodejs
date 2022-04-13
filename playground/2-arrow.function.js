// const square = function(x)
// {
//     return x*x
// } 

// const square = (x) => {
//     return x*x
// }

const square = (x) => x*x

// 'this' binds the object to its own values but 
// that does not happens when we are using arrow fucntions

// const event = {
//     name: "birthday party",
//     printGuestList: function()
//     {
//         console.log('Guest list for ' + this.name)
//     }
// }


// So arrow fucntions are poor candidates for methods but are ideal for everything else.

const event = {
    name: "birthday party",
    guestList:['soniya','stuti', 'sakhsi'],
    printGuestList()
    {
        console.log('Guest list for  ' + this.name)
        this.guestList.forEach((guest) => {
                console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuestList()