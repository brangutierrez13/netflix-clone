export const {movieDb, MovieDb} = require('moviedb-promise')
export const moviedb = new MovieDb(process.env.SECRET_KEY)