var message = '';
var quotes = [
	{
	quote:"As we begin to focus, developing more and more hunger for his Word and being in His presence, the Holy Spirit will refresh, revive, and rekindle the zeal of the Lord in our lives.",
	source: "Archbishop Gloria Grace",
	citation: "The Heartbeat of God: Salvation of Lost Souls",
	year: "2015"
	},
	{
	quote:"For God’s children, worship is as essential to spiritual well-being as food and water and staying active are to our physical health.",
	source: "Dr. Stephen A. Gammon",
	citation: "Walking With God",
	year: "2014"
	},
	{
	quote:"Improving your personal life will greatly depend on spiritual improvement and through Holy Scripture.",
	source: "Clement Getate",
	citation: "Your Cross to Happiness",
	year: "2013"
	},
	{
	quote:"Some view the spiritual quest as one of seeking wisdom, knowledge, and understanding-a learning process.",
	source: "Alice Camille",
	citation: "A Book of Grace-Filled Days",
	year: "2009"
	},
	{
	quote:"God's provision for our souls in terms of spiritual and eternal life is in Christ and him crucified.",
	source: "Brian Johnston",
	citation: "The Glory of God",
	year: "2014"
	}
];

function getRandomQuote(){
	var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randQuote;
}

function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#F';
    for (var i = 0; i < 5; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function printQuote(){
	randQuote = getRandomQuote();
	message += '<p class="quote"> ' + randQuote.quote + '</p>';
	message += '<p class="source">' + randQuote.source + ',';
		if (randQuote.citation){
			message += ' <span class="citation">' + randQuote.citation + ',</span>';
		}
		if (randQuote.year){
			message += ' <span class="year">' +  randQuote.year + '.</span>';
		}
	message += '</p>';
	document.getElementById('quote-box').innerHTML = message;
	document.body.style.backgroundColor = getRandomColor();
	

}

printQuote();