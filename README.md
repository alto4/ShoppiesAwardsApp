# TheShoppies
A movie awards contest application that allows users to search movies and nominate 5 of their favourites. 

These are the functional requirements for the MVP:
  1. Search OMDB and display the results (movies only)
  2. Add a movie from the search results to our nomination list
  3. View the list of films already nominated
  4. Remove a nominee from the nomination list

These are the technical requirements for the MVP:
  1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
  2. Each search result should list at least its title, year of release and a button to nominate that film.
  3. Updates to the search terms should update the result list
  4. Movies in search results can be added and removed from the nomination list.
  5. If a search result has already been nominated, disable its nominate button.
  6. Display a banner when the user has 5 nominations.

Suggested extra features include:
  1. Save nomination lists if the user leaves the page
  2. Animations for loading, adding/deleting movies, notifications
  3. Create shareable links