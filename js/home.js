

document.addEventListener("DOMContentLoaded", () => {
  requireAuth();

  const session = getCurrentUser();
  const record  = getUserRecord();

  // Welcome name
  const welcomeEl = document.getElementById("welcome");
  if (welcomeEl) welcomeEl.textContent = "Welcome back, " + session.name;

  // Stats
  if (record) {
    setInner("stat-workouts",  record.workoutsCompleted || 0);
    setInner("stat-streak",    record.streakDays || 0);
    setInner("stat-bmi",       record.bmiHistory?.length
      ? record.bmiHistory[record.bmiHistory.length - 1].value.toFixed(1)
      : "—");

    // Recent activity
    const feed = document.getElementById("activity-feed");
    if (feed) {
      const log = record.activityLog || [];
      if (log.length === 0) {
        feed.innerHTML = `<p style="color:#555;font-size:13px;padding:12px 0;">No activity yet — start a workout!</p>`;
      } else {
        feed.innerHTML = log.slice(0, 6).map(entry => `
          <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #1a1a1a;">
            <i class="ti ti-circle-check" style="color:#ff0000;font-size:16px;"></i>
            <div>
              <div style="font-size:13px;color:#e0e0e0;">${entry.event}</div>
              <div style="font-size:11px;color:#555;">${timeAgo(entry.date)}</div>
            </div>
          </div>
        `).join("");
      }
    }
  }
});

function setInner(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1)   return "Just now";
  if (mins < 60)  return mins + "m ago";
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return hrs + "h ago";
  return Math.floor(hrs / 24) + "d ago";
}