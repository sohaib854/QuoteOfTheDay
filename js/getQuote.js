var quotes = [{
    "quote": "Life is either a great adventure or nothing.",
    "author": "Helen Keller"
}, {
    "quote": "All you need in this life is ignorance and confidence; then success is sure.",
    "author": "Mark Twain"
}, {
    "quote": "I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
    "author": "Ann Richards"
}, {
    "quote": "The time is always right to do what is right.",
    "author": "Martin Luther King Jr."
}, {
    "quote": "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
    "author": "Reba McEntire"
}]

function randomSelector(quoteslength){
    return Math.floor(Math.random() * quoteslength );
}

function generateRandomQuote() {
    let randomNumber = randomSelector(quotes.length);
    document.getElementById('quoteText').innerHTML = '"' + quotes[randomNumber].quote + '"';
    document.getElementById('quoteAuthor').innerHTML = '— ' + quotes[randomNumber].author;
}