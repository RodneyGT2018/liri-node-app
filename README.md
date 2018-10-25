# LIRI-Node-App
This is a LIRI application (Language Interpretation and Recognition Interface) that utilizes a command line node app to accept input and return data. Specifically, a user can run “node liri.js” and include one of the following commands and it will output the data related to the user's request.

- `concert-this` + artist name
- `spotify-this-song` + song name
- `movie-this` + movie name
- `do-what-it-says`

## Getting Started

Create your own Spotify and API keys and replace it with the information in the file called `.env`. 


### NPM Installations

Navigate to the root of your project. Then in the terminal command line run `npm init`, this will initalize a `package.json` for your project. 

Include the following NPM installations, `npm dotenv`, `npm node-spotify-api`, `npm request`, `npm moment`.


## Example Results 

To see LIRI Bot in action, run the following in your command line:

`node liri.js concert-this`

* This will search the Bands in Town Artist Events API for an artist and render the venue name, venue location, and the date of the event(s).

#### Screenshot

![alt text](screenshots/Liri Bot_Concert-this.png "Concert-This Screenshot")


`node liri.js spotify-this-song '<song name here>'`

* This will show the artist, name of song, preview link of the song from Spotify, album song is from in your terminal/bash window

#### Screenshot


`node liri.js movie-this '<movie name here>'`

* This will show title of the movie, year movie was released, IMDB Rating, Rotten Tomatoes Rating, country movie was made, language, plot, actors in your terminal/bash window

#### Screenshot


`node liri.js do-what-it-says`

* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

#### Screenshot


## Programs Used

* Visual Studio Code (https://code.visualstudio.com) - Text editor
* Javascript 
* Node.js (https://nodejs.org/en) - Framework used
* JSON (http://www.json.org) - Data format used
* Bands in Town API (http://www.artists.bandsintown.com/bandsintown-api)  - API 
* Spotify API (https://developer.spotify.com/documentation/web-api)  - API for music 
* OMDB API (http://www.omdbapi.com) - API for movies 


## Aspiring Developer Github

(https://github.com/rodneyGT2018)


## Appreciation

* Many thanks to the fellow coders that assisted me with this project.

