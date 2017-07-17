// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeRandomBackgroundColor, false);

// changes quote every 10 seconds
setInterval(printQuote, 10000);
setInterval(changeRandomBackgroundColor, 10000);

var quotes_list = [];

function getRandomQuote(){
  /* function selects a random quote from quotes array
  output: returns randomly selected quotes object
  */
  var random_int = parseInt(Math.random() * (quotes.length));
  var random_quote = quotes[random_int];

  // reset cache of quotes if all quotes have been repeated
  if (quotes_list.length === quotes.length){
    quotes_list = [];
  }
  // Check if the quote has already been shown, if it has, create a new one
  while (quotes_list.includes(random_quote)) {
    random_int = parseInt(Math.random() * (quotes.length));
    random_quote = quotes[random_int];
  }

  quotes_list.push(random_quote);
  console.log(random_quote);
  console.log(quotes_list.length)
  return random_quote;
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
