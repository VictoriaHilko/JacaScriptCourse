//1
const numberOfFilms = +prompt ("How many films did you already see?", ""); //+prompt if we need only numbers? not string
console.log(numberOfFilms);

//2
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genders: [],
privat: false
};