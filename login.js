// =========================================================
// AMAZÓN – AUTH LOGIC
// =========================================================

// Show / hide panels
function showLogin()    { toggle('loginBox', true);  toggle('registerBox', false); toggle('successBox', false); }
function showRegister() { toggle('loginBox', false); toggle('registerBox', true);  toggle('successBox', false); }
function showSuccess()  { toggle('loginBox', false); toggle('registerBox', false); toggle('successBox', true); }

function toggle(id, show) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden', !show);
}

// Clear errors
function clearErrors(...ids) {
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; });
}

function setError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

// Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── LOGIN ─────────────────────────────────────────────────
function handleLogin() {
  clearErrors('emailError', 'passwordError');

  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  let valid = true;

  if (!email)              { setError('emailError', 'Enter your email address'); valid = false; }
  else if (!isValidEmail(email)) { setError('emailError', 'Invalid email address'); valid = false; }

  if (!password)           { setError('passwordError', 'Enter your password'); valid = false; }
  else if (password.length < 6) { setError('passwordError', 'Password must be at least 6 characters'); valid = false; }

  if (!valid) return;

  // Check stored users
  const users = JSON.parse(localStorage.getItem('amazon_users') || '[]');
  const user  = users.find(u => u.email === email && u.password === password);

  if (!user && !(email === 'demo@amazon.com' && password === 'demo123')) {
    setError('passwordError', 'Incorrect email or password');
    // If no account, suggest registration
    if (!users.find(u => u.email === email)) {
      setError('emailError', 'No account found with this email. Please register.');
    }
    return;
  }

  const loggedIn = user || { name: 'Demo User', email };
  localStorage.setItem('amazon_user', JSON.stringify(loggedIn));

  document.getElementById('successMsg').textContent = `Welcome back, ${loggedIn.name || 'User'}!`;
  showSuccess();
}

// ── REGISTER ──────────────────────────────────────────────
function handleRegister() {
  clearErrors('nameError', 'regEmailError', 'regPasswordError', 'regConfirmError');

  const name     = document.getElementById('regName').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm  = document.getElementById('regConfirm').value;
  let valid = true;

  if (!name)     { setError('nameError', 'Enter your name'); valid = false; }

  if (!email)            { setError('regEmailError', 'Enter your email address'); valid = false; }
  else if (!isValidEmail(email)) { setError('regEmailError', 'Invalid email address'); valid = false; }

  if (!password)         { setError('regPasswordError', 'Enter a password'); valid = false; }
  else if (password.length < 6) { setError('regPasswordError', 'At least 6 characters required'); valid = false; }

  if (!confirm)          { setError('regConfirmError', 'Re-enter your password'); valid = false; }
  else if (password !== confirm) { setError('regConfirmError', 'Passwords do not match'); valid = false; }

  if (!valid) return;

  // Check duplicate email
  const users = JSON.parse(localStorage.getItem('amazon_users') || '[]');
  if (users.find(u => u.email === email)) {
    setError('regEmailError', 'An account already exists with this email');
    return;
  }

  // Save new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('amazon_users', JSON.stringify(users));
  localStorage.setItem('amazon_user', JSON.stringify(newUser));

  document.getElementById('successMsg').textContent = `Account created! Welcome, ${name}!`;
  showSuccess();
}

// ── TOGGLE PASSWORD VISIBILITY ────────────────────────────
function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = 'Hide';
  } else {
    input.type = 'password';
    btn.textContent = 'Show';
  }
}

// ── ENTER KEY SUPPORT ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (!document.getElementById('loginBox').classList.contains('hidden')) {
    handleLogin();
  } else if (!document.getElementById('registerBox').classList.contains('hidden')) {
    handleRegister();
  }
});

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // If already logged in, show success
  const user = localStorage.getItem('amazon_user');
  if (user) {
    const parsed = JSON.parse(user);
    document.getElementById('successMsg').textContent = `You're already signed in as ${parsed.name || parsed.email}.`;
    showSuccess();
  } else {
    showLogin();
  }

  // Demo credentials hint
  const hint = document.createElement('p');
  hint.style.cssText = 'text-align:center;font-size:11px;color:#888;margin-top:8px';
  hint.innerHTML = 'Demo: <strong>demo@amazon.com</strong> / <strong>demo123</strong>';
  const loginBox = document.getElementById('loginBox');
  if (loginBox) loginBox.appendChild(hint);
});