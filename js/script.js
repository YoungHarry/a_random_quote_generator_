// An array of quotes//
var quotes=[

{
        quote: "If you're going through hell, keep going.",
        source: "Wintson Churchil",
},

{
      quote: "The weak can never forgive, forgiveness is the attribute of the strong",
      source: " Mahatma Ghandi"
},

{
      quote: "Faith is taking the first step even when you can't see the whole staircase",
      source: "Martin Luther King Jr.",

},

{
      quote:"It's much better to do good in a way that no one knows anything about it",
      source: "Leo Tolsoy",
      year: "1877",
      citation:"Anna Karenina",


},

{
      quote: "Memories warm you up form the inside, but they also tear you apart",
      source: "Haruki Murakami",
      year:"2002",
      citation:"Kafka on the Shore",

}

];


 /*** function getRandomQuote returns variable pickAQuote ***/
function getRandomQuote(array){
    var quoteNumber = Math.floor(Math.random()*(quotes.length));
    for(i= 0;i < array.length; i++){
        var pickAQuote = array[quoteNumber];
    }
    return pickAQuote;
  }

/*** Create the function printQuote in order to print the quote ***/
  function printQuote(){
    var answer = getRandomQuote(quotes);
    var message ="<p class = 'quote'>" + result.quote + "</p>";
    message += "<p class= 'source'>" + result.source;
    message += "<p class='citation>" + result.citation + "</span>";
    message += "<span class= 'year'>" + result.year + "</span>"
    message += "</p>";

document.getElementById('quote-box').innerHTML = message;

}

// calling the function so that it can start//
printQuote();





//printQuote function will be called//
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
