const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Проверка логина и пароля на стороне клиента
  if (username === 'user' && password === 'password') {
    window.location.href = 'user-page.html';
  } else if (username === 'admin' && password === 'adminpassword') {
    window.location.href = 'admin-page.html';
  } else {
    errorMessage.innerText = 'Неверный логин или пароль';
  }
});
