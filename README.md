# liri-node-app

Overview
LIRI is a Language Interpretation and Recognition Interface. Specifically, Liri is a command line node app that takes in parameters and gives back data.

How does it work?
Run "liri.js" file with node while adding an "action argument" and an optional "item argument". 

Template: node liri.js action item

Posible actions:
concert-this: Searches the Bandsintown Artist Events API and outputs information about a concert.

spotify-this-song Searches the Spotify API and outputs information about a song.

movie-this Search the OMDB API and outputs information about a movie.

do-what-it-says Runs the action from the "random.txt" file with fs.readFile node package .



What's the point?
This is one example of using node.js to do actions such as..

Taking user input and search, retrieve and display information from an API.
-Using "npm".
-Using "require" to link files.
-Using "fs" to read information from a file.
-using "env" to keep information private.


For more cool stuff checkout http://lukekarlovich.com
