
const favoriteMovies = [
    "The Boys over Flowers",
    "The Godfather",
    "The Dark Knight",
    "Doctors",
    "The Lion and The cub",
    "Wednesday",
    "Fight Club",
    "Star Wars",
    "The Good, the Bad, and the ugly",
    "The Lord of the Rings: The Return of the King"
];
function displayMovies() {
    const movieList = document.getElementById('movieList');
    favoriteMovies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        movieList.appendChild(li);
    });
}


displayMovies();
