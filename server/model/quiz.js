const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    quizName:String
})

module.exports = mongoose.model('quiz', quizSchema)