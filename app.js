'use strict';

$(document).ready (function(){
  eventListen();
  listenForSearchTerm();
});

// endpoint URL for "https://www.googleapis.com/youtube/v3/search"

//const youtubeURL = 'https://www.googleapis.com/youtube/v3/search';

// function retrieveApiData(){
//  $.getJSON('https://www.googleapis.com/youtube/v3/search?', (data) => {
//   const query = {
//     q: $(searchTerm), //grabbed from listener  
//     part: 'snippet',
//     key: 'AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU',
  
//  }  
// });


//function that tells us what to search for (construct query object)
//function to render results to results <div>

//event listener that grabs search term and returns as callback to event handler
function eventListen() {
  $('.search-button').on('click', function(e){
    e.preventDefault();
    
    
  });
}
//event handler grabs search term and passes it to function to display the result

function listenForSearchTerm(){
  $('.search-query').on('submit', function(e){
    e.preventDefault();
    const searchTerm = $('.search-query').val();  
    console.log(searchTerm);
    
  });
}



//youtube api documentation:

//https://developers.google.com/youtube/v3/code_samples/javascript

// key AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU