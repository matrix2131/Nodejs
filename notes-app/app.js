const yargs = require('yargs')
const chalk = require('chalk')
// importing the methods form notes.js
const notes = require('./notes.js')
// console.log(chalk.bold.green('Success!')+ chalk.bold(' Hey'))

// argv = argument vector ---> array that contains all the arguments provided.

// console.log(process.argv)
//Customize yargs version
yargs.version('1.1.0')

//add, remove, read, list
/*-------------------------------------------------------------------------------*/ 

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder:{
        title: {
            describe:'Note title',
            demandOption:true,  // to make it compulsory to give title when using add
            type:'string'
        },
            body: {
                describe:'Note body',
                demandOption:true,
                type:'string'
            }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
/*-------------------------------------------------------------------------------*/ 

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
/*-------------------------------------------------------------------------------*/ 

// Create list command
yargs.command({
    command:'list',
    describe:'List the notes',
    handler(){
        notes.listNotes()
    }
})

/*-------------------------------------------------------------------------------*/ 

// Create read command
yargs.command({
    command:'read',
    describe:'read the notes',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

/*-------------------------------------------------------------------------------*/ 

yargs.parse()

