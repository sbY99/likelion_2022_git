
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const APIKEY = '#############################';

const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY +"&language=en-US&page=1";
const now_playing = document.getElementById('now-playing');

fetch(now_playingURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {

            let movie = document.createElement('li');
            let moviediv = document.createElement('div');
            let backdrop = document.createElement('img');
            backdrop.setAttribute('src',IMAGE_URL+element.backdrop_path);
            let title = document.createElement('h4');
            title.innerText = element.title;
            let rate = document.createElement('span');
            rate.innerText = '* ' + element.vote_average;

            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            now_playing.appendChild(movie);
        })
    });

const populargURL = "https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY +"&language=en-US&page=1";
const popular = document.getElementById('popular');
    
fetch(now_playingURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {

            let movie = document.createElement('li');
            let moviediv = document.createElement('div');
            let backdrop = document.createElement('img');
            backdrop.setAttribute('src',IMAGE_URL+element.backdrop_path);
            let title = document.createElement('h4');
            title.innerText = element.title;
            let rate = document.createElement('span');
            rate.innerText = '* ' + element.vote_average;
    
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            popular.appendChild(movie);
        })
    });
    
const topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY +"&language=en-US&page=1";
const topRated = document.getElementById('top-rated');
        
fetch(topRatedURL)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
    
            let movie = document.createElement('li');
            let moviediv = document.createElement('div');
            let backdrop = document.createElement('img');
            backdrop.setAttribute('src',IMAGE_URL+element.backdrop_path);
            let title = document.createElement('h4');
            title.innerText = element.title;
            let rate = document.createElement('span');
            rate.innerText = '* ' + element.vote_average;
        
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            topRated.appendChild(movie);
        })
    });


    const upComingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key="+APIKEY +"&language=en-US&page=1";
    const upComing = document.getElementById('up-coming');
            
    fetch(upComingURL)
        .then(response => response.json())
        .then(response => {
            response.results.forEach((element) => {
        
                let movie = document.createElement('li');
                let moviediv = document.createElement('div');
                let backdrop = document.createElement('img');
                backdrop.setAttribute('src',IMAGE_URL+element.backdrop_path);
                let title = document.createElement('h4');
                title.innerText = element.title;
                let rate = document.createElement('span');
                rate.innerText = '* ' + element.vote_average;
            
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
                upComing.appendChild(movie);
            })
        });