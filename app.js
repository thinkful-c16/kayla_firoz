'use strict';

$(document).ready (function(){
  eventListen();
  displayAPIData();
  
});

// endpoint URL for "https://www.googleapis.com/youtube/v3/search"

//retreives API data
function retrieveAPIData(searchTerm){
  const query = {
    q: searchTerm, //grabbed from listener  
    part: 'snippet',
    key: 'AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU',
  };
  //how does data know to pass in display results 
  $.getJSON('https://www.googleapis.com/youtube/v3/search', query, function(data) {
    // console.log(data.items);
   displayAPIData(data);
  });
}

function displayAPIData(data) {
  const results = data.items;

}


//function to append/render retreived data 

//event listener that grabs search term and returns as callback to event handler
function eventListen() {
  $('.search-form').on('submit', function(e){
    e.preventDefault();
    const searchTerm = $('.search-form').find('.search-query').val();  
    // console.log(searchTerm);
    retrieveAPIData(searchTerm);    
  });
  
}



//youtube api documentation:

//https://developers.google.com/youtube/v3/code_samples/javascript

// key AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU