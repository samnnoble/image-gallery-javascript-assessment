const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = {
  pic1: 'Image 1',
  pic2: 'Image 2',
  pic3: 'Image 3',
  pic4: 'Image 4',
  pic5: 'Image 5'
};
/* Looping through images */
const thumbBar = document.querySelector('.thumb-bar');

imageFilenames.forEach((filename, index) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altText[`pic${index + 1}`]);
  thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  const overlay = document.querySelector('.overlay');
  if (this.getAttribute('class') === 'dark') {
    this.setAttribute('class', 'light');
    this.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    this.setAttribute('class', 'dark');
    this.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
