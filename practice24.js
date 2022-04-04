
//let numberOfFilms; //глобальное объявление переменной == count


const personalMovieDB = {
count: 0,
actors: {},
movies: {},
genres: [],
privat: false,
start: function (){
    //здесь просто используем глобальную переменную
    personalMovieDB.count = +prompt ("How many films did you already see?", ""); //+prompt if we need only numbers? not string
  //isNaN - is not null
while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
    personalMovieDB.count = +prompt ("How many films did you already see?", ""); 
    }
},
rememberMyFilms: function (){
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
        },
 detectPersonalLevel: function (){

    if (personalMovieDB.count < 10){
        document.write('Malo');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        document.write('Norm');
    } else if (personalMovieDB.count >= 30){
        document.write('Mnogo');
    } else {
        document.write('Error');
    }
    },
showMyDb: function (hidden){
    if (!hidden){
        console.log(personalMovieDB); 
    }
    },
writeYourGenres: function (){
    for (let i=1; i<=3; i++){
        const genre = prompt ('Print your favourite films genre number ' + i, '');
        //personalMovieDB.genres[i-1] = const genre = prompt (`Print your favourite films genre number ${i}`);
        console.log(genre);
        i++;
    }
    },
toggleVisibleMyDB: function (){
    if(personalMovieDB.privat){
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
},

}; 
/*
function showMyDb (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB.privat); 
    }
}
*/
  







