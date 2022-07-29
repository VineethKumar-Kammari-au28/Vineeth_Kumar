require('dotenv').config();
const mongoose = require('mongoose')

const DB = "mongodb+srv://linkshare:bpysyuQm9ipNbS6q@cluster0.e6xku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function initMongoDB() {
    await mongoose.connect(DB, (err) => {

        if (err) {
            console.log("Error in connecting to DB")
        } else {
            console.log("successfully connected to DB")
        }
    })
}

module.exports =
    initMongoDB