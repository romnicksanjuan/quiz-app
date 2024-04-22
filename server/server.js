const express = require('express')
const mongoose = require('mongoose')
const Quiz = require('./model/quiz')

const app = express()

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/quiz-app')
    .then(() => console.log('connected to database'))

app.use(express.json())
app.get('/', async (req, res) => {
    try {
        const quiz = await Quiz.find({})
        res.json(quiz)
    } catch (error) {

    }
})

app.post('/create-quiz', async (req, res) => {
    const { quizName } = req.body;

    try {
        const saveQuiz = new Quiz({ quizName })
        await saveQuiz.save()
        res.json({ success: 'Quiz Created' })
    } catch (error) {
        console.log(error)
    }
})


const PORT = 3000
app.listen(PORT, () => {
    console.log('server is running')
})