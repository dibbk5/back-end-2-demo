const express = require('express')
const cors = require('cors')
const movieController = require('./controllers/movies.controller.js')

const PORT = 4004

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/movies', movieController.getAllMovies)
app.post('/api/movies', movieController.createMovie)
app.delete('/api/movies/:id', movieController.deleteMovie)

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))