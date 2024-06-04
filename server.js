// This line imports the Express module, which is a web application framework for Node.js designed for building web applications and APIs.
const express = require("express")

// This line creates an instance of an Express application. This app object is used to set up middleware and define routes for handling HTTP requests.
const app = express()
// This line creates an instance of an Express application. This app object is used to set up middleware and define routes for handling HTTP requests.
const PORT = 8080

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})