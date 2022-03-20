const quotes = [
	{
		quote: "That which does not kill us makes us stronger.",
		author: "Friedrich Nietzsche",
	},
	{
		quote: "The journey of a thousand miles begins with one step.",
		author: "Lao Tzu",
	},
	{
		quote: "Life is what happens when you’re busy making other plans.",
		author: "John Lennon",
	},
	{
		quote: "The way to get started is to quit talking and begin doing. ",
		author: "Walt Disney",
	},
	{
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
		author: "Mahatma Gandhi",
	},
	{
		quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
		author: "Bernard M. Baruch",
	},
	{
		quote: "We must not allow other people’s limited perceptions to define us.",
		author: "Virginia Satir",
	},
	{
		quote: "Do what you can, with what you have, where you are.",
		author: "Theodore Roosevelt",
	},
	{
		quote: "This above all: to thine own self be true.",
		author: "William Shakespeare",
	},
	{
		quote: "If you cannot do great things, do small things in a great way.",
		author: "Napoleon Hill",
	},
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;