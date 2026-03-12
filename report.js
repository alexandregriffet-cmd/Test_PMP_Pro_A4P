
window.PMP_DIMENSIONS = {
  activation:{label:"Activation",description:"Capacité à mobiliser son énergie mentale avant et pendant la performance.",low:"Peut traduire un démarrage lent, une prudence excessive ou une difficulté à entrer pleinement dans le défi.",high:"Traduit souvent une bonne capacité à se mettre rapidement en action et à élever son niveau d'intensité."},
  attention:{label:"Attention",description:"Capacité à rester focalisé sur l'essentiel malgré les distractions.",low:"Peut indiquer une dispersion, une difficulté à revenir dans l'instant ou à tenir son repère.",high:"Traduit souvent une bonne concentration et une capacité à se refocaliser rapidement."},
  regulation:{label:"Régulation",description:"Capacité à gérer ses émotions et sa tension intérieure.",low:"Peut signaler une sensibilité marquée au stress, à la frustration ou à l'erreur.",high:"Traduit souvent une stabilité émotionnelle utile dans les moments exigeants."},
  engagement:{label:"Engagement",description:"Capacité à rester impliqué, volontaire et mobilisé dans l'effort.",low:"Peut signaler un décrochage intérieur lorsque la difficulté augmente.",high:"Traduit une forte implication et une présence mentale durable."},
  confiance:{label:"Confiance",description:"Croyance en ses capacités à répondre présent et à progresser.",low:"Peut révéler du doute, une fragilité sous pression ou une dépendance trop forte au résultat.",high:"Traduit une solidité intérieure et un appui mobilisable dans les moments importants."},
  resilience:{label:"Résilience",description:"Capacité à rebondir après l'erreur, l'échec ou le contretemps.",low:"Peut montrer une tendance à ruminer et à rester bloqué après un passage difficile.",high:"Traduit une capacité à repartir, apprendre et se reconstruire dans l'action."},
  cognition:{label:"Cognition",description:"Capacité à comprendre, analyser, anticiper et décider avec lucidité.",low:"Peut traduire une lecture tardive de la situation ou un manque de recul stratégique.",high:"Traduit une bonne clarté mentale et une lecture efficace des situations."},
  motricite:{label:"Motricité",description:"Capacité à ressentir, organiser et ajuster le mouvement.",low:"Peut signaler peu de repères corporels ou une difficulté à sentir l'ajustement juste.",high:"Traduit un lien fin entre sensation, geste et efficacité."}
};

window.MBTI_TO_MOTOR = {
  ESTP:"D1", ISTP:"D2", ESTJ:"D3", ISTJ:"D4",
  ESFP:"G1", ISFP:"G2", ESFJ:"G3", ISFJ:"G4",
  ENFP:"R1", INFP:"R2", ENFJ:"R3", INFJ:"R4",
  ENTP:"C1", INTP:"C2", ENTJ:"C3", INTJ:"C4"
};

window.PMP_PROFILES = {
  "Compétiteur":["activation","engagement","confiance"],
  "Stratège":["cognition","attention","regulation"],
  "Créatif":["cognition","activation","motricite"],
  "Régulateur":["regulation","attention","resilience"],
  "Endurant":["resilience","engagement","confiance"],
  "Méthodique":["attention","motricite","cognition"]
};

window.pmpScoreBand = function(score){
  if(score >= 80) return "force mentale";
  if(score >= 60) return "zone solide";
  if(score >= 40) return "zone moyenne";
  return "zone de travail";
};

window.computePMPResults = function(appState){
  const questions = window.PMP_QUESTIONS;
  const answers = appState.answers || {};
  const scores = {};
  const dims = Object.keys(window.PMP_DIMENSIONS);

  dims.forEach(key => {
    const items = questions.filter(q => q.dimension === key);
    const total = items.reduce((sum, q) => {
      let val = Number(answers[q.id] || 0);
      if(q.reverse) val = 6 - val;
      return sum + val;
    }, 0);
    scores[key] = Math.round((total / (items.length * 5)) * 100);
  });

  const axisScores = {ei:0, sn:0, tf:0, jp:0};
  questions.filter(q => q.type === "binary").forEach(q => {
    const ans = answers[q.id];
    if(ans === "A") axisScores[q.axis] += 1;
    if(ans === "B") axisScores[q.axis] -= 1;
  });
  const mbtiType =
    (axisScores.ei >= 0 ? "E" : "I") +
    (axisScores.sn >= 0 ? "S" : "N") +
    (axisScores.tf >= 0 ? "T" : "F") +
    (axisScores.jp >= 0 ? "J" : "P");

  const motor = window.MBTI_TO_MOTOR[mbtiType] || "—";
  const motorFamilies = {D:"ST", G:"SF", R:"NF", C:"NT"};
  const motorFamily = motor !== "—" ? motorFamilies[motor[0]] : "—";

  const globalIndex = Math.round(
    (scores.activation*1 + scores.attention*1.2 + scores.regulation*1.3 + scores.engagement*1 +
     scores.confiance*1.2 + scores.resilience*1 + scores.cognition*0.9 + scores.motricite*0.8) / 8.4
  );
  const pressureIndex = Math.round(scores.regulation*0.4 + scores.confiance*0.3 + scores.resilience*0.3);
  const stabilityIndex = Math.round((scores.regulation + scores.attention + scores.resilience) / 3);

  const profiles = Object.entries(window.PMP_PROFILES).map(([name, dims]) => ({
    name,
    value: Math.round(dims.reduce((s,d)=>s+scores[d],0) / dims.length)
  })).sort((a,b)=>b.value-a.value);

  const learning = [
    ["Analytique", Math.round((scores.cognition + scores.attention)/2)],
    ["Expérientiel", Math.round((scores.motricite + scores.activation)/2)],
    ["Compétitif", Math.round((scores.engagement + scores.activation)/2)],
    ["Méthodique", Math.round((scores.attention + scores.motricite)/2)]
  ].sort((a,b)=>b[1]-a[1])[0][0];

  let coherenceIndex = Math.round((scores.motricite + scores.cognition)/2);
  if(["R","C"].includes(motor[0]) && scores.cognition >= 60) coherenceIndex += 8;
  if(["D","G"].includes(motor[0]) && scores.attention >= 60) coherenceIndex += 5;
  coherenceIndex = Math.max(30, Math.min(96, coherenceIndex));

  const sortedLow = Object.entries(scores).sort((a,b)=>a[1]-b[1]).slice(0,3);
  const sortedHigh = Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,3);

  return {
    athlete: appState.athlete || {},
    scores,
    mbtiType,
    motor,
    motorFamily,
    globalIndex,
    pressureIndex,
    stabilityIndex,
    profiles,
    learningStyle: learning,
    coherenceIndex,
    lowDims: sortedLow,
    highDims: sortedHigh,
    globalBand: globalIndex >= 80 ? "mental performant" : globalIndex >= 65 ? "mental solide" : globalIndex >= 50 ? "mental en développement" : "mental fragile"
  };
};

window.renderPMPReport = function(result){
  const root = document.getElementById("reportContent");
  const lowAdvice = {
    Activation:"Travail recommandé : routine d'entrée, mise en route mentale, intention de départ.",
    Attention:"Travail recommandé : recentrage, focalisation, repères simples et routines courtes.",
    Régulation:"Travail recommandé : respiration, reset, retour au calme et gestion de l'émotion.",
    Engagement:"Travail recommandé : objectifs d'intention, relance dans l'effort, tenue mentale.",
    Confiance:"Travail recommandé : ancrage des réussites, repères de compétence, dialogue interne.",
    Résilience:"Travail recommandé : débrief bref, relance après erreur, lecture apprentissage.",
    Cognition:"Travail recommandé : lecture de jeu, anticipation, compréhension du sens et des choix.",
    Motricité:"Travail recommandé : sensations, appuis, rythme, lien entre correction et ressenti."
  };
  const highLabels = result.highDims.map(([k])=>window.PMP_DIMENSIONS[k].label).join(", ");
  const lowLabels = result.lowDims.map(([k])=>window.PMP_DIMENSIONS[k].label).join(", ");
  const pressureSentence = result.pressureIndex >= 70 ? "une capacité plutôt solide à rester opérationnel quand l'enjeu monte" :
    result.pressureIndex >= 55 ? "un potentiel réel mais encore irrégulier dans la gestion des moments tendus" :
    "une sensibilité marquée à l'enjeu et au risque de perte de moyens";

  const learningSentence = {
    "Analytique":"il comprend précisément la logique, le sens et les repères de ce qu'il travaille.",
    "Expérientiel":"il peut ressentir, essayer, ajuster et apprendre en action.",
    "Compétitif":"l'entraînement contient du défi, du rythme et un niveau d'engagement élevé.",
    "Méthodique":"le cadre est stable, répétitif et structuré avec des étapes claires."
  }[result.learningStyle];

  const dimCards = Object.entries(result.scores).map(([key,score]) => {
    const info = window.PMP_DIMENSIONS[key];
    return `<div class="kpi">
      <div class="badge">${info.label}</div>
      <div class="value">${score}</div>
      <div class="muted">${window.pmpScoreBand(score)}</div>
      <p><strong>Lecture :</strong> ${score >= 60 ? info.high : info.low}</p>
    </div>`;
  }).join("");

  root.innerHTML = `
    <section>
      <h2>Passeport Mental du Sportif – A4P</h2>
      <div class="grid-4">
        <div class="kpi"><div class="label">Sportif</div><div class="value">${result.athlete.name || "Sportif A4P"}</div></div>
        <div class="kpi"><div class="label">Âge</div><div class="value">${result.athlete.age || "—"}</div></div>
        <div class="kpi"><div class="label">Sport</div><div class="value">${result.athlete.sport || "—"}</div></div>
        <div class="kpi"><div class="label">Date</div><div class="value">${new Date().toLocaleDateString("fr-FR")}</div></div>
      </div>
      <p>Ce rapport présente un portrait mental du sportif à partir de 136 réponses. Il articule scores dimensionnels, profils mentaux, équivalence cognitive inspirée MBTI et préférence motrice associée. Il ne constitue ni un diagnostic clinique, ni un MBTI officiel.</p>
    </section>

    <section>
      <h2>Carte mentale du sportif</h2>
      <div class="grid-3">
        <div class="kpi"><div class="label">Indice global A4P</div><div class="value">${result.globalIndex}</div><div class="muted">${result.globalBand}</div></div>
        <div class="kpi"><div class="label">Indice pression</div><div class="value">${result.pressureIndex}</div><div class="muted">${window.pmpScoreBand(result.pressureIndex)}</div></div>
        <div class="kpi"><div class="label">Indice stabilité</div><div class="value">${result.stabilityIndex}</div><div class="muted">${window.pmpScoreBand(result.stabilityIndex)}</div></div>
      </div>
      <div class="radar-layout">
        <div class="kpi" id="radarMount"></div>
        <div class="kpi">
          ${Object.entries(result.scores).map(([key, score]) => `<div class="legend-row"><strong>${window.PMP_DIMENSIONS[key].label}</strong><span>${score}/100</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section>
      <h2>Portrait mental global</h2>
      <p>Le profil global met en évidence un fonctionnement mental dominé par le style <strong>${result.profiles[0].name.toLowerCase()}</strong>, soutenu par une composante <strong>${result.profiles[1].name.toLowerCase()}</strong>. Les dimensions les plus solides apparaissent actuellement sur ${highLabels}. Le niveau global A4P atteint <strong>${result.globalIndex}/100</strong>, ce qui situe le sportif dans la catégorie <strong>${result.globalBand}</strong>.</p>
      <p>Sous pression, le fonctionnement semble surtout dépendre de la combinaison entre régulation, confiance et résilience. L'indice de pression atteint <strong>${result.pressureIndex}/100</strong>. Cela suggère ${pressureSentence}.</p>
      <p>Le style d'apprentissage dominant est <strong>${result.learningStyle}</strong>. Cela signifie que le sportif progresse le mieux quand ${learningSentence}</p>
    </section>

    <section>
      <h2>Forces mentales et dimensions</h2>
      <div class="grid-4">${dimCards}</div>
    </section>

    <section>
      <h2>Profils mentaux dominants</h2>
      <div class="grid-3">
        ${result.profiles.slice(0,3).map((p, i) => `<div class="kpi"><div class="label">${i===0?"Profil principal":i===1?"Profil secondaire":"Profil tertiaire"}</div><div class="value">${p.name}</div><div class="muted">${p.value}/100</div></div>`).join("")}
      </div>
      <p>Les profils mentaux ne sont pas des cases figées. Ils décrivent une organisation actuelle de plusieurs dimensions qui produit un style de fonctionnement privilégié dans le sport.</p>
    </section>

    <section>
      <h2>Lecture cognitive et préférence motrice</h2>
      <div class="grid-3">
        <div class="kpi"><div class="label">Type cognitif probable</div><div class="value">${result.mbtiType}</div><p>Lecture inspirée des axes E/I, S/N, T/F et J/P.</p></div>
        <div class="kpi"><div class="label">Préférence motrice associée</div><div class="value">${result.motor}</div><p>Famille motrice : ${result.motorFamily}</p></div>
        <div class="kpi"><div class="label">Cohérence cognition / motricité</div><div class="value">${result.coherenceIndex}</div><p>${result.coherenceIndex >= 75 ? "Cohérence forte" : result.coherenceIndex >= 60 ? "Cohérence intermédiaire" : "Profil mixte à explorer sur le terrain"}</p></div>
      </div>
      <p>La lecture MBTI est une <strong>équivalence de travail</strong> destinée à l'accompagnement. Elle ne remplace pas un test MBTI officiel. La préférence motrice associée sert de repère pédagogique et doit toujours être observée et confirmée sur le terrain.</p>
    </section>

    <section>
      <h2>Axes de progression prioritaires</h2>
      <p>Les trois axes prioritaires de progression sont actuellement : <strong>${lowLabels}</strong>. L'objectif n'est pas de corriger une faiblesse théorique, mais de transformer ces zones en leviers de stabilité, de confiance et d'efficacité sportive.</p>
      <div class="grid-3">
        ${result.lowDims.map(([k, score], i) => `<div class="kpi"><div class="label">Priorité ${i+1}</div><div class="value">${window.PMP_DIMENSIONS[k].label}</div><div class="muted">${score}/100</div><p>${lowAdvice[window.PMP_DIMENSIONS[k].label]}</p></div>`).join("")}
      </div>
    </section>

    <section>
      <h2>Plan de progression mentale – 4 semaines</h2>
      <div class="grid-4">
        <div class="kpi"><div class="label">Semaine 1</div><div class="value">Lucidité</div><p>Observer son fonctionnement, ses déclencheurs et ses repères de concentration.</p></div>
        <div class="kpi"><div class="label">Semaine 2</div><div class="value">Régulation</div><p>Installer une routine respiration + reset pour revenir rapidement dans l'instant.</p></div>
        <div class="kpi"><div class="label">Semaine 3</div><div class="value">Engagement</div><p>Définir une intention claire, un niveau d'effort et un comportement de relance.</p></div>
        <div class="kpi"><div class="label">Semaine 4</div><div class="value">Autonomie</div><p>Transformer le bilan en habitudes utiles et en repères personnels durables.</p></div>
      </div>
    </section>

    <section>
      <h2>Lecture jeune – parents – coach</h2>
      <div class="grid-3">
        <div class="kpi"><div class="label">Pour le sportif</div><p>Utilise ce rapport pour mieux comprendre ton fonctionnement, t'appuyer sur tes forces et travailler lucidement tes axes de progression. L'objectif est de devenir plus régulé, plus engagé et plus autonome.</p></div>
        <div class="kpi"><div class="label">Pour les parents</div><p>Le bon soutien consiste à aider le jeune à lire son fonctionnement, à valoriser ses progrès et à ne pas réduire sa valeur à un résultat. Une bonne lecture du profil aide à mieux encourager.</p></div>
        <div class="kpi"><div class="label">Pour le coach</div><p>Le rapport aide à ajuster le feedback, le cadre, la charge émotionnelle et le mode d'apprentissage. La lecture cognition + motricité sert à affiner les consignes et l'accompagnement.</p></div>
      </div>
      <p class="small muted">Version professionnelle A4P – outil d'accompagnement. À personnaliser avec tes mentions légales et conditions commerciales avant diffusion large.</p>
    </section>
  `;

  const radarMount = document.getElementById("radarMount");
  radarMount.innerHTML = "";
  radarMount.appendChild(window.renderPMPRadar(result.scores));
};
