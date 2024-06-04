// This line imports the Express module, which is a web application framework for Node.js designed for building web applications and APIs.
const express = require("express")

const modelService = require("./modules/modelServices");

// This line creates an instance of an Express application. This app object is used to set up middleware and define routes for handling HTTP requests.
const app = express()
// This line creates an instance of an Express application. This app object is used to set up middleware and define routes for handling HTTP requests.
const PORT = 8080

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/models", (req, res) => {
    modelService.getModels().then((models) => {
        res.json(models)
    })
})

app.get("/models/test",(req,res)=>{
    modelService.getModelById(1).then((modelData)=>{
        res.send(modelData);
    }).catch((err)=>{
        console.log(err);
    })
})

modelService.initialize().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})