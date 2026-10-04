// ─────────────────────────────────────────────
//  bmi.js
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  requireAuth();

  // Show history
  renderBMIHistory();
});

function calcBMI() {
  const w = parseFloat(document.getElementById("weight").value);
  const hCm = parseFloat(document.getElementById("height").value);
  const errEl = document.getElementById("bmi-error");

  if (!w || !hCm || w <= 0 || hCm <= 0) {
    showError(errEl, "Please enter valid weight and height.");
    return;
  }

  const h   = hCm / 100;
  const bmi = w / (h * h);

  const { category, color, advice } = bmiCategory(bmi);

  // display
  document.getElementById("bmiResult").classList.add("visible");
  document.getElementById("bmi-number").textContent   = bmi.toFixed(1);
  document.getElementById("bmi-category").textContent = category;
  document.getElementById("bmi-advice").textContent   = advice;
  document.getElementById("bmi-number").style.color   = color;

  // save to user record
  const session = getCurrentUser();
  if (session && session.role !== "admin") {
    const users = getUsers();
    const user  = users[session.email];
    if (user) {
      user.bmiHistory = user.bmiHistory || [];
      user.bmiHistory.push({ value: bmi, date: new Date().toISOString() });
      if (user.bmiHistory.length > 20) user.bmiHistory = user.bmiHistory.slice(-20);
      saveUsers(users);
    }
    logActivity(`BMI recorded: ${bmi.toFixed(1)} (${category})`);
  }

  renderBMIHistory();
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return { category: "Underweight", color: "#60a5fa", advice: "Consider increasing caloric intake and strength training." };
  if (bmi < 25)   return { category: "Normal weight", color: "#22c55e", advice: "You're in a healthy range. Keep it up!" };
  if (bmi < 30)   return { category: "Overweight", color: "#fbbf24", advice: "Light cardio and a balanced diet can help." };
  return           { category: "Obese", color: "#ff0000", advice: "Consult a healthcare professional for a personalised plan." };
}

function renderBMIHistory() {
  const listEl = document.getElementById("bmi-history");
  if (!listEl) return;

  const record = getUserRecord();
  const hist   = record?.bmiHistory || [];

  if (hist.length === 0) {
    listEl.innerHTML = `<p style="color:#555;font-size:13px;">No BMI records yet.</p>`;
    return;
  }

  listEl.innerHTML = hist.slice().reverse().slice(0, 5).map(entry => {
    const { category, color } = bmiCategory(entry.value);
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #1a1a1a;">
        <span style="font-size:13px;color:#aaa;">${new Date(entry.date).toLocaleDateString()}</span>
        <span style="font-size:15px;font-weight:600;color:${color};">${entry.value.toFixed(1)}</span>
        <span style="font-size:12px;color:${color};">${category}</span>
      </div>
    `;
  }).join("");
}