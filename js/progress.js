// ─────────────────────────────────────────────
//  progress.js
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  requireAuth();

  const record = getUserRecord();
  if (!record) return;

  // Streak
  const streakEl = document.getElementById("streak");
  if (streakEl) streakEl.textContent = (record.streakDays || 0) + " Days";

  // Workouts completed
  const wcEl = document.getElementById("progressText");
  if (wcEl) wcEl.textContent = "Completed Workouts: " + (record.workoutsCompleted || 0);

  // Build 7-day activity dots
  renderWeekDots(record);

  // Recent log
  renderLog(record);
});

function renderWeekDots(record) {
  const wrap = document.getElementById("week-dots");
  if (!wrap) return;

  const log   = record.activityLog || [];
  const today = new Date();
  const days  = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  wrap.innerHTML = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    const dateStr = d.toDateString();

    const active = log.some(e => new Date(e.date).toDateString() === dateStr);
    const cls    = active ? "day-dot done" : "day-dot";
    return `<div class="${cls}">${days[d.getDay()]}</div>`;
  }).join("");
}

function renderLog(record) {
  const feed = document.getElementById("progress-log");
  if (!feed) return;

  const log = record.activityLog || [];
  if (log.length === 0) {
    feed.innerHTML = `<p style="color:#555;font-size:13px;padding:12px 0;">No activity recorded yet.</p>`;
    return;
  }

  feed.innerHTML = log.slice(0, 10).map(entry => `
    <div style="display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid #1a1a1a;">
      <i class="ti ti-activity" style="color:#ff0000;font-size:15px;margin-top:2px;"></i>
      <div>
        <div style="font-size:13px;color:#e0e0e0;">${entry.event}</div>
        <div style="font-size:11px;color:#555;margin-top:2px;">${new Date(entry.date).toLocaleString()}</div>
      </div>
    </div>
  `).join("");
}