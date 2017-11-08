'use strict';

$(document).ready (function(){
  eventListen();
  
});

// endpoint URL for "https://www.googleapis.com/youtube/v3/search"

//retreives API data
// function retrieveApiData(){
//  $.getJSON('https://www.googleapis.com/youtube/v3/search?', (data) => {
//   const query = {
//     q: $(searchTerm), //grabbed from listener  
//     part: 'snippet',
//     key: 'AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU',
  
//  }  
// });

//function to display the data
//function to append/render retreived data 

//event listener that grabs search term and returns as callback to event handler
function eventListen() {
  $('.search-form').on('submit', function(e){
    e.preventDefault();
    const searchTerm = $('.search-form').find('.search-query').val();  
    console.log(searchTerm);    
  });
}



//youtube api documentation:

//https://developers.google.com/youtube/v3/code_samples/javascript

// key AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU