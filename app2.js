'use strict';

$(document).ready (function(){
  eventListen();
  
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

// //"items": [
//   {
//     "kind": "youtube#searchResult",
//     "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/h7LqypPLmSoGcvHsXnvZmFcglkE\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "0pdCW9-eiVU"
//     },

function displayAPIData(data) {
  //create an object to attach to html
  const results = data.items.map(function(value, index) {
    console.log(value['id']['videoId'], index);

    // return result[0];
  });
  // console.log(results);
  // return results;
  // items.map(items['id']['videoid'])
}

function renderResults(){
  //code
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