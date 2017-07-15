// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeRandomBackgroundColor, false);
setTimeout(printQuote, 3000);
setTimeout(changeRandomBackgroundColor, 3000);

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
  html += '</p>';

  html += '<BODY onload="changeBackground("red");">';

  // print html to page
  document.getElementById('quote-box').innerHTML = html;

}

function changeRandomBackgroundColor() {
  // choose a random colour for the background
  var random_colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  document.body.style.backgroundColor = random_colour;
  document.getElementById('loadQuote').style.backgroundColor = random_colour;
}
