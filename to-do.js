console.log("JavaScript loaded!!");

const missionList = document.getElementById('missionList');
const totalEl = document.getElementById('total');
const completedEl = document.getElementById('completed');
const pendingEl = document.getElementById('pending');
const trackerBox = document.getElementById('trackerBox');

function updateStats() {
  const missions = document.querySelectorAll('.mission-item');
  const completed = document.querySelectorAll('.mission-item.completed');
  totalEl.textContent = missions.length;
  completedEl.textContent = completed.length;
  pendingEl.textContent = missions.length - completed.length;
}

function addMission() {
  const input = document.getElementById('missionInput');
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.className = 'mission-item';
  li.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;">
      <input type="checkbox" onchange="toggleComplete(this)">
      <span>${text}</span>
    </div>
    <button onclick="deleteMission(this)">Delete</button>
  `;
  missionList.appendChild(li);
  input.value = '';
  updateStats();
}

function toggleComplete(checkbox) {
  const item = checkbox.closest('.mission-item');
  item.classList.toggle('completed', checkbox.checked);
  updateStats();
}

function deleteMission(btn) {
  btn.parentElement.remove();
  updateStats();
}

function changeColor() {
  const colors = ['#f5f9ff', '#fff0f0', '#f0fff4', '#f0f8ff', '#fffbe6'];
  const current = trackerBox.style.backgroundColor;
  let next = colors[Math.floor(Math.random() * colors.length)];
  while (next === current) {
    next = colors[Math.floor(Math.random() * colors.length)];
  }
  trackerBox.style.backgroundColor = next;
}
