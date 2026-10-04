// ─────────────────────────────────────────────
//  admin.js
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  requireAuth();

  const user = getCurrentUser();

  if (document.body.id === "adminPage") {
    if (!user || user.role !== "admin") {
      alert("Access denied.");
      window.location.href = "home.html";
      return;
    }
    loadUsers();
  }
});

function loadUsers() {
  const container = document.getElementById("usersBox");
  if (!container) return;

  const users  = getUsers();
  const keys   = Object.keys(users);

  document.getElementById("user-count").textContent = keys.length;

  if (keys.length === 0) {
    container.innerHTML = `<p style="color:#555;font-size:14px;padding:20px 0;">No registered users yet.</p>`;
    return;
  }

  container.innerHTML = keys.map(email => {
    const u       = users[email];
    const initial = (u.name || "?").charAt(0).toUpperCase();
    const joined  = u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "Unknown";
    const workouts = u.workoutsCompleted || 0;
    const streak   = u.streakDays || 0;

    return `
      <div class="admin-user-row">
        <div class="admin-user-avatar">${initial}</div>
        <div class="admin-user-info">
          <strong>${u.name}</strong>
          <span>${email}</span>
        </div>
        <div style="font-size:12px;color:#666;text-align:right;">
          <div>Joined: ${joined}</div>
          <div style="margin-top:2px;">${workouts} workouts · ${streak}d streak</div>
        </div>
        <span class="admin-user-tag">User</span>
      </div>
    `;
  }).join("");
}

function deleteUser(email) {
  if (!confirm(`Delete user "${email}"?`)) return;
  const users = getUsers();
  delete users[email];
  saveUsers(users);
  loadUsers();
}