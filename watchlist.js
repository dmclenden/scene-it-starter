document.addEventListener('DOMContentLoaded', function() {
function displayMovie(savedMovie) {
    var watchlistHTML = savedMovie.map(function(watchlistMovie){
        return `
        <div class="movie">
                               <div class="card" style="width: 18rem;">
                                     <img class="card-img-top" src="${watchlistMovie.Poster}" alt="Card image cap">
                                      <div class="card-body">
                                          <h5 class="card-title">${watchlistMovie.Title} <span class="badge badge-secondary">${watchlistMovie.Year}</span></h5>
                                          <p class="card-text"> </p>
                                        
                                       </div>
                                      <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${watchlistMovie.imdbID}')">ADD</a>
                               </div>
            </div>
        `
    })
    return watchlistHTML.join('');


}
var content = document.getElementById('movies-container');
         content.innerHTML = displayMovie(savedMovie);
})
