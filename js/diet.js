// ─────────────────────────────────────────────
//  diet.js
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  requireAuth();
});

function loadDiet(type) {
  const diets = {
    muscle: {
      label: "Muscle Gain",
      items: [
        { icon: "ti-drumstick", name: "Chicken breast", note: "High-protein lean meat" },
        { icon: "ti-egg",       name: "Whole eggs",     note: "Complete amino acid profile" },
        { icon: "ti-bowl",      name: "Brown rice",     note: "Complex carbs for energy" },
        { icon: "ti-glass",     name: "Whole milk",     note: "Protein + healthy fats" },
        { icon: "ti-fish",      name: "Salmon",         note: "Omega-3 & protein" },
        { icon: "ti-apple",     name: "Oats",           note: "Slow-digesting carbs" }
      ]
    },
    weightloss: {
      label: "Weight Loss",
      items: [
        { icon: "ti-leaf",      name: "Mixed salad",       note: "Low-calorie, high-fibre" },
        { icon: "ti-bowl",      name: "Oats",              note: "Keeps you full longer" },
        { icon: "ti-drumstick", name: "Chicken breast",    note: "Lean protein, low fat" },
        { icon: "ti-fish",      name: "Tuna",              note: "High protein, very low fat" },
        { icon: "ti-apple",     name: "Apples & berries",  note: "Natural sugars + fibre" },
        { icon: "ti-drop",      name: "Water (2–3 L/day)", note: "Aids metabolism" }
      ]
    },
    normal: {
      label: "Balanced Diet",
      items: [
        { icon: "ti-drumstick", name: "Lean meats",      note: "Protein source" },
        { icon: "ti-apple",     name: "Fruits & veg",    note: "Vitamins & minerals" },
        { icon: "ti-bowl",      name: "Whole grains",    note: "Sustained energy" },
        { icon: "ti-glass",     name: "Low-fat dairy",   note: "Calcium & protein" },
        { icon: "ti-fish",      name: "Fatty fish",      note: "Healthy fats" },
        { icon: "ti-nut",       name: "Nuts & seeds",    note: "Healthy fats + fibre" }
      ]
    }
  };

  const plan = diets[type];
  const box  = document.getElementById("dietBox");
  if (!box || !plan) return;

  box.innerHTML = plan.items.map(item => `
    <div class="food-item">
      <i class="ti ${item.icon}"></i>
      <div>
        <div style="font-size:13px;color:#e0e0e0;font-weight:500;">${item.name}</div>
        <div style="font-size:12px;color:#555;">${item.note}</div>
      </div>
    </div>
  `).join("");

  logActivity(`Viewed ${plan.label} diet plan`);

  // highlight active button
  document.querySelectorAll(".diet-filter-btn").forEach(b => {
    b.classList.toggle("btn-primary", b.dataset.diet === type);
    b.classList.toggle("btn-ghost",   b.dataset.diet !== type);
  });
}