
const numberOfFilms = prompt ("How many films did you already see?", ""); //+prompt if we need only numbers? not string


const personalMovieDB = {
actors: {},
movies: {},
genders: [],
privat: false
}; 


for(let i=0; i<3; i++){
const lastFilm = prompt ('Print one of the last watched films', ''),
      lastFilmGrade = prompt ('Print the grade of this film:', '');

personalMovieDB.movies[lastFilm] = lastFilmGrade;
}
console.log(personalMovieDB);