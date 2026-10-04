
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
}

function requireAuth() {
  if (!getCurrentUser()) {
    window.location.href = "index.html";
  }
}


function signup() {
  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const pass  = document.getElementById("signupPass").value;

  const errEl = document.getElementById("signup-error");

  if (!name || !email || !pass) {
    showError(errEl, "Please fill in all fields.");
    return;
  }

  if (pass.length < 6) {
    showError(errEl, "Password must be at least 6 characters.");
    return;
  }

  const users = getUsers();

  if (users[email]) {
    showError(errEl, "An account with this email already exists.");
    return;
  }

  users[email] = {
    name,
    email,
    pass,
    createdAt: new Date().toISOString(),
    workoutsCompleted: 0,
    streakDays: 0,
    lastWorkout: null,
    bmiHistory: [],
    activityLog: []   // [{date, event}]
  };

  saveUsers(users);

  // auto login after signup
  sessionLogin(users[email]);
}

/* ── login ── */
function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const pass  = document.getElementById("pass").value;
  const errEl = document.getElementById("login-error");

  // admin shortcut
  if (email === "admin123@" && pass === "admin123") {
    localStorage.setItem("currentUser", JSON.stringify({
      name: "Admin",
      email: "admin123@",
      role: "admin"
    }));
    window.location.href = "home.html";
    return;
  }

  const users = getUsers();
  const user  = users[email];

  if (!user || user.pass !== pass) {
    showError(errEl, "Incorrect email or password.");
    return;
  }

  sessionLogin(user);
}

/* ── set session and redirect ── */
function sessionLogin(user) {
  // Store session (no password)
  const session = {
    name:  user.name,
    email: user.email,
    role:  user.role || "user"
  };
  localStorage.setItem("currentUser", JSON.stringify(session));
  window.location.href = "home.html";
}

/* ── logout ── */
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

/* ── record an activity for current user ── */
function logActivity(event) {
  const session = getCurrentUser();
  if (!session || session.role === "admin") return;

  const users = getUsers();
  const user  = users[session.email];
  if (!user) return;

  user.activityLog = user.activityLog || [];
  user.activityLog.unshift({
    date: new Date().toISOString(),
    event
  });

  // keep last 60 entries
  if (user.activityLog.length > 60) user.activityLog = user.activityLog.slice(0, 60);

  saveUsers(users);
}

/* ── update a numeric user field ── */
function updateUserField(field, value) {
  const session = getCurrentUser();
  if (!session || session.role === "admin") return;

  const users = getUsers();
  const user  = users[session.email];
  if (!user) return;

  user[field] = value;
  saveUsers(users);
}

/* ── get current user's full record ── */
function getUserRecord() {
  const session = getCurrentUser();
  if (!session) return null;

  const users = getUsers();
  return users[session.email] || null;
}

/* ── show/hide error message ── */
function showError(el, msg) {
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 4000);
}

/* ── tab switching on login page ── */
function switchTab(tab) {
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));

  document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add("active");
  document.getElementById(`${tab}-form`).classList.add("active");
}