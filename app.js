/* Fossil Detectives — Grade 3 Science
   Data + app logic. No build step, no dependencies. */

const CARDS = [
  {
    emoji: "🦴",
    title: "What is a fossil?",
    reading: "A fossil is the preserved remains or evidence of a plant or animal that lived long ago. Fossils can be bones, teeth, shells, leaves, or footprints.",
    question: "What is a fossil? Answer in a complete sentence.",
    sample: "A fossil is the preserved remains or evidence of a plant or animal that lived long ago. It can be a bone, a tooth, a shell, a leaf, or a footprint."
  },
  {
    emoji: "⏳",
    title: "How old is a fossil?",
    reading: "Fossils are usually at least 10,000 years old. Some are millions of years old! Scientists use fossils to learn about life long ago.",
    question: "How old does something usually have to be to be called a fossil?",
    sample: "Something usually has to be at least 10,000 years old to be called a fossil."
  },
  {
    emoji: "🧩",
    title: "Two main kinds of fossils",
    reading: "There are two main kinds of fossils: body fossils and trace fossils. Body fossils are parts of living things. Trace fossils are signs of what living things did.",
    question: "How many main kinds of fossils are there, and what are they called?",
    sample: "There are two main kinds of fossils: body fossils and trace fossils."
  },
  {
    emoji: "🦷",
    title: "Body fossils",
    reading: "Body fossils are preserved parts of plants or animals. Examples include bones, teeth, skulls, shells, and leaves. They help scientists learn what ancient living things looked like.",
    question: "What are body fossils? Give two examples.",
    sample: "Body fossils are preserved parts of plants or animals. Two examples are bones and teeth (skulls, shells, and leaves are examples too)."
  },
  {
    emoji: "🦶",
    title: "Trace fossils",
    reading: "Trace fossils are marks or evidence left behind by living things. Examples include footprints, tracks, nests, burrows, and fossilized droppings. They can tell us how an animal moved or behaved.",
    question: "What are trace fossils? Give two examples.",
    sample: "Trace fossils are marks or evidence left behind by living things. Two examples are footprints and nests (tracks, burrows, and fossilized droppings are examples too)."
  },
  {
    emoji: "🦷",
    title: "A tooth",
    reading: "A tooth is part of an animal's body. Fossil teeth can help scientists learn about an animal's size and the kinds of food it may have eaten.",
    question: "What type of fossil is a tooth: body fossil or trace fossil?",
    sample: "A tooth is a body fossil, because it is a part of an animal's body."
  },
  {
    emoji: "🪺",
    title: "A nest",
    reading: "A nest is a place an animal made or used. A fossil nest is evidence of an animal's activity, rather than a body part.",
    question: "What type of fossil is a nest: body fossil or trace fossil?",
    sample: "A nest is a trace fossil, because it is evidence of what an animal did, not a body part."
  },
  {
    emoji: "👣",
    title: "Tracks",
    reading: "Tracks and footprints are marks left by animals as they moved across soft ground. If the marks are preserved, they can become trace fossils.",
    question: "What type of fossil are tracks: body fossils or trace fossils?",
    sample: "Tracks are trace fossils, because they are marks left behind by an animal as it moved."
  },
  {
    emoji: "💀",
    title: "A skull",
    reading: "A skull is part of an animal's skeleton. When it is preserved, it is a body fossil. Skulls can give clues about an animal's body and senses.",
    question: "What type of fossil is a skull: body fossil or trace fossil?",
    sample: "A skull is a body fossil, because it is part of an animal's skeleton."
  },
  {
    emoji: "🔬",
    title: "What is paleontology?",
    reading: "Paleontology is the study of ancient life through fossils. Paleontologists search for, carefully uncover, and study fossils to learn about plants and animals from long ago.",
    question: "What is paleontology?",
    sample: "Paleontology is the study of ancient life through fossils."
  },
  {
    emoji: "🧩",
    title: "The fossil record puzzle",
    reading: "Scientists rarely find every bone or every clue from an ancient living thing. Sometimes they find only a tooth, a bone, or a footprint. They put many clues together, like pieces of a giant jigsaw puzzle.",
    question: "Why is the fossil record like a big jigsaw puzzle with many missing pieces?",
    sample: "Because scientists rarely find every bone or clue. They find only a few pieces, like a tooth or a footprint, and put the clues together."
  },
  {
    emoji: "🧑‍🔬",
    title: "Who is Ross MacPhee?",
    reading: "Ross MacPhee is a scientist and paleontologist associated with the American Museum of Natural History. He studies fossils and ancient animals.",
    question: "Who is Ross MacPhee?",
    sample: "Ross MacPhee is a paleontologist at the American Museum of Natural History who studies fossils and ancient animals."
  },
  {
    emoji: "🧭",
    title: "Why collect fossil evidence?",
    reading: "Fossils give scientists clues about ancient life and how Earth has changed. By comparing fossils from different places, scientists can investigate where ancient animals lived and how places were connected.",
    question: "Why does Ross MacPhee collect evidence from Earth's fossils?",
    sample: "He collects fossil evidence to find clues about ancient life and how Earth has changed, and to compare where ancient animals lived."
  },
  {
    emoji: "🌍",
    title: "Antarctica and Madagascar",
    reading: "The original webquest describes a tiny fossil tooth found in Antarctica that was similar to one found in Madagascar. Such clues can help scientists investigate how ancient animals and land areas were connected long ago.",
    question: "How could ancient animals have become separated by hundreds of miles of ocean?",
    sample: "Long ago the land areas may have been connected, so the animals could move between them. Later the land moved apart, leaving the animals separated by ocean."
  },
  {
    emoji: "🎓",
    title: "A career in science",
    reading: "Scientists ask questions, observe carefully, collect evidence, and keep learning. Curiosity, patience, teamwork, and careful thinking are useful in science.",
    question: "What qualities or actions could help someone prepare for a career in science?",
    sample: "Being curious, asking questions, observing carefully, collecting evidence, being patient, working with a team, and keeping on learning."
  }
];

const QUIZ = [
  {
    type: "single",
    prompt: "Which is an example of a body fossil?",
    options: ["A footprint", "A tooth", "A nest", "A track"],
    correct: [1],
    why: "A tooth is a part of an animal's body, so it is a body fossil. Footprints, nests, and tracks are trace fossils."
  },
  {
    type: "single",
    prompt: "Which is an example of a trace fossil?",
    options: ["A skull", "A shell", "A footprint", "A tooth"],
    correct: [2],
    why: "A footprint is evidence left behind by an animal, so it is a trace fossil. Skulls, shells, and teeth are body fossils."
  },
  {
    type: "single",
    prompt: "What does a paleontologist study?",
    options: ["Weather today", "Ancient life through fossils", "The planets", "Modern buildings"],
    correct: [1],
    why: "Paleontology is the study of ancient life through fossils."
  },
  {
    type: "single",
    prompt: "Why do scientists compare fossils from different places?",
    options: [
      "To learn clues about ancient life and Earth's past",
      "To make fossils grow",
      "To change the age of rocks",
      "To bring extinct animals back"
    ],
    correct: [0],
    why: "Comparing fossils gives clues about ancient life and how Earth has changed."
  },
  {
    type: "tf",
    prompt: "True or false: A fossil can be evidence of an animal's activity.",
    options: ["True", "False"],
    correct: [0],
    why: "True. Trace fossils, like footprints and nests, are evidence of what an animal did."
  },
  {
    type: "tf",
    prompt: "True or false: A fossil record contains every clue from every ancient living thing.",
    options: ["True", "False"],
    correct: [1],
    why: "False. Many pieces of the fossil record are missing — scientists put the clues together like a jigsaw puzzle."
  },
  {
    type: "multi",
    prompt: "Select all the examples of trace fossils.",
    options: ["Footprints", "Nests", "Teeth", "Burrows"],
    correct: [0, 1, 3],
    why: "Footprints, nests, and burrows are trace fossils. Teeth are body fossils."
  },
  {
    type: "multi",
    prompt: "Select all the things fossils can help scientists investigate.",
    options: [
      "What ancient animals looked like",
      "How animals moved",
      "What Earth's past was like",
      "What a person will do tomorrow"
    ],
    correct: [0, 1, 2],
    why: "Fossils help scientists investigate appearance, movement, and Earth's past — not what a person will do tomorrow."
  }
];

const LETTERS = ["A", "B", "C", "D"];

/* ---------- storage ---------- */
const STORE_KEY = "fossilDetectives.v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return { done: {}, best: null, lastScore: null };
    const parsed = JSON.parse(raw);
    return {
      done: parsed && typeof parsed.done === "object" && parsed.done ? parsed.done : {},
      best: typeof parsed.best === "number" ? parsed.best : null,
      lastScore: typeof parsed.lastScore === "number" ? parsed.lastScore : null
    };
  } catch (err) {
    return { done: {}, best: null, lastScore: null };
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch (err) {
    /* private mode or full storage: the site still works, answers just are not kept */
  }
}

/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === null || value === undefined || value === false) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "html") node.innerHTML = value;
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value === true ? "" : value);
  }
  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child.nodeType ? child : document.createTextNode(String(child)));
  }
  return node;
}

let toastTimer = null;
function toast(message) {
  const box = $("#toast");
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove("show"), 2200);
}

function answeredCount() {
  return CARDS.reduce((n, _card, i) => n + (state.done[i] ? 1 : 0), 0);
}

/* ---------- navigation ---------- */
const SCREENS = ["home", "research", "quiz", "teacher"];
let currentScreen = "home";

function go(screen) {
  if (!SCREENS.includes(screen)) screen = "home";
  currentScreen = screen;
  for (const name of SCREENS) {
    const section = $("#screen-" + name);
    if (section) section.hidden = name !== screen;
  }
  $$(".navbtn").forEach((btn) => {
    const target = btn.dataset.go;
    if (target === screen) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  if (screen === "research") renderResearch();
  if (screen === "quiz") renderQuiz();
  if (screen === "teacher") renderTeacher();
  if (screen === "home") renderHomeMeta();
  window.scrollTo(0, 0);
  const heading = $("#screen-" + screen + " h1");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
  if (location.hash !== "#" + screen) {
    try {
      history.replaceState(null, "", "#" + screen);
    } catch (err) {
      /* some browsers block history changes on file:// — navigation still works */
    }
  }
}

/* ---------- home ---------- */
function renderHomeMeta() {
  const done = answeredCount();
  $("#researchMeta").textContent = done + " of " + CARDS.length + " answered";
  const quizMeta = $("#quizMeta");
  if (state.best !== null) quizMeta.textContent = "Best score: " + state.best + " of " + QUIZ.length;
  else if (state.lastScore !== null) quizMeta.textContent = "Last score: " + state.lastScore + " of " + QUIZ.length;
  else quizMeta.textContent = "Not started yet";
}

/* ---------- research ---------- */
let cardIndex = 0;

function renderResearch() {
  renderCardMap();
  renderCard(cardIndex);
  updateResearchProgress();
}

function renderCardMap() {
  const map = $("#cardMap");
  map.replaceChildren();
  CARDS.forEach((card, i) => {
    const done = !!state.done[i];
    const btn = el("button", {
      type: "button",
      class: "mapdot" + (done ? " done" : "") + (i === cardIndex ? " current" : ""),
      "aria-label": "Stop " + (i + 1) + ": " + card.title + (done ? " (answered)" : ""),
      "aria-current": i === cardIndex ? "true" : null,
      text: String(i + 1),
      onclick: () => {
        cardIndex = i;
        renderResearch();
        $("#researchCard").scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
    map.append(btn);
  });
}

function updateResearchProgress() {
  const done = answeredCount();
  const total = CARDS.length;
  $("#researchCount").textContent = done + " of " + total + " answered";
  $("#researchFill").style.width = (done / total) * 100 + "%";
  const bar = $("#researchBar");
  bar.setAttribute("aria-valuenow", String(done));
  bar.setAttribute("aria-valuemax", String(total));
  $("#prevCard").disabled = cardIndex === 0;
  const next = $("#nextCard");
  next.textContent = cardIndex === total - 1 ? "Go to the quiz →" : "Next stop →";
}

function renderCard(index) {
  const card = CARDS[index];
  const host = $("#researchCard");

  const tickBox = el("input", { type: "checkbox", id: "tickBox" });
  tickBox.checked = !!state.done[index];

  const tick = el("label", { class: "tick" + (tickBox.checked ? " on" : "") },
    tickBox,
    el("span", { text: "I wrote this answer in my notebook" })
  );

  tickBox.addEventListener("change", () => {
    if (tickBox.checked) state.done[index] = true;
    else delete state.done[index];
    saveState();
    tick.classList.toggle("on", tickBox.checked);
    renderCardMap();
    updateResearchProgress();
    renderHomeMeta();
    toast(tickBox.checked
      ? "Great — stop " + (index + 1) + " is done!"
      : "Stop " + (index + 1) + " is not finished yet.");
  });

  const sample = el("details", { class: "sample" },
    el("summary", { text: "Check a sample answer" }),
    el("p", { text: card.sample })
  );

  host.replaceChildren(
    el("div", { class: "card-top" },
      el("span", { class: "card-emoji", "aria-hidden": "true", text: card.emoji }),
      el("div", {},
        el("p", { class: "card-step", text: "Stop " + (index + 1) + " of " + CARDS.length }),
        el("h2", { text: card.title })
      )
    ),
    el("div", { class: "reading" }, el("p", { text: card.reading })),
    el("div", { class: "qbox" },
      el("h3", { id: "questionText" }, el("span", { class: "qmark", text: "? " }), card.question),
      el("div", { class: "notebook" },
        el("span", { class: "notebook-icon", "aria-hidden": "true", text: "📓" }),
        el("p", {},
          el("strong", { text: "Write your answer in your notebook. " }),
          "Use a complete sentence. Then read it once more, and tick the box."
        )
      ),
      tick
    ),
    el("p", { class: "talk" },
      el("strong", { text: "Turn and talk: " }),
      "What clue in the reading helped you answer?"
    ),
    sample
  );
}

/* ---------- quiz ---------- */
let quizIndex = 0;
let quizPicks = [];
let quizChecked = [];
let quizDone = false;

function resetQuiz() {
  quizIndex = 0;
  quizPicks = QUIZ.map(() => []);
  quizChecked = QUIZ.map(() => false);
  quizDone = false;
}

function renderQuiz() {
  if (!quizPicks.length) resetQuiz();
  const shell = $("#quizShell");
  if (quizDone) {
    renderResults(shell);
    return;
  }
  const q = QUIZ[quizIndex];
  const picked = quizPicks[quizIndex];
  const checked = quizChecked[quizIndex];

  $("#quizCount").textContent = "Question " + (quizIndex + 1) + " of " + QUIZ.length;
  $("#quizFill").style.width = (quizIndex / QUIZ.length) * 100 + "%";
  $("#quizBar").setAttribute("aria-valuenow", String(quizIndex));

  const options = el("div", { class: "options", role: "group", "aria-labelledby": "quizPrompt" });

  q.options.forEach((label, i) => {
    const isPicked = picked.includes(i);
    const isRight = q.correct.includes(i);
    let cls = "opt";
    if (checked) {
      if (isRight) cls += " correct";
      else if (isPicked) cls += " wrong";
    }
    const btn = el("button", {
      type: "button",
      class: cls,
      "aria-pressed": isPicked ? "true" : "false",
      disabled: checked,
      onclick: () => {
        if (q.type === "multi") {
          const at = quizPicks[quizIndex].indexOf(i);
          if (at >= 0) quizPicks[quizIndex].splice(at, 1);
          else quizPicks[quizIndex].push(i);
        } else {
          quizPicks[quizIndex] = [i];
        }
        renderQuiz();
      }
    },
    el("span", { class: "key", "aria-hidden": "true", text: q.type === "tf" ? (i === 0 ? "T" : "F") : LETTERS[i] }),
    el("span", { text: label })
  );
    options.append(btn);
  });

  const feedback = el("div", { class: "feedback", id: "quizFeedback", role: "status", hidden: true });
  if (checked) {
    const isCorrect = sameSet(picked, q.correct);
    feedback.hidden = false;
    feedback.className = "feedback " + (isCorrect ? "good" : "bad");
    feedback.append(
      el("strong", { text: isCorrect ? "✅ Correct!" : "💡 Not quite — here's the answer." }),
      el("span", { text: q.why })
    );
  }

  const checkBtn = el("button", {
    class: "btn btn-teal",
    type: "button",
    text: "Check answer",
    disabled: picked.length === 0 || checked,
    onclick: () => {
      quizChecked[quizIndex] = true;
      renderQuiz();
      const fb = $("#quizFeedback");
      if (fb) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  });

  const nextBtn = el("button", {
    class: "btn btn-primary",
    type: "button",
    text: quizIndex === QUIZ.length - 1 ? "See my score →" : "Next question →",
    hidden: !checked,
    onclick: () => {
      if (quizIndex === QUIZ.length - 1) {
        finishQuiz();
      } else {
        quizIndex += 1;
        renderQuiz();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });

  const backBtn = el("button", {
    class: "btn btn-ghost",
    type: "button",
    text: "← Back",
    disabled: quizIndex === 0,
    onclick: () => {
      quizIndex -= 1;
      renderQuiz();
    }
  });

  shell.replaceChildren(
    el("div", { class: "qcard" },
      el("p", { class: "qnum", text: "Question " + (quizIndex + 1) + " of " + QUIZ.length }),
      el("h2", { id: "quizPrompt", text: q.prompt }),
      q.type === "multi" ? el("p", { class: "qhint", text: "Choose every correct answer, then check." }) : null,
      options,
      feedback,
      el("div", { class: "qfoot" }, backBtn, el("div", { class: "qfoot-right" }, checkBtn, nextBtn))
    )
  );
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);
  return sortedA.every((v, i) => v === sortedB[i]);
}

function finishQuiz() {
  const score = QUIZ.reduce((n, q, i) => n + (sameSet(quizPicks[i], q.correct) ? 1 : 0), 0);
  state.lastScore = score;
  if (state.best === null || score > state.best) state.best = score;
  saveState();
  quizDone = true;
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderResults(shell) {
  const score = QUIZ.reduce((n, q, i) => n + (sameSet(quizPicks[i], q.correct) ? 1 : 0), 0);
  const total = QUIZ.length;
  const pct = score / total;
  const stars = pct === 1 ? "⭐⭐⭐" : pct >= 0.75 ? "⭐⭐" : pct >= 0.5 ? "⭐" : "🌱";
  const msg = pct === 1
    ? "Perfect score! You are a true fossil detective."
    : pct >= 0.75
      ? "Great work! You know a lot about fossils."
      : pct >= 0.5
        ? "Good start! Read the research cards again and try once more."
        : "Keep going! Visit the Research Lab, then try the quiz again.";

  $("#quizCount").textContent = "Quiz finished";
  $("#quizFill").style.width = "100%";
  $("#quizBar").setAttribute("aria-valuenow", String(total));

  const review = el("div", { class: "review" }, el("h3", { text: "Your answers" }));
  const list = el("ul");
  QUIZ.forEach((q, i) => {
    const ok = sameSet(quizPicks[i], q.correct);
    const right = q.correct.map((c) => q.options[c]).join(", ");
    list.append(
      el("li", {},
        el("span", { class: "tag " + (ok ? "ok" : "no"), text: ok ? "✓ " : "✗ " }),
        el("strong", { text: (i + 1) + ". " }),
        q.prompt + " ",
        ok ? null : el("span", { text: "Correct answer: " + right + "." })
      )
    );
  });
  review.append(list);

  shell.replaceChildren(
    el("div", { class: "result" },
      el("p", { class: "eyebrow", text: "Your score" }),
      el("p", { class: "big", text: score + " / " + total }),
      el("p", { class: "stars", "aria-hidden": "true", text: stars }),
      el("p", { class: "msg", text: msg }),
      el("div", { class: "qfoot", style: "justify-content:center" },
        el("button", {
          class: "btn btn-primary",
          type: "button",
          text: "Try the quiz again",
          onclick: () => { resetQuiz(); renderQuiz(); window.scrollTo({ top: 0, behavior: "smooth" }); }
        }),
        el("button", {
          class: "btn btn-ghost",
          type: "button",
          text: "Back to Research Lab",
          onclick: () => go("research")
        })
      ),
      review
    )
  );
}

/* ---------- print sheet ---------- */
function buildPrintSheet() {
  const sheet = $("#printSheet");
  const lines = () => el("div", { class: "plines" },
    el("div", { class: "pline" }), el("div", { class: "pline" }), el("div", { class: "pline" })
  );
  const items = CARDS.map((card, i) =>
    el("div", { class: "pitem" },
      el("p", { class: "pq", text: (i + 1) + ". " + card.question }),
      lines()
    )
  );
  sheet.replaceChildren(
    el("h1", { text: "Fossil Detectives — Notebook Sheet" }),
    el("p", { class: "psub", text: "Name: ______________________________     Date: ______________" }),
    el("p", { class: "psub", text: "Read each card on the website, then write your answer on the lines." }),
    ...items
  );
}

/* ---------- teacher ---------- */
function renderTeacher() {
  const host = $("#teacherContent");
  if (host.dataset.ready === "1") return;

  const keyList = el("ol");
  QUIZ.forEach((q) => {
    keyList.append(
      el("li", {},
        el("span", { class: "ans", text: q.correct.map((c) => q.options[c]).join(", ") }),
        " — " + q.why
      )
    );
  });

  const researchList = el("ol");
  CARDS.forEach((card) => {
    researchList.append(
      el("li", {}, el("strong", { text: card.title + ": " }), card.sample)
    );
  });

  host.append(
    el("div", { class: "tcard" },
      el("h2", { text: "Quiz answer key" }),
      el("p", { text: "8 questions. Questions 7 and 8 have more than one correct answer." }),
      keyList
    ),
    el("div", { class: "tcard" },
      el("h2", { text: "How to run the lesson" }),
      el("ul", {},
        el("li", { text: "Students can work independently: each research card has one short reading and one question." }),
        el("li", { text: "Students write every answer in their science notebook, then tick the box on each card; the tick marks are saved on that device." }),
        el("li", { text: "The sample answer is hidden behind a click, so students try first." }),
        el("li", { text: "“Print worksheet” gives a blank sheet with all 15 questions and writing lines, for students who prefer paper." }),
        el("li", { text: "The quiz gives instant feedback and a score out of 8, with a review of every question." }),
        el("li", { text: "“Turn and talk” prompts work well as a partner or whole-class discussion after each card." })
      )
    ),
    el("div", { class: "tcard" },
      el("h2", { text: "Research sample answers" }),
      el("p", { text: "Accept any answer that names the same clue in the student's own words." }),
      researchList
    ),
    el("div", { class: "tcard" },
      el("h2", { text: "Standards & vocabulary" }),
      el("ul", {},
        el("li", { text: "fossil, body fossil, trace fossil, paleontology, paleontologist, fossil record, evidence" }),
        el("li", { text: "Skills: reading for information, answering in complete sentences, comparing and classifying." }),
        el("li", { text: "Science practice: asking questions, collecting evidence, and explaining with evidence." })
      ),
      el("p", { style: "margin-top:1rem" },
        el("button", {
          class: "btn btn-ghost",
          type: "button",
          text: "Clear saved progress and quiz scores",
          onclick: () => {
            if (!window.confirm("Delete every saved tick and quiz score on this device?")) return;
            state = { done: {}, best: null, lastScore: null };
            saveState();
            cardIndex = 0;
            resetQuiz();
            renderHomeMeta();
            toast("Saved progress cleared.");
          }
        })
      )
    )
  );
  host.dataset.ready = "1";
}

/* ---------- wiring ---------- */
function init() {
  $$("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.go));
  });
  $("#brandBtn").addEventListener("click", () => go("home"));

  $("#prevCard").addEventListener("click", () => {
    if (cardIndex > 0) {
      cardIndex -= 1;
      renderResearch();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  $("#nextCard").addEventListener("click", () => {
    if (cardIndex < CARDS.length - 1) {
      cardIndex += 1;
      renderResearch();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      go("quiz");
    }
  });

  $("#printNotes").addEventListener("click", () => {
    const done = answeredCount();
    if (!done) {
      toast("Answer at least one question first.");
      return;
    }
    buildPrintSheet();
    window.print();
  });

  // Ctrl+P should print the notes sheet too, not a blank page.
  window.addEventListener("beforeprint", buildPrintSheet);

  window.addEventListener("hashchange", () => {
    const name = location.hash.replace("#", "");
    if (SCREENS.includes(name) && name !== currentScreen) go(name);
  });

  const start = location.hash.replace("#", "");
  go(SCREENS.includes(start) ? start : "home");
  renderHomeMeta();
}

document.addEventListener("DOMContentLoaded", init);

