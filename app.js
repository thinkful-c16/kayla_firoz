'use strict';

$(document).ready (function(){
  eventListen();
  
  
});

// endpoint URL for "https://www.googleapis.com/youtube/v3/search"

//retreives API data
function retrieveAPIData(searchTerm){
  const query = {
    q: searchTerm, //grabbed from event istener  
    part: 'snippet',
    key: 'AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU',
    maxResults: 20
  };
  $.getJSON('https://www.googleapis.com/youtube/v3/search', query, function(data) {
    // console.log(data.items);
    //pass our callback function data from the API to the function that needs it
    displayAPIData(data);
  });
}

function displayAPIData(data) {
  //create an object to attach to html
  //map over the data recieved from the API and grab the properties we need
  const results = data.items.map(function(value, index) {
    const videoID = value.id['videoId']; 
    const medThumbURL = value.snippet.thumbnails.medium.url;
    const vidTitle = value.snippet.title;
    //return our relevant data into an object array
    return {
      videoID: videoID,
      medThumbURL: medThumbURL,
      vidTitle: vidTitle
    };
  });
  console.log(results);
  //pass our object to the template
  generateResultsTemplate(results);
}

//transforms data to html
function generateResultsTemplate(results){
  //map over the object array since it needs to be transformed
  //put the output of the array in the template dynamically
  let resultsMapped = results.map(function(item, index){
    return `
    <li class='js-item-index' data-item-index=${index}>
      <div class='js-video-title'>${item.vidTitle}</div>
      <span>${item.videoID}</span>
      <div><img src=${item.medThumbURL} alt="alt text here">
      </div>
    </li>
    `;
  });
  //pass the results to the render function
  renderTemplate(resultsMapped);
}


function renderTemplate(resultsMapped){
  //join the results into one string 
  resultsMapped.join('');
  //append the string to the DOM
  $('.search-results-ul').html(resultsMapped);
}


//event listener that grabs search term and returns as callback to event handler
function eventListen() {
  $('.search-form').on('submit', function(e){
    e.preventDefault();
    const searchTerm = $('.search-form').find('.search-query').val();  
    // console.log(searchTerm);

    //pass the value obtained from the listener to the API call
    retrieveAPIData(searchTerm);    
  });
  
}



//youtube api documentation:

//https://developers.google.com/youtube/v3/code_samples/javascript

// key AIzaSyBR1d0lPmG_VxIFD-U7iEFl20oyg5WslXU