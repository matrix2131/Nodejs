const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) =>{
    const notes = loadNotes()

    // check if note with the same title exists(if it does then dont add it)
    // duplicateNotes stores the duplicate note values.

    // duplicateNotes contains list of all the duplicate notes
    // here filter is gonna go through all the notes even after finding the duplicate note
    // const duplicateNotes= notes.filter((note) => note.title == title)
    
    // duplicateNote contains the single note thats duplicate
    // here find will stop after the duplicate note is found
    const duplicateNote = notes.find((note => note.title === title))
    // const duplicateNotes= notes.filter(function(note) {
    //     return note.title == title
    // })


    /* Node debugger is using the v8 debugger tools and chrome also uses the same so, chrome is the only browser for node debugging.*/
    // debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New note added!"))
    }else {
        console.log(chalk.red('Note title taken!'))
    }    
}

// To save the notes in notes.json
// stringify - taking json object and returning json string back
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

/*-----------------------------------------------------------------------*/

const removeNote = (title) =>{
    const notes = loadNotes()

    const notesTokeep = notes.filter((note) => note.title !== title)

    // const notesTokeep = notes.filter(function(note){
    //     return note.title !== title
    // })

    if(notesTokeep.length === notes.length){
        console.log(chalk.red("No note found!"))
    }
    else {
        console.log(chalk.green("Note removed!"))
        saveNotes(notesTokeep)
    }
}

/*-------------------------------------------------------------------------------*/ 

const listNotes = () => {
    const notes = loadNotes()

    if(notes.length !== 0)
    {
        console.log(chalk.blue.inverse("Your notes: "))
        notes.forEach((note)=> {
            console.log(note.title)
        })
    }

    else {
        console.log(chalk.red.inverse("NO NOTES HERE :(("))
    }
}
    

/*------------------------------------------------------------------------ */


const readNotes = (title) =>{
    const notes = loadNotes()

    const noteFound = notes.find((note) => note.title === title)
    
    if(noteFound)
    {
        console.log("Title: "+chalk.cyan.inverse(noteFound.title))
        console.log("Body: "+noteFound.body)
    }
    else    
        console.log(chalk.red("NOTE NOT FOUND!!"))
}

/*---------------------------------------------------------------------------- */

// Exporting all the methods
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}