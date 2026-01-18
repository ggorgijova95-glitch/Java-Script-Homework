/*Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed*/
//first div
//change h1 text
let firstHeader = document.getElementsByTagName("h1")[0];
console.log(`Original h1 text: ${firstHeader.innerText}`);
firstHeader.innerText = "Welcome to my JS site";
console.log(`Updated h1 text: ${firstHeader.innerText}`);
//changes first paragraph text
let firstParagraph = document.getElementsByTagName("p")[0];
console.log(`Original first paragraph text: ${firstParagraph.innerText}`);
firstParagraph.innerText = "This is my JS site.";
console.log(`Updated first paragraph text: ${firstParagraph.innerText}`);
//secont div
//changes second paragraph text
let anotherDiv = document.getElementsByClassName("anotherDiv")[0];
let secondParagraph = document.getElementsByTagName("p")[1];
console.log(`Original second paragraph text: ${secondParagraph.innerText}`);
secondParagraph.innerText = "Feel free to explore and learn more about JavaScript!";
console.log(`Updated second paragraph text: ${secondParagraph.innerText}`);
//change secont child 
let text = anotherDiv.children[1];
console.log(`Original secont children text: ${text.innerText}`);
text.innerText = "Happy coding!";
console.log(`Updated secont children text: ${text.innerText}`);
//third div
//change h1 text
let thirdHeader = document.getElementsByTagName("h1")[1];
console.log(`Original third h1 text: ${thirdHeader.innerText}`);
thirdHeader.innerText = "Contact Me";
console.log(`Updated third h1 text: ${thirdHeader.innerText}`);
//change h3 text
let thirdHeaderH3 = document.getElementsByTagName("h3")[0];
console.log(`Original h3 text: ${thirdHeaderH3.innerText}`);
thirdHeaderH3.innerText = "Email:";
console.log(`Updated h3 text: ${thirdHeaderH3.innerText}`);