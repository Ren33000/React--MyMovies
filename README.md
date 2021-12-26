<h1 align="center">My Movies</h1>
<h3 align="center">Coding Challenge</h3>

I have realized a very similar app at Le Wagon (API call to TMDB + routes + add/remove to lists) but on Ruby on Rails 
(repo: https://github.com/Ren33000/RAILS---Watch-list)

Got a bit confused about the way to do in React, saw different tutorials doing it in different ways (with routes, without routes, with axios or fetch...).


<p align="center">
  <img src="https://github.com/Ren33000/React--MyMovies/blob/master/MyMovie%20Screenshot.png" alt="Screenshot app"/>
</p>


## What has been done

Create the UI with an API call to the TMDB to get a list of movies following the user query.

We can see the details of the movies (inside the overlay)

We can add/ remove the movies to a favourite list

Decided to use fetch instead of axios library since the API call was limited

Decided to keep the result in local storage (not a lot of data to store in this small app)

## Issues/ Questions I had

Unable to call the API with a selected movie in a different page => decided to show the details instead in the movie card + overlay. Same result for the user at the end (able to see the movie's details + not having to leave the page which is usually good UX) but not following the process asked

Not sure if using routes was appropriate here, since I couldnt' manage to call the API on selected movies didnt' do anyway

Unable to get the movie's description scrolling in the overlay (tried overflow: scroll, text-overflow on different elements, able to select the text to change the color for example but unable to make it scroll).

## Final result

App working (didn't push to a server, just local host) 

About 2 days spent
