
const numberOfFilms = prompt ("How many films did you already see?", ""); //+prompt if we need only numbers? not string


const personalMovieDB = {
actors: {},
movies: {},
genders: [],
privat: false
}; 


for(let i=0; i<2; i++){
    const lastFilm = prompt ('Print one of the last watched films', ''),
          lastFilmGrade = prompt ('Print the grade of this film:', '');
 
    if (lastFilm != null && lastFilmGrade != null  && lastFilm != '' && lastFilmGrade != null && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = lastFilmGrade;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    }

if (numberOfFilms < 10){
    document.write('Malo');
} else if (numberOfFilms >= 10 && numberOfFilms < 30){
    document.write('Norm');
} else if (numberOfFilms >= 30){
    document.write('Mnogo');
} else {
    document.write('Error');
}

console.log(personalMovieDB); 