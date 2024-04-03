const container = document.getElementsByClassName('container')[0];

const heading = document.querySelector('.container h3');

function setColor(name) {

  container.style.backgroundColor = name;

  if (name === 'blue') {
    heading.style.color = 'white';
  }
  else {
    heading.style.color = '';
  }
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  container.style.backgroundColor = color;

  if (color === 'black') {
    heading.style.color = 'white';
  }
  else {
    heading.style.color = '';
  }

  heading.style.color = '';
}

randomColor();