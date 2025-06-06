// Open modal
const modal = document.getElementById('loginModal');
const openBtn = document.querySelector('.nav-signin');
const closeBtn = document.querySelector('.close');
const loginBtn = document.getElementById('loginBtn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

loginBtn.addEventListener('click', () => {
  const name = document.getElementById('usernameInput').value;
  if (name) {
    document.querySelector('.nav-signin').innerHTML = `
      <p><span>Hello, ${name}</span></p>
      <p class="nav-second">Account & Lists</p>
    `;
    modal.style.display = 'none';
  }
});
