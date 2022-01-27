const express = require('express')
const router = express.Router()

// the routes go from top to bottom, it checks in order


router.use(logger)

// Sets the router of this route
router.get('/', (req, res) => {
    res.send('User List')
})

// want to render out a form
router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Test text"} )
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }

    console.log(req.body.firstName)
    res.send('Create user')
})


// dinamic routes go at the end

// The .route lets you attach .get, .put and .delete, it replaces the code that comes commented down
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user) // It gets the user from the router.param
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Change User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })


const users = [{ name: "Fede"}, {name: "Carli"}]

// This param function runs the code you write whenever the parameter is used
// This runs first because is middleware. If runs before sending the response of the upper code
router.param("id", (req, res, next, id) => {
    console.log(id) // on server side
    req.user = users[id]
    next()
})

/*
router.get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`) // comillas para atras para incluir el codigo entre ${expresion}
})

router.put('/:id', (req, res) => {
    res.send(`Change User With ID ${req.params.id}`) // comillas para atras para incluir el codigo entre ${expresion}
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User With ID ${req.params.id}`) // comillas para atras para incluir el codigo entre ${expresion}
})
*/


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}



module.exports = router // export the router to the server.js