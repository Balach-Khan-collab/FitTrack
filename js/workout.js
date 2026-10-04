// ─────────────────────────────────────────────
//  workout.js
// ─────────────────────────────────────────────

const workoutData = {
  beginner: {
    Monday:    { focus: "Chest & Biceps", exercises: [
      { name: "Flat dumbbell press",        sets: "3", reps: "10" },
      { name: "Incline dumbbell press",     sets: "3", reps: "10" },
      { name: "Pec deck / machine fly",     sets: "2", reps: "12" },
      { name: "Dumbbell curl",              sets: "3", reps: "10" },
      { name: "Hammer curl",                sets: "2", reps: "12" }
    ]},
    Tuesday:   { focus: "Back & Shoulders", exercises: [
      { name: "Lat pulldown",               sets: "3", reps: "10" },
      { name: "Seated cable row",           sets: "3", reps: "10" },
      { name: "Dumbbell shoulder press",    sets: "3", reps: "10" },
      { name: "Lateral raise",              sets: "2", reps: "12" },
      { name: "Face pulls",                 sets: "2", reps: "15" }
    ]},
    Wednesday: { focus: "Legs & Triceps", exercises: [
      { name: "Goblet squat",               sets: "3", reps: "10" },
      { name: "Leg press",                  sets: "3", reps: "12" },
      { name: "Leg extension",              sets: "2", reps: "12" },
      { name: "Lying leg curl",             sets: "2", reps: "12" },
      { name: "Rope pushdown",              sets: "3", reps: "12" }
    ]},
    Thursday:  { focus: "Chest & Biceps", exercises: [
      { name: "Machine chest press",        sets: "3", reps: "10" },
      { name: "Dumbbell fly",               sets: "2", reps: "12" },
      { name: "Cable crossover",            sets: "2", reps: "12" },
      { name: "EZ-bar curl",               sets: "3", reps: "10" },
      { name: "Concentration curl",         sets: "2", reps: "12" }
    ]},
    Friday:    { focus: "Back & Shoulders", exercises: [
      { name: "Wide-grip lat pulldown",     sets: "3", reps: "10" },
      { name: "Single-arm dumbbell row",    sets: "3", reps: "10" },
      { name: "Arnold press",               sets: "3", reps: "10" },
      { name: "Cable lateral raise",        sets: "2", reps: "12" },
      { name: "Rear delt fly",              sets: "2", reps: "12" }
    ]},
    Saturday:  { focus: "Legs & Triceps", exercises: [
      { name: "Walking lunges",             sets: "3", reps: "10 each" },
      { name: "Leg press",                  sets: "3", reps: "12" },
      { name: "Seated calf raise",          sets: "3", reps: "15" },
      { name: "Overhead DB tricep ext.",    sets: "3", reps: "12" },
      { name: "Diamond push-ups",           sets: "2", reps: "to failure" }
    ]},
    Sunday:    { focus: "Rest & Recovery", exercises: [] }
  },
  moderate: {
    Monday:    { focus: "Chest & Biceps", exercises: [
      { name: "Barbell flat bench press",   sets: "4", reps: "8" },
      { name: "Incline dumbbell press",     sets: "3", reps: "10" },
      { name: "Cable fly (low to high)",    sets: "3", reps: "12" },
      { name: "Pec deck",                   sets: "2", reps: "12" },
      { name: "Barbell curl",               sets: "4", reps: "10" },
      { name: "Incline dumbbell curl",      sets: "3", reps: "10" },
      { name: "Cable hammer curl",          sets: "2", reps: "12" }
    ]},
    Tuesday:   { focus: "Back & Shoulders", exercises: [
      { name: "Bent-over barbell row",      sets: "4", reps: "8" },
      { name: "Lat pulldown",               sets: "4", reps: "10" },
      { name: "Seated cable row",           sets: "3", reps: "10" },
      { name: "Straight-arm pulldown",      sets: "2", reps: "15" },
      { name: "Seated DB shoulder press",   sets: "4", reps: "10" },
      { name: "Lateral raise",              sets: "3", reps: "12" },
      { name: "Face pulls",                 sets: "3", reps: "15" }
    ]},
    Wednesday: { focus: "Legs & Triceps", exercises: [
      { name: "Barbell back squat",         sets: "4", reps: "8" },
      { name: "Romanian deadlift",          sets: "4", reps: "10" },
      { name: "Leg press",                  sets: "3", reps: "12" },
      { name: "Leg extension",              sets: "3", reps: "12" },
      { name: "Lying leg curl",             sets: "3", reps: "12" },
      { name: "Seated calf raise",          sets: "3", reps: "15" },
      { name: "Skull crusher",              sets: "3", reps: "10" },
      { name: "Rope pushdown",              sets: "3", reps: "12" }
    ]},
    Thursday:  { focus: "Chest & Biceps", exercises: [
      { name: "Incline barbell press",      sets: "4", reps: "8" },
      { name: "Flat dumbbell press",        sets: "3", reps: "10" },
      { name: "Decline barbell press",      sets: "3", reps: "10" },
      { name: "Cable crossover",            sets: "3", reps: "12" },
      { name: "EZ-bar curl",               sets: "4", reps: "10" },
      { name: "Preacher curl",              sets: "3", reps: "10" },
      { name: "Concentration curl",         sets: "2", reps: "12" }
    ]},
    Friday:    { focus: "Back & Shoulders", exercises: [
      { name: "T-bar row",                  sets: "4", reps: "8" },
      { name: "Wide-grip lat pulldown",     sets: "4", reps: "10" },
      { name: "Close-grip cable row",       sets: "3", reps: "10" },
      { name: "Shrugs",                     sets: "3", reps: "12" },
      { name: "Arnold press",               sets: "4", reps: "10" },
      { name: "Cable lateral raise",        sets: "3", reps: "12" },
      { name: "Rear delt cable fly",        sets: "3", reps: "15" }
    ]},
    Saturday:  { focus: "Legs & Triceps", exercises: [
      { name: "Hack squat",                 sets: "4", reps: "10" },
      { name: "Stiff-leg deadlift",         sets: "4", reps: "10" },
      { name: "Walking lunges",             sets: "3", reps: "12 each" },
      { name: "Leg extension",              sets: "3", reps: "15" },
      { name: "Seated leg curl",            sets: "3", reps: "12" },
      { name: "Standing calf raise",        sets: "4", reps: "15" },
      { name: "Weighted dips",              sets: "3", reps: "10" },
      { name: "Overhead cable ext.",        sets: "3", reps: "12" }
    ]},
    Sunday:    { focus: "Rest & Recovery", exercises: [] }
  },
  advanced: {
    Monday:    { focus: "Chest & Biceps", exercises: [
      { name: "Barbell flat bench press",   sets: "5", reps: "5" },
      { name: "Incline barbell press",      sets: "4", reps: "6-8" },
      { name: "Weighted dips",              sets: "3", reps: "8" },
      { name: "Cable fly (low to high)",    sets: "3", reps: "12" },
      { name: "Pec deck – drop set",        sets: "3", reps: "10+drop" },
      { name: "Barbell curl",               sets: "4", reps: "6-8" },
      { name: "Incline dumbbell curl",      sets: "3", reps: "10" },
      { name: "Cable hammer curl",          sets: "3", reps: "12" },
      { name: "Reverse EZ-bar curl",        sets: "2", reps: "12" }
    ]},
    Tuesday:   { focus: "Back & Shoulders", exercises: [
      { name: "Deadlift",                   sets: "5", reps: "5" },
      { name: "Bent-over barbell row",      sets: "4", reps: "6-8" },
      { name: "Weighted pull-up",           sets: "4", reps: "8" },
      { name: "Seated cable row",           sets: "3", reps: "10" },
      { name: "Single-arm DB row",          sets: "3", reps: "12 each" },
      { name: "Straight-arm pulldown",      sets: "3", reps: "15" },
      { name: "Seated DB press",            sets: "4", reps: "8" },
      { name: "Lateral raise",              sets: "4", reps: "12" },
      { name: "Face pulls",                 sets: "3", reps: "15" },
      { name: "Rear delt fly",              sets: "3", reps: "12" }
    ]},
    Wednesday: { focus: "Legs & Triceps", exercises: [
      { name: "Barbell back squat",         sets: "5", reps: "5" },
      { name: "Romanian deadlift",          sets: "4", reps: "8" },
      { name: "Leg press",                  sets: "4", reps: "10" },
      { name: "Bulgarian split squat",      sets: "3", reps: "10 each" },
      { name: "Leg extension – drop set",   sets: "3", reps: "12+drop" },
      { name: "Lying leg curl",             sets: "4", reps: "10" },
      { name: "Standing calf raise",        sets: "4", reps: "15" },
      { name: "Seated calf raise",          sets: "3", reps: "20" },
      { name: "Close-grip bench press",     sets: "4", reps: "8" },
      { name: "Skull crusher",              sets: "3", reps: "10" },
      { name: "Rope pushdown",              sets: "3", reps: "12" },
      { name: "Overhead DB ext.",           sets: "2", reps: "12" }
    ]},
    Thursday:  { focus: "Chest & Biceps", exercises: [
      { name: "Incline barbell press",      sets: "5", reps: "5" },
      { name: "Flat dumbbell press",        sets: "4", reps: "8" },
      { name: "Decline barbell press",      sets: "3", reps: "8" },
      { name: "Dumbbell fly",               sets: "3", reps: "12" },
      { name: "Cable crossover (hi-lo)",    sets: "3", reps: "12" },
      { name: "EZ-bar curl",               sets: "4", reps: "8" },
      { name: "Preacher curl",              sets: "3", reps: "10" },
      { name: "Spider curl",                sets: "3", reps: "12" },
      { name: "Concentration curl",         sets: "2", reps: "12 each" }
    ]},
    Friday:    { focus: "Back & Shoulders", exercises: [
      { name: "Rack pulls",                 sets: "4", reps: "5" },
      { name: "T-bar row",                  sets: "4", reps: "8" },
      { name: "Wide-grip lat pulldown",     sets: "4", reps: "8" },
      { name: "Close-grip cable row",       sets: "3", reps: "10" },
      { name: "Dumbbell pullover",          sets: "3", reps: "12" },
      { name: "Barbell shrugs",             sets: "4", reps: "12" },
      { name: "Arnold press",               sets: "4", reps: "8" },
      { name: "Cable lateral raise",        sets: "4", reps: "12" },
      { name: "Upright row",                sets: "3", reps: "10" },
      { name: "Rear delt cable fly",        sets: "3", reps: "15" }
    ]},
    Saturday:  { focus: "Legs & Triceps", exercises: [
      { name: "Front squat",                sets: "4", reps: "6" },
      { name: "Stiff-leg deadlift",         sets: "4", reps: "8" },
      { name: "Walking lunges (weighted)",  sets: "4", reps: "12 each" },
      { name: "Leg press (high feet)",      sets: "3", reps: "12" },
      { name: "Leg extension",              sets: "3", reps: "15" },
      { name: "Seated leg curl",            sets: "3", reps: "12" },
      { name: "Calf press (leg machine)",   sets: "4", reps: "15" },
      { name: "Tibialis raise",             sets: "3", reps: "20" },
      { name: "Weighted dips",              sets: "4", reps: "8" },
      { name: "Straight-bar pushdown",      sets: "3", reps: "12" },
      { name: "Single-arm overhead ext.",   sets: "3", reps: "12 each" },
      { name: "Diamond push-ups",           sets: "2", reps: "to failure" }
    ]},
    Sunday:    { focus: "Rest & Recovery", exercises: [] }
  }
};

const DAY_KEYS   = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let currentLevel = null;
let doneMap      = {};
let dayDone      = {};

document.addEventListener("DOMContentLoaded", () => {
  requireAuth();
});

function focusTag(focus) {
  if (focus.includes("Chest")) return "tag-chest";
  if (focus.includes("Back"))  return "tag-back";
  if (focus.includes("Legs"))  return "tag-legs";
  return "tag-rest";
}

function renderTabs() {
  const nav = document.getElementById("wk-tabs");
  nav.innerHTML = DAY_KEYS.map(day => {
    const dayData = workoutData[currentLevel][day];
    const isRest  = dayData.exercises.length === 0;
    const isDone  = dayDone[day];
    let cls = "wk-tab-btn";
    if (isRest) cls += " wk-tab-rest";
    if (isDone) cls += " wk-tab-done";
    return `<button class="${cls}" onclick="showDay('${day}')" id="tab-${day}">
      ${day.slice(0,3)}${isDone ? ' <i class="ti ti-check"></i>' : ''}
    </button>`;
  }).join("");
}

function showDay(day) {
  document.querySelectorAll(".wk-tab-btn").forEach(b => b.classList.remove("wk-tab-active"));
  const tabEl = document.getElementById("tab-" + day);
  if (tabEl) tabEl.classList.add("wk-tab-active");

  const dayData = workoutData[currentLevel][day];
  const box     = document.getElementById("wk-day-content");

  if (dayData.exercises.length === 0) {
    box.innerHTML = `
      <div class="wk-rest-card">
        <i class="ti ti-moon-stars wk-rest-icon"></i>
        <h3>Rest & Recovery</h3>
        <p>No training today. Sleep well, eat right, stay hydrated — growth happens here.</p>
      </div>`;
    return;
  }

  if (!doneMap[day]) doneMap[day] = {};

  const total     = dayData.exercises.length;
  const doneCount = Object.keys(doneMap[day]).length;
  const pct       = Math.round((doneCount / total) * 100);
  const allDone   = dayDone[day];

  const rows = dayData.exercises.map((ex, i) => {
    const done = doneMap[day][i];
    return `
      <div class="wk-ex-row ${done ? "wk-ex-done" : ""}">
        <div class="wk-ex-info">
          <span class="wk-ex-name">${ex.name}</span>
          <span class="wk-ex-meta">${ex.sets} sets &times; ${ex.reps} reps</span>
        </div>
        ${done
          ? `<span class="wk-done-badge"><i class="ti ti-check"></i> Done</span>`
          : `<button class="wk-done-btn" onclick="markDone('${day}',${i})">Done</button>`
        }
      </div>`;
  }).join("");

  box.innerHTML = `
    <div class="wk-day-header">
      <span class="wk-day-title">${day}</span>
      <span class="wk-focus-tag ${focusTag(dayData.focus)}">${dayData.focus}</span>
    </div>
    <div class="wk-progress-wrap">
      <div class="wk-progress-bar">
        <div class="wk-progress-fill" style="width:${pct}%"></div>
      </div>
      <span class="wk-progress-label">${doneCount}/${total}</span>
    </div>
    <div class="wk-ex-list">${rows}</div>
    ${allDone ? `<div class="wk-day-complete"><i class="ti ti-trophy"></i> Workout complete! Great work.</div>` : ""}
  `;
}

function markDone(day, index) {
  if (!doneMap[day]) doneMap[day] = {};
  doneMap[day][index] = true;

  const total = workoutData[currentLevel][day].exercises.length;
  const done  = Object.keys(doneMap[day]).length;

  if (done === total) {
    dayDone[day] = true;
    renderTabs();

    // Save to user record
    const session = getCurrentUser();
    if (session && session.role !== "admin") {
      const users = getUsers();
      const user  = users[session.email];
      if (user) {
        user.workoutsCompleted = (user.workoutsCompleted || 0) + 1;
        user.lastWorkout = new Date().toISOString();

        // streak logic
        const lastDate = user.lastWorkout ? new Date(user.lastWorkout) : null;
        const today    = new Date();
        if (!lastDate || isNewDay(lastDate, today)) {
          user.streakDays = (user.streakDays || 0) + 1;
        }

        saveUsers(users);
      }
      logActivity(`Completed ${day} ${currentLevel} workout (${workoutData[currentLevel][day].focus})`);
    }
  }

  showDay(day);

  const tabEl = document.getElementById("tab-" + day);
  if (tabEl) tabEl.classList.add("wk-tab-active");
}

function isNewDay(last, now) {
  return last.toDateString() !== now.toDateString();
}

function startWorkout(level) {
  currentLevel = level;
  doneMap      = {};
  dayDone      = {};

  document.getElementById("wk-level-select").style.display = "none";
  document.getElementById("wk-panel").style.display        = "block";

  document.getElementById("wk-level-title").textContent =
    level.charAt(0).toUpperCase() + level.slice(1) + " Plan";

  logActivity(`Started ${level} workout plan`);

  renderTabs();
  showDay("Monday");
}

function backToLevels() {
  document.getElementById("wk-panel").style.display        = "none";
  document.getElementById("wk-level-select").style.display = "flex";
}