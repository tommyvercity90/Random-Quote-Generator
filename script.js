// Array of quote objects
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    }
];

// Get HTML elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuote");
const shareQuoteButton = document.getElementById("shareQuote");

// Store the index of the previous quote
let previousIndex = -1;

// Function to generate a random quote
function generateQuote() {
    let randomIndex;

    // Make sure the same quote isn't displayed twice consecutively
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    // Display quote and author
    quoteElement.textContent = `"${quotes[randomIndex].quote}"`;
    authorElement.textContent = `— ${quotes[randomIndex].author}`;
}

// Event listener for New Quote button
newQuoteButton.addEventListener("click", generateQuote);

// Share quote using Web Share API
shareQuoteButton.addEventListener("click", async () => {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: "Random Quote",
                text: quoteText
            });
        } catch (error) {
            console.log("Sharing cancelled.");
        }
    } else {
        // Fallback: copy quote to clipboard
        navigator.clipboard.writeText(quoteText)
            .then(() => {
                alert("Quote copied to clipboard!");
            })
            .catch(() => {
                alert("Unable to copy quote.");
            });
    }
});

// Display a quote when the page loads
generateQuote();