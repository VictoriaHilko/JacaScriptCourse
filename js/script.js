//1
const numberOfFilms = +prompt ("How many films did you already see?", ""); //+prompt if we need only numbers? not string


//2
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genders: [],
privat: false
};

//3
const lastFilm = prompt ("Print one of the last watched films", ""),
      lastFilmGrade = prompt ("Print the grade of this film:", ""),
      lastFilm2 = prompt ("Print one of the last watched films", ""),
      lastFilmGrade2 = prompt ("Print the grade of this film:", "");

personalMovieDB.movies[lastFilm] = lastFilmGrade;
personalMovieDB.movies[lastFilm2] = lastFilmGrade2;

console.log(personalMovieDB);
