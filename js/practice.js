
let numberOfFilms; //глобальное объявление переменной

function start (){
    //здесь просто используем глобальную переменную
numberOfFilms = +prompt ("How many films did you already see?", ""); //+prompt if we need only numbers? not string
  //isNaN - is not null
while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt ("How many films did you already see?", ""); 
    }
}
start();


const personalMovieDB = {
actors: {},
movies: {},
genres: [],
privat: false
}; 


function rememberMyFilms(){
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
}
rememberMyFilms();


function detectPersonalLevel(){

    if (numberOfFilms < 10){
        document.write('Malo');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30){
        document.write('Norm');
    } else if (numberOfFilms >= 30){
        document.write('Mnogo');
    } else {
        document.write('Error');
    }
}

detectPersonalLevel();

console.log(personalMovieDB); 
/*
function showMyDb (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB.privat); 
    }
}

showMyDb();*/

function showMyDb (hidden){
    if (!hidden){
        console.log(personalMovieDB); 
    }
}
showMyDb(personalMovieDB.privat);



function writeYourGenres(){
    for (let i=1; i<=3; i++){
        const genre = prompt ('Print your favourite films genre number ' + i, '');
        //personalMovieDB.genres[i-1] = const genre = prompt (`Print your favourite films genre number ${i}`);
        console.log(genre);
        i++;
    }
}

writeYourGenres();

