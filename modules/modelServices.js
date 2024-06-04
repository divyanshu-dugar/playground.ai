// let testFx = () =>{

// }

// module.exports = {
//     testFx
// }

const modelData = require("../data/models.json");
const categoryData = require("../data/models.json");
let models = []

function initialize(){
    return new Promise((resolve, reject) => {
        models = modelData;

        if(models){
            resolve("success");
        }else{
            reject("Error Initializing models");
        }
    })
}

function getModels() {
    return new Promise((resolve, reject) => {
        if(models){
            resolve(models)
        }else{
            reject("No Models available")
        }
    }).catch((err) => {
        console.log(err);
    })
}

function getModelById(id){
    return new Promise((resolve, reject)=>{
        let modelByID = models.find(model => model.id === id)
        if(modelByID){
            resolve(modelByID);
        }else{
            reject("No Model by the ID found");
        }
    })
}

module.exports = { 
     initialize, getModels, getModelById
}