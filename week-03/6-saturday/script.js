"ewes tricked"
"use strict"
console.log("Welcome to Code Chrysalis Foundations!");

// WARMUP: Write a higher order function called odds tht accepts an array lf numbers 
// as a parameter and returns an array of just the odd ones. Use the each function below

console.log(odds([1, 2, 3, 4])); // => [1, 3]

function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function odds(array) {
  const result = [];
  each(array, function (number) {
    if (number % 2) result.push(number);
  });
  return result;
}

// Movies -----------------------------------
const movies = [];
const Movie1 = {
    title: "Jurassic Park",
    director: "Stephen Spielberg",
    year: "1993",
    genre: "Fantasy/Mystery",
    runtime: "127m",
    IMDbLink: "https://www.imdb.com/title/tt0107290/",
    cast: { 
        "Ian Malcolm": "Jeff Goldblum", 
        "Ray Arnold": "Samuel Jackson", 
        "Ellie Satler": "Laura Dern",
        "Alan Grant": "Sam Neill",
        "John Hammond": "Richard Attenborough",
        "Dennis Nedry": "Wayne Knight"
    }
}
const Movie2 = {
    title: "The Maltese Falcon",
    director: "John Huston",
    year: "1941",
    genre: "Film Noir/Mystery",
    runtime: "100m",
    IMDbLink: "https://www.imdb.com/title/tt033870/",
    cast: { 
        "Sam Spade": "Humphrey Bogart", 
        "Brigid O'Shaughnessy": "Mary Astor", 
        "Iva Archer": "Gladys George",
        "Joel Cairo": "Peter Lorre",
        "The Fat Man": "Sydney Greenstreet",
    }
}
const Movie3 = {
    title: "Blade Runner",
    director: "Ridley Scott",
    year: "1982",
    genre: "Sci Fi/Thriller",
    runtime: "117m",
    IMDbLink: "https://www.imdb.com/title/tt0083658/",
    cast: { 
        "Rick Deckard": "Harrison Ford", 
        "Rachael": "Sean Young", 
        "Gaff": "Edward James Olmos",
        "Pris": "Daryl Hannah",
        "Roy Batty": "Rutger Hauer",
    }
}

function createMovie(title, year, director, cast) {
  return {
    "title": title,
    "year": year,
    "director": director,
    "cast": cast
  };
}

function displayMovie(movie) {
  // write title, year
  console.log(movie.title.toUpperCase() + ", " + movie.year);
  // write all other key/value pairs
  for (let key in movie) {
    // if key is not in [title, year]
    if (!(key in { "title": "", "year": "", "cast": "" })) {
        // indent the line and capitalize the key
        console.log("    " + key[0].toUpperCase() + key.substring(1) + ": " + movie[key]);
    }
  }
  displayCast(movie.cast);
}

function displayCast(cast) {
  console.log("  CAST");
  for (let role in cast) {
    console.log("    " + role + ": " + cast[role]);
  }
}

// displayMovie(createMovie(Movie1.title, Movie1.year, Movie1.director, Movie1.cast));

// add movies to array
movies.push(Movie1, Movie2, Movie3);

//display all movies
function displayMovies(arrayOfMovies){
    console.log("Here's a list of ALL the movies...")
    console.log("------------------------------------------------");
    each(arrayOfMovies, function(movie) {
        console.log("");
        displayMovie(movie); 
    });
    console.log("------------------------------------------------");

}

displayMovies(movies);


// CLOSURES : -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Password
function createPasswordProtectedAccount(userChosenPassword) {
    const savedPassword = userChosenPassword;
  
    function checkPassword(passwordEntered) {
      if (savedPassword === passwordEntered) {
        console.log("Correct password. Access granted!");
      } else {
        console.log("Wrong password. Access denied.");
      }
    }
    return checkPassword;
  }

// Set initial password  
const account = createPasswordProtectedAccount("Test1234"); 
// Add the wrong password in as an argument!
account("8skwob"); // => "Wrong password. Access denied."
// Now add the correct password in as an argument. 
account("Test1234"); //=> "Correct password. Access granted!"

// Donation counter
function createDonationAccount() {
  let donations = 0;

  function addDonation() {
    return (donations += 1);
  }
  console.log("The donation account has been created!");
  return addDonation;
}

const donationAccount = createDonationAccount();
console.log(donationAccount());
console.log(donationAccount());
console.log(donationAccount());


// Create your own closure. Here is the scenario:
// You are creating a website that doesn't allow access to some features 
// for children who are under the age of 13.

// 1 - Create a function that accepts age as an argument. 
// 2 - Store that age inside a secret closure scope. 
// 3 - Create an inner function that increases the age by one year 
// everytime it is invoked. Then, if the age is over 13, return true– 
// and if it is under 13, return false.

function createWebsiteAccount(age) {
    let savedAge = age;

    function incrementAge(){
        savedAge++;
        if (savedAge < 13) {
            return false;
        } else {
            return true;
        }
    }
    return incrementAge;
}

// Test cases
 const childAccount = createWebsiteAccount(10);
 console.log(childAccount()); // => false
 console.log(childAccount()); // => false
 console.log(childAccount()); // => true (the child is now 13!)

 const adultAccount = createWebsiteAccount(33);
 console.log(adultAccount()); // => true (no matter how many times it is invoked)
