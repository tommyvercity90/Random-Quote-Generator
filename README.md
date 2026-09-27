# 🎯 Random Quote Generator

A simple and interactive **Random Quote Generator** built using **HTML5, CSS3, and JavaScript**.

The application displays a random inspirational quote along with its author whenever the user clicks the **New Quote** button. It also prevents the same quote from appearing twice consecutively.

## 📌 Description

The Random Quote Generator is a beginner-friendly web development project designed to practice:

* JavaScript arrays
* Objects
* Random number generation
* Event handling
* DOM manipulation
* Basic responsive CSS
* Browser Web Share API

## ✨ Features

* 🎲 Generate a random quote
* 👤 Display the quote's author
* 🔄 Avoid displaying the same quote twice consecutively
* 📱 Responsive design for mobile and desktop
* 📤 Share the current quote
* 📋 Copy the quote to the clipboard when sharing is unavailable
* 💡 Contains more than 10 quotes

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript** – Functionality, random quotes, events, and DOM manipulation

## 📂 Project Structure

```text
random-quote-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone or download the project

Download the project files to your computer.

### 2. Open the project folder

Navigate to the project directory:

```text
random-quote-generator
```

### 3. Run the application

Open the `index.html` file in any modern web browser.

You can also use **VS Code with the Live Server extension** to run the project.

## 🧠 How It Works

The quotes are stored as objects inside a JavaScript array:

```javascript
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];
```

When the **New Quote** button is clicked, JavaScript generates a random array index using:

```javascript
Math.floor(Math.random() * quotes.length);
```

The selected quote and author are then displayed using DOM manipulation:

```javascript
quoteElement.textContent = `"${quotes[randomIndex].quote}"`;
authorElement.textContent = `— ${quotes[randomIndex].author}`;
```

### 🔄 Preventing Duplicate Quotes

The application stores the index of the previously displayed quote and generates another random number if the new index is the same:

```javascript
do {
    randomIndex = Math.floor(Math.random() * quotes.length);
} while (randomIndex === previousIndex);
```

This prevents the same quote from appearing twice consecutively.

## 📤 Share Feature

The **Share** button uses the browser's Web Share API when it is supported:

```javascript
navigator.share({
    title: "Random Quote",
    text: quoteText
});
```

If the Web Share API isn't available, the application attempts to copy the quote to the clipboard.

## 📱 Responsive Design

The application includes a responsive layout so that it works on:

* 💻 Desktop computers
* 💻 Laptops
* 📱 Mobile phones
* 📱 Tablets

## 🎯 Learning Objectives

This project helps beginners understand:

1. How to create and work with JavaScript arrays
2. How to store related data using objects
3. How `Math.random()` works
4. How to handle button click events
5. How to manipulate HTML elements using JavaScript
6. How to create a responsive user interface
7. How to use browser APIs such as Web Share and Clipboard

## 🔮 Future Improvements

Possible improvements include:

* Add hundreds of quotes
* Add quote categories
* Add a dark mode
* Add favorite/bookmark functionality
* Add animations when changing quotes
* Add a quote search feature
* Fetch quotes from an API
* Add social media sharing buttons
* Store favorite quotes using Local Storage

## 📄 License

This project is created for **educational and practice purposes**. You are free to modify and improve it for your own learning.
