// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomQuote(){
  /* function selects a random quote from quotes array
  output: returns randomly selected quotes object
  */
  var random_int = parseInt(Math.random() * (quotes.length));
  return quotes[random_int];
}

function printQuote(){
  // function calls the getRandomQuote function and stores the returned quote object in a variable
  var random_quote = getRandomQuote();

  // constructs a string containing the different properties of the quote object
  var html = '<p class="quote">' + random_quote.quote + '</p>' + '<p class="source">' + random_quote.source;
  if (random_quote.citation !== undefined){
    html += '<span class="citation">' + random_quote.citation + '</span>';
  }
  if (random_quote.year !== undefined){
    html += '<span class="year">' + random_quote.year + '</span>';
  }
  </p>

  // print html to page
  document.getElementById('quote-box').innerHTML = html;

}
