const button = document.querySelector('button');
const id = document.querySelector('#advice-id');
const text = document.querySelector('#advice-text');

function handleClick() {
  fetch('	https://api.adviceslip.com/advice')
    .then((body) => body.json())
    .then(({ slip }) => {
      id.innerText = slip.id;
      text.innerText = slip.advice;
    })
    .catch((error) => console.error(error));

  button.style.animation = 'dice .8s ease';
  setTimeout(() => {
    button.style.animation = '';
  }, 800);
}

button.addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', () => {
  button.click();
});
