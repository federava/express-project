const express = require('express')
const app = express()
const path = require('path') // la importamos para el usarla en el renglon del sendFile

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine','ejs') // set the app for using ejs
// app.use(logger) // you can use it here an everything will execute logger function, but instead we include it in the function below

/*
app.get('/', (req, res) => { // I could include logger function after the path, or whichever function I want
    console.log('Here') // outputs in the console (this console, not the browser)
    
    // res.send("Hi") // 1 sends it to the browser
    // res.sendStatus(500) np// 2 status code to the browser
    // res.status(500).json({ message: "Error"}) // 3 status code to the browser with message
    // res.json({ message: "Error"}) // 3 the status is 200 (succesesfull)
    // res.download('package.json') // file downloading
    


    // Asi lo hace el loco del video https://www.youtube.com/watch?v=SccSCuHhOw0
    res.render('index', {text: "Test text"} ) // for HTML (we will use ejs), we can use a second variable in the function to send the ejs file a json

    // Asi lo hicieron en DigitalHouse
    //res.sendFile(path.join(__dirname, '/views/metodoSendFile.html')) // also can output another file

}) // location and a function with request and response
*/

const userRouter = require('./routes/users')

app.use('/users',userRouter) // mount the router to the app in the path /users

/*
// Create custom middleware -> gonna use it in users
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
*/

app.listen(3030)

