const { Router } = require('express')
const notes = require('./notes')
const auth = require("./auth")
const routes = Router()

routes.get('/', (req, res) => {
    res.send("api done")
})

module.exports = {
    base: routes,
    notes: notes,
    auth: auth
}
