# LIRI Bot
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

<img width="690" alt="liri bot_concert-this" src="https://user-images.githubusercontent.com/38221513/47469444-fc3ea980-d7ce-11e8-9669-86605085a039.png">


`node liri.js spotify-this-song '<song name here>'`

* This will show the artist, name of song, preview link of the song from Spotify, album song is from in your terminal/bash window

#### Screenshot

<img width="1029" alt="liri bot_spotify-this-song" src="https://user-images.githubusercontent.com/38221513/47469591-a61e3600-d7cf-11e8-98ce-e084ff7a6645.png">


`node liri.js movie-this '<movie name here>'`

* This will show title of the movie, year movie was released, IMDB Rating, Rotten Tomatoes Rating, country movie was made, language, plot, actors in your terminal/bash window

#### Screenshot

<img width="1031" alt="liri bot_movie-this" src="https://user-images.githubusercontent.com/38221513/47469628-dcf44c00-d7cf-11e8-8d58-bf4e336b6443.png">

`node liri.js do-what-it-says`

* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

#### Screenshot

<img width="1037" alt="liri bot_do-what-it-says" src="https://user-images.githubusercontent.com/38221513/47469659-01502880-d7d0-11e8-94e8-d3212d2de20f.png">


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

