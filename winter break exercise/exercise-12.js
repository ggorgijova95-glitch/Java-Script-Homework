// Create an object to represent your favorite movie
let favoriteMovie = {
  title: "Inception",
  year: 2010,
  genres: ["Sci-Fi", "Action"]
};
// Add another genre to the genres array
favoriteMovie.genres.push("Thriller");
// Display the movie information
console.log(
  "My favorite movie is " +
  favoriteMovie.title +
  ", released in " +
  favoriteMovie.year +
  "."
);
// Display the genres
console.log("Genres: " + favoriteMovie.genres.join(", "));