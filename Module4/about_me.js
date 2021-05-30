// CHALLENGE

// Get new font family
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Montserrat:400,700';
document.head.appendChild(link);

// Set font-face and font-family in head
var style = document.createElement('style');
style.appendChild(document.createTextNode('@font-face {font-family: ' + 'Montserrat' + '} body {font-family: \'Montserrat\'}'));
document.head.appendChild(style);

// Add content by ID
document.getElementById('nickname').innerHTML = 'Jorge';
document.getElementById('favorites').innerHTML = 'Fairuz (Lebanese Singer)';
document.getElementById('hometown').innerHTML = 'Sao Carlos';

// Add image
var img = document.createElement('img');
img.src = 'img/jorge-pic-profile.jpg';
document.body.appendChild(img);

style.appendChild(document.createTextNode('img {height:100px; width:100px; border-radius: 50%;}'));
document.head.appendChild(style);
