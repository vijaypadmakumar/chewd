const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080

app.route("/")
    .get((req, res) => {
        res.send("hellooo")
    })

app.route("/:userID/:preferences")
    .get((req, res) => {
        console.log(req.params)
    })

app.listen(PORT, () => {
    console.log(`Port : ${PORT}`)
})