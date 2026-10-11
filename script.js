// 1. THEME TOGGLE
const html = document.documentElement;
const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    btn.textContent = '🌙';
  } else {
    html.dataset.theme = 'dark';
    btn.textContent = '☀️';
  }
});


// 2. FORM VALIDATION
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // clear old messages
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';
  status.textContent = '';

  let ok = true;

  // empty name
  if (name === '') {
    document.getElementById('name-error').textContent = 'Please enter your name.';
    ok = false;
  }

  // empty email
  if (email === '') {
    document.getElementById('email-error').textContent = 'Please enter your email.';
    ok = false;
  }
  // malformed email
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('email-error').textContent =
      'Email must look like name@example.com';
    ok = false;
  }

  // empty message
  if (message === '') {
    document.getElementById('message-error').textContent = 'Please write a message.';
    ok = false;
  }

  // success
  if (ok) {
    status.textContent = 'Thank you! Your message was sent.';
    form.reset();
  }
});