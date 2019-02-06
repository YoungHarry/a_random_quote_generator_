// An array of quotes//
//quotes mostly from authors//

var quotes=[

{
        quote: "It's no use going back to yesterday, because I was a different person then.",
        source: "Lewis Carroll",
        year:"1865",
        citation:"Lewis Carroll"
},

{
      quote: "Travel far enough, you'll meet yourself.",
      source: "David Mitchell",
      year:"2004",
      citation:"Cloud Atlas"
},

{
      quote: "There is some good in this world, and it's worth fighting for.",
      source: "J.R.R. Tolken",
      year: "1954",
      citation: "The Two Towers"
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
      year: "2002",
      citation: "Kafka on the Shore",

}
];

 //  created function getRandomQuote to choose a random quote//
 // returns pickAQuote so that it can be called on later//
function getRandomQuote(array){
    var quoteNumber = Math.floor(Math.random()*(quotes.length));
    for(i= 0;i < array.length; i++){
        var pickAQuote = array[quoteNumber];
    }
    return pickAQuote;
  }

// Create the function printQuote in order to print the quote //
  function printQuote(){
    var answer = getRandomQuote(quotes);
    var message = "<span class = ' quote'>" + answer.quote + "</span>";
        message += "<span class= ' source'>" + answer.source+"</span>";
          message += "<span class=' citation'>" + answer.citation + "</span>";
          message += "<span class= ' year'>" + answer.year + "</span>";


document.getElementById('quote-box').innerHTML = message;

}

// calling the function so that it can start//
printQuote();
//printQuote function will be called//
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
