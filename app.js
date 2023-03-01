const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // отменяем стандартное поведение формы

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'admin' && password === '1234') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Неверное имя пользователя или пароль!');
  }
});
