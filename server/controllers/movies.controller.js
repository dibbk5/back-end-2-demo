let movies = require('../db.json')

let nextAvailableID = movies.length + 1

module.exports = {
    getAllMovies:(req, res) => {
        res.status(200).send(movies)
    },
    createMovie(req,res) {
        const { title, rating, imageURL } = req.body;

        if (!title || !rating || !imageURL){
            return res.status(400).send("Invalid request.")
        }

        const newMovie = {
            id: nextAvailableID,
            title,
            rating,
            imageURL 
        }

        movies.push(newMovie)

        nextAvailableID += 1

        res.status(200).send(movies)
    },
    
    deleteMovie(req, res) {
        const id = parseInt (req.params.id, 10)

        const hasMovieID = movies.map((movie) => movie.id).includes(id);

        if (!hasMovieID) {
            return res.status(400).send("Movie id does not exist.")
        }

        movies = movies.filter((movie) => movie.id !== id)

        res.status(200).send(movies)
    }
}