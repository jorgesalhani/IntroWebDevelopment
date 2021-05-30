// EXERCISE 1 - Add HOME button
let buttonHome = document.createElement('button');
buttonHome.innerHTML = 'HOME';

let body = document.getElementsByTagName('body')[0];
body.appendChild(buttonHome);

buttonHome.addEventListener('click', function () {
  location.href = 'index.html';
})

// EXERCISE 2 - Separate sentences on new lines
let pageBody = document.getElementsByTagName('body')[0];
let pageText = pageBody.getElementsByTagName('p')[0].innerHTML;

let reg = /(\.\s|\!\s|\?\s)/g;
let pageTextNoPeriod = pageText.replace(reg, '.<br>');
pageBody.getElementsByTagName('p')[0].innerHTML = pageTextNoPeriod;

// EXERCISE 3 - Count number of words and show before <heading>
let wordCount = 0;
let bagOfWords = pageText.split(' ');

while (wordCount < bagOfWords.length) {
  wordCount++;
}

let pWordCount = document.createElement('p');
pWordCount.innerHTML = "Word count: " + wordCount;

let heading = document.querySelector('body');
heading.insertBefore(pWordCount, heading.firstChild);

// EXERCISE 4 - Highlight words
reg = /(\.|\!|\?|\,|\"|\:|\;|\')/g;
let pageTextNoPunctuation = pageText.replace(reg, '');
bagOfWords = pageTextNoPunctuation.split(' ');

let eightLetterWords = [];
let sixLetterWords = [];
let fourFiveLetterWords = [];

wordCount = 0;
while (wordCount < bagOfWords.length) {
  if (bagOfWords[wordCount].length >= 8) {
    eightLetterWords.push(bagOfWords[wordCount]);
  } else if (bagOfWords[wordCount].length == 6) {
    sixLetterWords.push(bagOfWords[wordCount]);
  } else if (bagOfWords[wordCount].length == 4 || bagOfWords[wordCount].length == 5) {
    fourFiveLetterWords.push(bagOfWords[wordCount]);
  }

  wordCount++;
}

for (let i = 0; i < eightLetterWords.length; ++i) {
  document.body.getElementsByTagName('p')[1].innerHTML = document.body.getElementsByTagName('p')[1].innerHTML.replace(` ${eightLetterWords[i]} `, ` <span-red style='color:red'>${eightLetterWords[i]}</span-red> `);
}

for (let i = 0; i < sixLetterWords.length; ++i) {
  document.body.getElementsByTagName('p')[1].innerHTML = document.body.getElementsByTagName('p')[1].innerHTML.replace(` ${sixLetterWords[i]} `, ` <span-blue style='color:blue'>${sixLetterWords[i]}</span-blue> `);
}

for (let i = 0; i < fourFiveLetterWords.length; ++i) {
  document.body.getElementsByTagName('p')[1].innerHTML = document.body.getElementsByTagName('p')[1].innerHTML.replace(` ${fourFiveLetterWords[i]} `, ` <span-purple style='color:purple'>${fourFiveLetterWords[i]}</span-purple> `)
}
