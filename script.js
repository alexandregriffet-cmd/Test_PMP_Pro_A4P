
window.APP_STATE = { currentIndex: 0, answers: {}, athlete: {} };

function $(id){ return document.getElementById(id); }
function showScreen(id){
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  $(id).classList.add("active");
}
function currentQuestion(){ return window.PMP_QUESTIONS[window.APP_STATE.currentIndex]; }

function blockLabel(q){
  if(q.type === "binary") return "Bloc cognitif – lecture inspirée MBTI";
  return "Bloc dimensionnel – " + window.PMP_DIMENSIONS[q.dimension].label;
}

function renderQuestion(){
  const q = currentQuestion();
  $("blockLabel").textContent = blockLabel(q);
  $("counter").textContent = `Question ${window.APP_STATE.currentIndex + 1} / ${window.PMP_QUESTIONS.length}`;
  const pct = Math.round(((window.APP_STATE.currentIndex + 1)/window.PMP_QUESTIONS.length)*100);
  $("progressBar").style.width = pct + "%";
  $("progressText").textContent = pct + "%";

  let html = "";
  if(q.type === "likert"){
    const info = window.PMP_DIMENSIONS[q.dimension];
    html += `<div class="badge">${info.label}</div>`;
    html += `<h2 class="question-title">${q.text}</h2>`;
    html += `<p class="muted">${info.description}</p>`;
    const labels = [
      "1 — Pas du tout d'accord",
      "2 — Plutôt pas d'accord",
      "3 — Mitigé",
      "4 — Plutôt d'accord",
      "5 — Tout à fait d'accord"
    ];
    html += `<div class="scale">` + labels.map((label, i) => {
      const value = i + 1;
      const selected = window.APP_STATE.answers[q.id] === value ? "selected" : "";
      return `<button class="${selected}" data-value="${value}">${label}</button>`;
    }).join("") + `</div>`;
  } else {
    html += `<div class="badge">Lecture cognitive</div>`;
    html += `<h2 class="question-title">${q.text}</h2>`;
    html += `<p class="muted">Cette partie sert à produire une équivalence cognitive inspirée MBTI, puis une correspondance en préférences motrices.</p>`;
    html += `<div class="binary">
      <button class="${window.APP_STATE.answers[q.id] === "A" ? "selected" : ""}" data-value="A"><strong>A</strong><br>${q.optionA}</button>
      <button class="${window.APP_STATE.answers[q.id] === "B" ? "selected" : ""}" data-value="B"><strong>B</strong><br>${q.optionB}</button>
    </div>`;
  }
  $("questionMount").innerHTML = html;
  $("questionMount").querySelectorAll("button[data-value]").forEach(btn => {
    btn.addEventListener("click", () => {
      window.APP_STATE.answers[q.id] = q.type === "likert" ? Number(btn.dataset.value) : btn.dataset.value;
      renderQuestion();
    });
  });

  $("prevBtn").disabled = window.APP_STATE.currentIndex === 0;
  $("nextBtn").textContent = window.APP_STATE.currentIndex === window.PMP_QUESTIONS.length - 1 ? "Voir le rapport" : "Suivant";
}

function collectAthlete(){
  window.APP_STATE.athlete = {
    name: $("athleteName").value.trim() || "Sportif A4P",
    age: $("athleteAge").value.trim() || "",
    sport: $("athleteSport").value.trim() || "",
    club: $("athleteClub").value.trim() || ""
  };
}
function startTest(demo=false){
  collectAthlete();
  if(demo){
    window.PMP_QUESTIONS.forEach((q, i) => {
      window.APP_STATE.answers[q.id] = q.type === "likert" ? ([4,5,3,4,5][i % 5]) : (i % 2 === 0 ? "A" : "B");
    });
    const result = window.computePMPResults(window.APP_STATE);
    window.renderPMPReport(result);
    showScreen("screen-report");
    return;
  }
  window.APP_STATE.currentIndex = 0;
  showScreen("screen-test");
  renderQuestion();
}
function nextStep(){
  const q = currentQuestion();
  if(window.APP_STATE.answers[q.id] == null){
    alert("Merci de répondre avant de continuer.");
    return;
  }
  if(window.APP_STATE.currentIndex === window.PMP_QUESTIONS.length - 1){
    const result = window.computePMPResults(window.APP_STATE);
    window.renderPMPReport(result);
    showScreen("screen-report");
    return;
  }
  window.APP_STATE.currentIndex += 1;
  renderQuestion();
}
function prevStep(){
  if(window.APP_STATE.currentIndex > 0){
    window.APP_STATE.currentIndex -= 1;
    renderQuestion();
  }
}
function saveProgress(){
  collectAthlete();
  localStorage.setItem("pmp_a4p_v2_progress", JSON.stringify(window.APP_STATE));
  alert("Progression sauvegardée dans ce navigateur.");
}
function resumeProgress(){
  const raw = localStorage.getItem("pmp_a4p_v2_progress");
  if(!raw){ alert("Aucune sauvegarde trouvée."); return; }
  try{
    window.APP_STATE = JSON.parse(raw);
    showScreen("screen-test");
    renderQuestion();
  }catch(e){
    alert("Impossible de reprendre la sauvegarde.");
  }
}
function exportJSON(){
  const result = window.computePMPResults(window.APP_STATE);
  const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "rapport_pmp_a4p_v2.json";
  a.click();
}
document.addEventListener("DOMContentLoaded", () => {
  $("startBtn").addEventListener("click", () => startTest(false));
  $("demoBtn").addEventListener("click", () => startTest(true));
  $("nextBtn").addEventListener("click", nextStep);
  $("prevBtn").addEventListener("click", prevStep);
  $("saveBtn").addEventListener("click", saveProgress);
  $("resumeBtn").addEventListener("click", resumeProgress);
  $("printBtn").addEventListener("click", () => window.print());
  $("jsonBtn").addEventListener("click", exportJSON);
  $("restartBtn").addEventListener("click", () => {
    window.APP_STATE = { currentIndex: 0, answers: {}, athlete: {} };
    showScreen("screen-intro");
  });

  const raw = localStorage.getItem("pmp_a4p_v2_progress");
  if(raw){
    try{ window.APP_STATE = JSON.parse(raw); }catch(e){}
  }
});
