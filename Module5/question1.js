
function makeMadTalk(person, adjective, noun) {

  // Get the words that have been insert
  person = document.getElementById('person').value;
  adjective = document.getElementById('adjective').value;
  noun = document.getElementById('noun').value;

  let words = [person, adjective, noun]

  let pageBody = document.querySelector('body');
  let addedContent = document.createElement('p');

  // Insert the words at random
  addedContent.innerHTML = words[Math.floor(Math.random() * 3)] + " " +
                           words[Math.floor(Math.random() * 3)] + " " +
                           words[Math.floor(Math.random() * 3)] + " ";

  // Insert the content on the final HTML
  pageBody.appendChild(addedContent);
}

let person = document.getElementById('person').value;
let adjective = document.getElementById('adjective').value;
let noun = document.getElementById('noun').value;
let button = document.getElementById('lib-button');
button.addEventListener("click", () =>makeMadTalk(person, adjective, noun))
