const mentalDimensions = [
  "Activation", "Attention", "Régulation", "Engagement",
  "Confiance", "Résilience", "Cognition", "Motricité"
];

const mentalQuestionBanks = {
  Activation: [
    "Avant une compétition, je sens rapidement mon énergie monter.",
    "Quand l’enjeu augmente, je me mets facilement en mouvement.",
    "J’aime les contextes où il faut répondre avec intensité.",
    "Je démarre souvent fort dès les premières minutes.",
    "Je sais me mobiliser mentalement quand il faut performer.",
    "Je me sens prêt mentalement avant d’entrer dans l’action.",
    "Les défis sportifs me donnent de l’élan.",
    "J’ai besoin d’un certain niveau d’intensité pour être au meilleur niveau.",
    "Je me mets facilement en mode compétition.",
    "Même dans les jours moyens, je peux activer mon énergie pour performer.",
    "Je sens vite quand mon niveau d’activation est trop bas ou trop haut.",
    "Je peux retrouver un bon niveau d’énergie avant un moment important.",
    "J’aime quand le rythme du jeu devient élevé.",
    "Je me sens vivant quand il y a du défi sportif.",
    "Je suis capable d’entrer rapidement dans mon match ou ma séance."
  ],
  Attention: [
    "Je reste concentré malgré le bruit ou les distractions.",
    "Je retrouve vite mon focus après une erreur.",
    "Je sais revenir sur l’instant présent quand mon esprit s’éparpille.",
    "Je garde le fil de mon plan de jeu pendant l’effort.",
    "Je repère rapidement ce qui est important dans la situation.",
    "Je peux rester attentif longtemps sans me disperser.",
    "Sous pression, j’arrive à garder une attention utile.",
    "Je sais quoi regarder en priorité pendant l’action.",
    "Je perds rarement ma concentration sur des détails inutiles.",
    "Je reviens vite à ma tâche après une interruption.",
    "Je suis attentif aux signaux importants de mon corps et du jeu.",
    "Je peux me reconcentrer entre deux points, actions ou séquences.",
    "Je reste lucide même quand l’environnement devient agité.",
    "Je m’organise mentalement pour garder mon attention au bon endroit.",
    "Je sais me focaliser sur ce que je peux contrôler."
  ],
  Régulation: [
    "Je sais calmer mon stress avant une compétition.",
    "Quand je fais une erreur, je retrouve assez vite mon équilibre.",
    "Je gère plutôt bien mes émotions dans les moments tendus.",
    "Je peux respirer et reprendre la main quand je me sens débordé.",
    "Je distingue ce que je ressens sans me laisser submerger.",
    "Je régule mon intensité émotionnelle pendant l’effort.",
    "Je ne reste pas longtemps bloqué dans la frustration.",
    "Je sais remettre de l’ordre mental quand je sens un emballement.",
    "Je garde une attitude juste même quand l’arbitrage m’agace.",
    "Je retrouve une forme de stabilité émotionnelle après un temps faible.",
    "Je peux ralentir intérieurement pour redevenir efficace.",
    "Je sais reconnaître les signes qui montrent que je sors de ma zone optimale.",
    "Je ne laisse pas une émotion négative piloter toute ma performance.",
    "Je garde une certaine maîtrise de moi quand la pression monte.",
    "Je retrouve vite une régulation utile après un coup dur."
  ],
  Engagement: [
    "Je vais au bout de mes efforts même quand c’est difficile.",
    "Je reste impliqué mentalement jusqu’au bout d’une séance ou d’un match.",
    "Je fournis de l’énergie dans les moments exigeants.",
    "Je me bats encore quand la situation devient compliquée.",
    "Je suis capable de garder mon niveau d’investissement dans la durée.",
    "Je m’engage vraiment dans les consignes de progression.",
    "Je reste actif même après un passage raté.",
    "J’aime sentir que je m’implique totalement dans mon sport.",
    "Je suis régulier dans mes efforts d’entraînement.",
    "Je ne lâche pas facilement sur le plan mental.",
    "Je peux continuer à avancer même sans récompense immédiate.",
    "Je donne de l’importance à la qualité de mon implication.",
    "Je reviens vite dans l’effort après un moment de baisse.",
    "Je reste engagé quand le contexte devient moins confortable.",
    "Je mets de la volonté dans mon travail mental et sportif."
  ],
  Confiance: [
    "Je crois en ma capacité à réussir dans les moments importants.",
    "Je m’appuie sur mes qualités quand l’enjeu augmente.",
    "Je garde une confiance utile après une erreur.",
    "Je me sens capable de répondre présent face à l’adversité.",
    "Je n’ai pas besoin d’être parfait pour continuer à croire en moi.",
    "Je peux m’engager même si tout n’est pas rassurant.",
    "Je reconnais mes ressources quand je dois performer.",
    "Je garde une base de confiance quand les résultats fluctuent.",
    "Je me sens légitime dans mon sport.",
    "Je suis capable de m’encourager intérieurement avec justesse.",
    "Je crois que je peux progresser et répondre à des exigences élevées.",
    "Je ne remets pas totalement en cause ma valeur après un échec.",
    "Je peux entrer en compétition avec une conviction constructive.",
    "Je connais des points forts sur lesquels m’appuyer.",
    "Je reste suffisamment sûr de moi pour agir efficacement."
  ],
  Résilience: [
    "Je rebondis après un match ou une séance difficile.",
    "Je tire des leçons utiles de mes échecs.",
    "Je ne reste pas bloqué longtemps sur une contre-performance.",
    "Je peux repartir après un coup dur.",
    "Je transforme souvent les difficultés en occasion de progresser.",
    "Je garde du sens même quand les résultats ne sont pas au rendez-vous.",
    "Je sais me reconstruire après une déception sportive.",
    "Je peux remettre de l’élan après une période compliquée.",
    "Les obstacles me font grandir plus qu’ils ne me cassent.",
    "Je garde une trajectoire de progression malgré les hauts et les bas.",
    "Je suis capable de relancer ma dynamique mentale après un échec.",
    "Je prends du recul pour mieux repartir.",
    "Je supporte les passages difficiles sans abandonner mon projet.",
    "Je peux encaisser un revers sans perdre tout mon équilibre.",
    "Je trouve des appuis pour rebondir mentalement."
  ],
  Cognition: [
    "J’aime comprendre la logique tactique ou stratégique de mon sport.",
    "Je fais facilement des liens entre différentes situations de jeu.",
    "Je réfléchis à ce qui fonctionne pour progresser.",
    "Je comprends vite les principes qui organisent l’action.",
    "J’analyse ce que je vis pour mieux progresser.",
    "Je vois souvent plusieurs options dans une même situation.",
    "Je peux prendre du recul pour comprendre ce qui s’est passé.",
    "Je retiens bien les éléments utiles pour ajuster ma performance.",
    "Je m’intéresse autant au pourquoi qu’au comment.",
    "Je peux anticiper certaines évolutions dans le jeu.",
    "Je repère vite les schémas récurrents.",
    "J’aime construire une stratégie plutôt que réagir au hasard.",
    "Je comprends bien les consignes complexes.",
    "Je fais des ajustements mentaux à partir de ce que j’observe.",
    "Je progresse quand je mets du sens sur ce que je fais."
  ],
  Motricité: [
    "Je sens facilement comment mon corps s’organise dans l’action.",
    "Je repère vite si mon geste manque de fluidité.",
    "Je ressens ce qui m’aide à mieux bouger.",
    "Je comprends mon mouvement en l’expérimentant.",
    "Je détecte les sensations utiles dans mon geste.",
    "Je peux ajuster ma coordination quand il le faut.",
    "Je sens si j’ai besoin de stabilité ou de liberté motrice.",
    "Je remarque les petits détails corporels qui changent mon efficacité.",
    "Je me connais assez bien dans ma façon naturelle de bouger.",
    "Je progresse quand je prends conscience de mon organisation motrice.",
    "Je ressens vite si mon appui ou mon placement n’est pas juste.",
    "Je peux adapter mon geste en fonction de la situation.",
    "Je comprends mieux mon sport quand j’associe sensation et technique.",
    "Je reconnais les conditions dans lesquelles mon mouvement est le plus efficace.",
    "Je développe facilement une lecture corporelle de ma performance."
  ]
};

const answerScale = [
  { value: 1, label: "Pas du tout d’accord" },
  { value: 2, label: "Plutôt pas d’accord" },
  { value: 3, label: "Ni d’accord ni pas d’accord" },
  { value: 4, label: "Plutôt d’accord" },
  { value: 5, label: "Tout à fait d’accord" }
];

const cognitiveQuestions = [
  { axis: "EI", text: "Je gagne de l’énergie quand j’échange avec les autres." },
  { axis: "EI", text: "Avant de parler, je préfère souvent prendre un temps intérieur." , reverse: true},
  { axis: "EI", text: "L’ambiance d’un groupe me stimule rapidement." },
  { axis: "EI", text: "Je recharge plus facilement mon énergie dans le calme et le recul.", reverse: true },
  { axis: "SN", text: "Je m’appuie d’abord sur les faits concrets et observables." },
  { axis: "SN", text: "Je vois spontanément ce qui pourrait être possible au-delà de la situation actuelle.", reverse: true },
  { axis: "SN", text: "Je préfère progresser avec des repères précis et tangibles." },
  { axis: "SN", text: "J’aime imaginer des options nouvelles et des pistes différentes.", reverse: true },
  { axis: "TF", text: "Quand je décide, je m’appuie d’abord sur la logique et l’efficacité." },
  { axis: "TF", text: "Je tiens fortement compte de l’impact humain et relationnel dans mes décisions.", reverse: true },
  { axis: "TF", text: "Je préfère un retour direct, clair et objectif." },
  { axis: "TF", text: "Je décide plus facilement quand je sens que cela est juste pour les personnes concernées.", reverse: true },
  { axis: "JP", text: "Je préfère anticiper, planifier et structurer clairement les choses." },
  { axis: "JP", text: "Je me sens plus à l’aise quand je garde de la souplesse et des options ouvertes.", reverse: true },
  { axis: "JP", text: "J’aime avoir un cadre net pour avancer." },
  { axis: "JP", text: "Je préfère m’adapter au fil de l’eau plutôt que tout figer d’avance.", reverse: true }
];

const blockLabels = [
  "Activation", "Attention", "Régulation", "Engagement", "Confiance", "Résilience", "Cognition", "Motricité", "Cognition inspirée MBTI"
];

const mbtiToMotor = {
  ESTP:"D1", ISTP:"D2", ESTJ:"D3", ISTJ:"D4",
  ESFP:"G1", ISFP:"G2", ESFJ:"G3", ISFJ:"G4",
  ENFP:"R1", INFP:"R2", ENFJ:"R3", INFJ:"R4",
  ENTP:"C1", INTP:"C2", ENTJ:"C3", INTJ:"C4"
};

const motorDescriptions = {
  D: "Famille D (ST) : préférence probable de mouvement structurée, appuis concrets, besoin de stabilité et d’efficacité lisible.",
  G: "Famille G (SF) : préférence probable de mouvement sensible, relationnelle, avec recherche d’aisance et de continuité corporelle.",
  R: "Famille R (NF) : préférence probable de mouvement créative, adaptative, initiée avec liberté et expressivité gestuelle.",
  C: "Famille C (NT) : préférence probable de mouvement analytique, organisée, orientée compréhension du geste et ajustement fin."
};

const appState = {
  questions: [],
  answers: [],
  currentIndex: 0,
  started: false,
  results: null
};

function buildQuestions() {
  const questions = [];
  mentalDimensions.forEach((dimension, blockIndex) => {
    mentalQuestionBanks[dimension].forEach((text, i) => {
      questions.push({
        id: `${dimension}_${i+1}`,
        kind: "mental",
        block: blockIndex,
        dimension,
        text,
        scale: answerScale
      });
    });
  });
  cognitiveQuestions.forEach((q, i) => {
    questions.push({
      id: `COG_${i+1}`,
      kind: "cognitive",
      block: 8,
      dimension: "Cognition inspirée MBTI",
      axis: q.axis,
      reverse: Boolean(q.reverse),
      text: q.text,
      scale: answerScale
    });
  });
  return questions;
}

function setDefaultDate() {
  const dateInput = document.getElementById("testDate");
  const today = new Date();
  dateInput.value = today.toISOString().slice(0,10);
}

function saveLocal() {
  const payload = {
    athlete: readAthleteInfo(),
    answers: appState.answers,
    currentIndex: appState.currentIndex
  };
  localStorage.setItem("pmp_a4p_progress", JSON.stringify(payload));
  alert("Progression sauvegardée sur cet appareil.");
}

function loadLocalProgress() {
  const raw = localStorage.getItem("pmp_a4p_progress");
  if (!raw) return false;
  try {
    const parsed = JSON.parse(raw);
    writeAthleteInfo(parsed.athlete || {});
    appState.answers = parsed.answers || Array(appState.questions.length).fill(null);
    appState.currentIndex = Math.min(parsed.currentIndex || 0, appState.questions.length - 1);
    return true;
  } catch {
    return false;
  }
}

function clearLocal() {
  localStorage.removeItem("pmp_a4p_progress");
}

function readAthleteInfo() {
  return {
    name: document.getElementById("athleteName").value.trim(),
    age: document.getElementById("athleteAge").value.trim(),
    sport: document.getElementById("athleteSport").value.trim(),
    level: document.getElementById("athleteLevel").value.trim(),
    club: document.getElementById("athleteClub").value.trim(),
    date: document.getElementById("testDate").value.trim()
  };
}

function writeAthleteInfo(data) {
  document.getElementById("athleteName").value = data.name || "";
  document.getElementById("athleteAge").value = data.age || "";
  document.getElementById("athleteSport").value = data.sport || "";
  document.getElementById("athleteLevel").value = data.level || "";
  document.getElementById("athleteClub").value = data.club || "";
  document.getElementById("testDate").value = data.date || document.getElementById("testDate").value;
}

function validateIntro() {
  const athlete = readAthleteInfo();
  if (!athlete.name || !athlete.age || !athlete.sport) {
    alert("Renseigne au minimum le nom, l’âge et le sport pratiqué.");
    return false;
  }
  return true;
}

function startTest(useDemo = false) {
  if (!useDemo && !validateIntro()) return;
  if (useDemo) {
    writeAthleteInfo({
      name: "Joueur Démo",
      age: "16",
      sport: "Football",
      level: "Régional",
      club: "A4P Démo Club",
      date: new Date().toISOString().slice(0,10)
    });
    appState.answers = appState.questions.map((_, i) => {
      const pattern = [4,5,3,4,5,2,4,3,5,4];
      return pattern[i % pattern.length];
    });
    appState.currentIndex = 0;
    appState.started = true;
    finishTest();
    return;
  }
  appState.answers = Array(appState.questions.length).fill(null);
  appState.currentIndex = 0;
  appState.started = true;
  document.getElementById("testSection").classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: document.getElementById("testSection").offsetTop - 20, behavior: "smooth" });
}

function renderQuestion() {
  const q = appState.questions[appState.currentIndex];
  const total = appState.questions.length;
  document.getElementById("blockLabel").textContent = `Bloc ${q.block + 1} / 9 – ${blockLabels[q.block]}`;
  document.getElementById("questionCounter").textContent = `Question ${appState.currentIndex + 1} / ${total}`;
  document.getElementById("questionDimension").textContent = q.dimension;
  document.getElementById("questionText").textContent = q.text;
  const progress = Math.round((appState.answers.filter(v => v !== null).length / total) * 100);
  document.getElementById("progressFill").style.width = `${progress}%`;
  document.getElementById("progressText").textContent = `${progress} % complété`;
  const answersBox = document.getElementById("answers");
  answersBox.innerHTML = "";
  q.scale.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    if (appState.answers[appState.currentIndex] === option.value) btn.classList.add("selected");
    btn.innerHTML = `<strong>${option.value}</strong> — ${option.label}`;
    btn.onclick = () => {
      appState.answers[appState.currentIndex] = option.value;
      renderQuestion();
    };
    answersBox.appendChild(btn);
  });
  document.getElementById("prevBtn").disabled = appState.currentIndex === 0;
  document.getElementById("nextBtn").textContent = appState.currentIndex === total - 1 ? "Terminer" : "Suivant";
}

function nextQuestion() {
  if (appState.answers[appState.currentIndex] === null) {
    alert("Sélectionne une réponse avant de continuer.");
    return;
  }
  if (appState.currentIndex === appState.questions.length - 1) {
    finishTest();
    return;
  }
  appState.currentIndex += 1;
  renderQuestion();
}

function prevQuestion() {
  if (appState.currentIndex > 0) {
    appState.currentIndex -= 1;
    renderQuestion();
  }
}

function scoreMentalDimension(dimension) {
  const items = appState.questions.filter(q => q.kind === "mental" && q.dimension === dimension);
  const vals = items.map(q => appState.answers[appState.questions.findIndex(item => item.id === q.id)] || 0);
  const sum = vals.reduce((a,b) => a+b, 0);
  const max = items.length * 5;
  return Math.round((sum / max) * 100);
}

function scoreCognitive() {
  const axisScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const axisMax = { EI: 0, SN: 0, TF: 0, JP: 0 };
  appState.questions.forEach((q, idx) => {
    if (q.kind !== "cognitive") return;
    const raw = appState.answers[idx] || 0;
    const value = q.reverse ? 6 - raw : raw;
    axisScores[q.axis] += value;
    axisMax[q.axis] += 5;
  });
  const letters = {
    E: axisScores.EI >= axisMax.EI / 2 ? axisScores.EI : axisMax.EI - axisScores.EI,
    I: axisScores.EI < axisMax.EI / 2 ? axisMax.EI - axisScores.EI : axisScores.EI
  };
  const mbti =
    (axisScores.EI >= axisMax.EI / 2 ? "E" : "I") +
    (axisScores.SN >= axisMax.SN / 2 ? "S" : "N") +
    (axisScores.TF >= axisMax.TF / 2 ? "T" : "F") +
    (axisScores.JP >= axisMax.JP / 2 ? "J" : "P");
  return {
    mbti,
    axisRaw: axisScores,
    axisNormalized: {
      EI: Math.round((axisScores.EI / axisMax.EI) * 100),
      SN: Math.round((axisScores.SN / axisMax.SN) * 100),
      TF: Math.round((axisScores.TF / axisMax.TF) * 100),
      JP: Math.round((axisScores.JP / axisMax.JP) * 100)
    }
  };
}

function deriveProfiles(scores) {
  const profiles = [
    { name: "Compétiteur", score: Math.round((scores.Activation + scores.Engagement) / 2) },
    { name: "Stratège", score: Math.round((scores.Cognition + scores.Attention) / 2) },
    { name: "Créatif", score: Math.round((scores.Cognition + scores.Activation) / 2) },
    { name: "Régulateur", score: Math.round((scores.Régulation + scores.Confiance) / 2) },
    { name: "Endurant", score: Math.round((scores.Résilience + scores.Engagement) / 2) },
    { name: "Méthodique", score: Math.round((scores.Attention + scores.Motricité) / 2) }
  ];
  return profiles.sort((a,b) => b.score - a.score);
}

function classifyScore(score) {
  if (score >= 80) return "force mentale affirmée";
  if (score >= 60) return "zone solide";
  if (score >= 40) return "zone moyenne";
  return "zone de travail prioritaire";
}

function buildLearningStyle(scores, dominantProfile) {
  if (dominantProfile === "Stratège") return "Analytique : ce sportif progresse en comprenant le sens, la logique et la stratégie avant d’agir pleinement.";
  if (dominantProfile === "Compétiteur") return "Compétitif : ce sportif apprend beaucoup dans l’intensité, le défi et l’engagement direct dans l’action.";
  if (dominantProfile === "Créatif") return "Exploratoire : ce sportif apprend par adaptation, variations, essais et ajustements personnels.";
  if (dominantProfile === "Méthodique") return "Structuré : ce sportif progresse par répétition, repères stables et séquences organisées.";
  if (scores.Motricité >= 70) return "Sensori-moteur : ce sportif intègre vite lorsqu’il ressent corporellement ce qu’il doit faire.";
  return "Mixte : ce sportif apprend mieux en combinant compréhension, pratique et retour d’expérience.";
}

function finishTest() {
  const scores = {};
  mentalDimensions.forEach(d => scores[d] = scoreMentalDimension(d));
  const cognitive = scoreCognitive();
  const motorType = mbtiToMotor[cognitive.mbti] || "—";
  const profiles = deriveProfiles(scores);
  const globalIndex = Math.round((scores.Activation + scores.Attention*1.2 + scores.Régulation*1.3 + scores.Engagement + scores.Confiance*1.2 + scores.Résilience + scores.Cognition*0.8 + scores.Motricité*0.7) / 8.2);
  const pressureIndex = Math.round(scores.Régulation * 0.4 + scores.Confiance * 0.3 + scores.Résilience * 0.3);
  const stabilityIndex = Math.round((scores.Régulation + scores.Résilience + scores.Attention) / 3);
  appState.results = {
    athlete: readAthleteInfo(),
    scores,
    cognitive,
    motorType,
    profiles,
    globalIndex,
    pressureIndex,
    stabilityIndex,
    learningStyle: buildLearningStyle(scores, profiles[0].name),
    coherenceIndex: Math.round(100 - Math.abs(scores.Cognition - scores.Motricité) / 2)
  };
  renderResults();
  clearLocal();
}

function fillTextBlock(elementId, paragraphs) {
  const node = document.getElementById(elementId);
  node.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join("");
}

function renderResults() {
  const { athlete, scores, cognitive, motorType, profiles, globalIndex, pressureIndex, stabilityIndex, learningStyle, coherenceIndex } = appState.results;
  document.getElementById("testSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");
  document.getElementById("resultName").textContent = athlete.name || "Sportif";
  document.getElementById("resultMeta").textContent = `${athlete.age || "?"} ans · ${athlete.sport || "Sport non renseigné"} · ${athlete.level || "Niveau non renseigné"} · ${athlete.date || "Date non renseignée"}`;
  document.getElementById("globalIndex").textContent = `${globalIndex}/100`;
  document.getElementById("dominantProfile").textContent = profiles[0].name;
  document.getElementById("mbtiType").textContent = cognitive.mbti;
  document.getElementById("motorType").textContent = motorType;
  document.getElementById("pressureIndex").textContent = `${pressureIndex}/100`;
  document.getElementById("stabilityIndex").textContent = `${stabilityIndex}/100`;

  const scoreList = document.getElementById("scoreList");
  scoreList.innerHTML = mentalDimensions.map(d => `<div class="score-item"><span>${d}</span><strong>${scores[d]}</strong></div>`).join("");

  const topStrengths = [...mentalDimensions].sort((a,b) => scores[b] - scores[a]).slice(0,3);
  const topWork = [...mentalDimensions].sort((a,b) => scores[a] - scores[b]).slice(0,3);

  fillTextBlock("portraitText", [
    `${athlete.name || "Ce sportif"} présente un indice global A4P de ${globalIndex}/100, ce qui correspond à ${classifyScore(globalIndex)}. Son profil dominant ressort comme <strong>${profiles[0].name}</strong>, soutenu par un profil secondaire <strong>${profiles[1].name}</strong> et un profil tertiaire <strong>${profiles[2].name}</strong>.`,
    `Sur le plan général, son fonctionnement mental montre une combinaison particulière entre ${topStrengths[0].toLowerCase()}, ${topStrengths[1].toLowerCase()} et ${topStrengths[2].toLowerCase()}. Cela suggère une manière spécifique d’entrer dans la performance, de traiter l’information sportive et de s’engager dans l’action.`,
    `La lecture actuelle invite à considérer ce rapport comme une photographie structurée du moment. Il sert d’appui pour le dialogue, l’accompagnement et la progression mentale sur la durée.`
  ]);

  fillTextBlock("strengthsText", [
    `Les points d’appui principaux se situent aujourd’hui dans <strong>${topStrengths[0]}</strong> (${scores[topStrengths[0]]}/100), <strong>${topStrengths[1]}</strong> (${scores[topStrengths[1]]}/100) et <strong>${topStrengths[2]}</strong> (${scores[topStrengths[2]]}/100).`,
    `${topStrengths[0]} constitue probablement une ressource naturelle sur laquelle ce sportif peut s’appuyer dans les moments importants. ${topStrengths[1]} soutient la qualité de sa réponse dans la continuité, tandis que ${topStrengths[2]} renforce sa manière personnelle de progresser et d’exprimer son potentiel.`,
    `Pour exploiter pleinement ces forces, il est utile de les nommer explicitement, de les relier à des situations réelles de compétition et de les transformer en routines de confiance.`
  ]);

  fillTextBlock("pressureText", [
    `L’indice de réaction à la pression atteint <strong>${pressureIndex}/100</strong>. Cela offre une lecture synthétique de la manière dont ce sportif gère l’enjeu, la pression compétitive et les moments sensibles.`,
    `Avec une stabilité mentale de <strong>${stabilityIndex}/100</strong>, on observe une ${stabilityIndex >= 70 ? "bonne capacité à rester fonctionnel sous contrainte" : stabilityIndex >= 55 ? "stabilité encore fluctuante selon les contextes" : "fragilité qui mérite un travail de régulation et de recentrage"}.`,
    `En pratique, le travail portera sur la respiration, le recentrage, la récupération après erreur et la construction de routines brèves entre deux séquences de performance.`
  ]);

  fillTextBlock("learningText", [
    `${learningStyle}`,
    `Le profil dominant <strong>${profiles[0].name}</strong> oriente aussi la pédagogie la plus efficace. Le sportif bénéficiera davantage d’un accompagnement qui respecte son mode naturel d’intégration plutôt que d’un cadre uniforme appliqué à tous.`,
    `Pour le coach, cela signifie qu’il faut adapter les consignes, la manière de corriger et la façon de renforcer la confiance pour maximiser l’appropriation.`
  ]);

  const motorFamily = motorType && motorType !== "—" ? motorType.charAt(0) : "";
  fillTextBlock("cognitiveText", [
    `Le type cognitif probable ressort ici comme <strong>${cognitive.mbti}</strong>. Cette lecture est inspirée de la logique MBTI, mais ne constitue pas un test MBTI officiel. Elle aide à comprendre la manière de prendre de l’énergie, percevoir les situations, décider et s’organiser.`,
    `La préférence motrice associée est <strong>${motorType}</strong>. ${motorDescriptions[motorFamily] || "La lecture motrice doit toujours être confrontée à l’observation terrain."}`,
    `L’indice de cohérence cognition / motricité est estimé à <strong>${coherenceIndex}/100</strong>. Plus cet indice est élevé, plus la lecture cognitive et la lecture motrice paraissent convergentes à ce stade du questionnaire.`
  ]);

  fillTextBlock("developmentText", [
    `Les trois zones de progression prioritaires sont actuellement <strong>${topWork[0]}</strong> (${scores[topWork[0]]}/100), <strong>${topWork[1]}</strong> (${scores[topWork[1]]}/100) et <strong>${topWork[2]}</strong> (${scores[topWork[2]]}/100).`,
    `Ces dimensions ne représentent pas des faiblesses définitives. Elles indiquent les leviers sur lesquels un accompagnement A4P peut produire le plus de progression à court et moyen terme.`,
    `L’objectif n’est pas d’obtenir des scores parfaits partout, mais de renforcer la cohérence du fonctionnement mental, la capacité à performer sous pression et l’autonomie du sportif.`
  ]);

  fillTextBlock("planText", [
    `<strong>Semaine 1 :</strong> régulation et respiration. Installer une routine courte avant l’effort et après l’erreur.`,
    `<strong>Semaine 2 :</strong> attention et recentrage. Définir un mot-clé, un point de focus et une action de retour au présent.`,
    `<strong>Semaine 3 :</strong> confiance et engagement. Identifier trois points forts réels et une routine de mise en action.`,
    `<strong>Semaine 4 :</strong> transfert terrain. Appliquer les routines en entraînement puis en situation de compétition avec débrief structuré.`
  ]);

  document.getElementById("audienceText").innerHTML = [
    `<div class="subblock"><strong>Lecture joueur :</strong> ce rapport t’aide à comprendre comment tu fonctionnes aujourd’hui pour mieux construire ta performance et ton autonomie mentale.</div>`,
    `<div class="subblock"><strong>Lecture parents :</strong> l’enjeu n’est pas de mettre la pression supplémentaire, mais de soutenir le jeune dans sa progression, son équilibre émotionnel et sa confiance durable.</div>`,
    `<div class="subblock"><strong>Lecture coach :</strong> adapte les feedbacks, le niveau de cadrage, la manière de corriger et les temps de débrief à la signature mentale actuelle du sportif.</div>`
  ].join("");

  drawRadar(scores);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function drawRadar(scores) {
  const canvas = document.getElementById("radarCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = 180;
  ctx.clearRect(0,0,w,h);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#d7e2f1";
  ctx.fillStyle = "#103a71";
  const levels = 5;

  for (let level = 1; level <= levels; level++) {
    ctx.beginPath();
    mentalDimensions.forEach((dim, i) => {
      const angle = (-Math.PI / 2) + (i * 2 * Math.PI / mentalDimensions.length);
      const r = radius * (level / levels);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.stroke();
  }

  mentalDimensions.forEach((dim, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI / mentalDimensions.length);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    const labelX = cx + Math.cos(angle) * (radius + 28);
    const labelY = cy + Math.sin(angle) * (radius + 28);
    ctx.fillStyle = "#20314d";
    ctx.font = "14px Arial";
    ctx.textAlign = labelX >= cx ? "left" : "right";
    ctx.fillText(dim, labelX, labelY);
  });

  ctx.beginPath();
  mentalDimensions.forEach((dim, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI / mentalDimensions.length);
    const r = radius * (scores[dim] / 100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(16, 58, 113, 0.20)";
  ctx.strokeStyle = "#103a71";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
}

function exportJSON() {
  if (!appState.results) return;
  const dataStr = JSON.stringify(appState.results, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = (appState.results.athlete.name || "profil_pmp").replace(/[^a-z0-9]+/gi, "_").toLowerCase();
  a.href = url;
  a.download = `${safeName}_pmp_a4p.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function restartAll() {
  appState.answers = Array(appState.questions.length).fill(null);
  appState.currentIndex = 0;
  appState.results = null;
  clearLocal();
  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("testSection").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  document.getElementById("startBtn").addEventListener("click", () => startTest(false));
  document.getElementById("demoBtn").addEventListener("click", () => startTest(true));
  document.getElementById("prevBtn").addEventListener("click", prevQuestion);
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("saveBtn").addEventListener("click", saveLocal);
  document.getElementById("printBtn").addEventListener("click", () => window.print());
  document.getElementById("exportBtn").addEventListener("click", exportJSON);
  document.getElementById("restartBtn").addEventListener("click", restartAll);
}

function init() {
  appState.questions = buildQuestions();
  setDefaultDate();
  bindEvents();
  loadLocalProgress();
}

init();
