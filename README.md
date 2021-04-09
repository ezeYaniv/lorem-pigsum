# Lorem Pigsum 🐖🏛️🏺🗡️

### The Pig Latin Lorem Ipsum generator

## Introduction
This app generates placeholder text for print and electronic typesetting, with a porcine twist: it's all Pig Latin! ([What is Pig Latin?](https://en.wikipedia.org/wiki/Pig_Latin)) Vale Lorem Ipsum, salve Lorem Pigsum.

---

## Usage
&emsp;📜 Select from the text options available (# of paragraphs, paragraph length)

&emsp;📜 Generate your oremLay igsumPay

&emsp;📜 Copy it to your clipboard with a click of a button!

🐖 The final version of Lorem Pigsum can be accessed at https://lorem-pigsum.herokuapp.com/

📱 Yes, I'm mobile responsive!

---

## Under the Hood
### Technologies Applied & Skills Learned
* Node.js & Express
* EJS templating
* SCSS styling
* Mobile-first design
* Custom API calls

### Summary
In this project, I used Express to handle GET and POST routes and dynamically rendered results with EJS scripting. The app creates a custom API based on user input and displays returned data to the user. I designed the site with a mobile-first approach to practice modern responsive design in a mobile-first world. Finally, I implemented version control using command-line Git.

### How It Works
1. The homepage contains an HTML form with custom options for text length and paragraph size.
2. When user submits the form, the app takes those options and makes an API call to loripsum.net (a free Lorem Ipsum text generator)
3. The app calls a custom function I created (pigify.js) to take regular text and transform it into Pig Latin
4. The site displays the returned Lorem Pigsum text to the user, with a Copy to Clipboard button

### Known Issues & Bugs
Issues can be found in this repo's [Issues](https://github.com/ezeYaniv/kitchen-calc/issues) tab.

---

## Screenshots

---

## Links
* [The Lorem Pigsum app (hosted on Heroku)](https://lorem-pigsum.herokuapp.com/)
