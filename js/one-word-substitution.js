// Elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const restartQuizBtn = resultBox.querySelector(".buttons .restart");
const quitQuizBtn = resultBox.querySelector(".buttons .quit");
const nextBtn = document.querySelector("footer .next_btn");
const bottomQuesCounter = document.querySelector("footer .total_que");

let timeValue = 15;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

// Question Data
let allQuestions = [
  { question: "A person who loves to collect books", options: ["Philatelist", "Bibliophile", "Numismatist", "Lexicographer"], answer: "Bibliophile" },
  { question: "A place where animals are slaughtered", options: ["Butchery", "Slaughterhouse", "Abbatoir", "Carnage"], answer: "Abbatoir" },
  { question: "A person who eats too much", options: ["Glutton", "Epicure", "Cannibal", "Gourmet"], answer: "Glutton" },
  { question: "A speech made without preparation", options: ["Dialogue", "Extempore", "Debate", "Sermon"], answer: "Extempore" },
  { question: "One who believes in fate", options: ["Optimist", "Fatalist", "Realist", "Pessimist"], answer: "Fatalist" },
  { question: "The study of handwriting", options: ["Calligraphy", "Cartography", "Graphology", "Cryptography"], answer: "Graphology" },
  { question: "A person who helps another to commit a crime", options: ["Assassin", "Accomplice", "Spy", "Partner"], answer: "Accomplice" },
  { question: "A person who knows everything", options: ["Omnipresent", "Omniscient", "Omnipotent", "Intellectual"], answer: "Omniscient" },
  { question: "A government ruled by a king or queen", options: ["Democracy", "Monarchy", "Autocracy", "Plutocracy"], answer: "Monarchy" },
  { question: "Something that cannot be read", options: ["Unreadable", "Illiterate", "Illegible", "Invisible"], answer: "Illegible" },
  { question: "A person who writes dictionaries", options: ["Lexicographer", "Editor", "Grammarian", "Linguist"], answer: "Lexicographer" },
  { question: "A person who studies planets and stars", options: ["Astrologer", "Astronomer", "Scientist", "Meteorologist"], answer: "Astronomer" },
  { question: "A person who draws maps", options: ["Cartographer", "Calligrapher", "Demographer", "Geologist"], answer: "Cartographer" },
  { question: "One who cannot read or write", options: ["Ignorant", "Illiterate", "Blind", "Literate"], answer: "Illiterate" },
  { question: "One who is indifferent to pleasure or pain", options: ["Stoic", "Apathetic", "Callous", "Cynic"], answer: "Stoic" },
  { question: "A person who studies human societies", options: ["Psychologist", "Historian", "Sociologist", "Anthropologist"], answer: "Sociologist" },
  { question: "A person who sells flowers", options: ["Florist", "Botanist", "Gardener", "Herbalist"], answer: "Florist" },
  { question: "A government by the rich", options: ["Aristocracy", "Democracy", "Plutocracy", "Autocracy"], answer: "Plutocracy" },
  { question: "Animals that live on land and water", options: ["Amphibians", "Reptiles", "Mammals", "Insects"], answer: "Amphibians" },
  { question: "A person who believes in God", options: ["Theist", "Atheist", "Agnostic", "Pagan"], answer: "Theist" },
  { question: "A place where weapons are kept", options: ["Library", "Arsenal", "Pantry", "Museum"], answer: "Arsenal" },
  { question: "One who dies for a cause", options: ["Martyr", "Rebel", "Patriot", "Saint"], answer: "Martyr" },
  { question: "One who compiles a dictionary", options: ["Lexicographer", "Novelist", "Publisher", "Author"], answer: "Lexicographer" },
  { question: "Fear of confined places", options: ["Agoraphobia", "Claustrophobia", "Xenophobia", "Hydrophobia"], answer: "Claustrophobia" },
  { question: "One who hates mankind", options: ["Misanthrope", "Misogynist", "Philanderer", "Humanitarian"], answer: "Misanthrope" },
  { question: "One who speaks many languages", options: ["Orator", "Polyglot", "Linguist", "Translator"], answer: "Polyglot" },
  { question: "A person who is always hopeful", options: ["Optimist", "Pessimist", "Realist", "Cynic"], answer: "Optimist" },
  { question: "A person who does not believe in God", options: ["Pagan", "Heathen", "Atheist", "Theist"], answer: "Atheist" },
  { question: "A handwriting that cannot be read", options: ["Readable", "Illegible", "Visible", "Script"], answer: "Illegible" },
  { question: "A story told to explain a moral", options: ["Tale", "Parable", "Myth", "Fable"], answer: "Parable" },
  { question: "An exact copy", options: ["Replica", "Duplicate", "Fax", "Carbon"], answer: "Duplicate" },
  { question: "Study of the skin", options: ["Dermatology", "Pathology", "Phrenology", "Cardiology"], answer: "Dermatology" },
  { question: "Killing of a king", options: ["Regicide", "Fratricide", "Patricide", "Homicide"], answer: "Regicide" },
  { question: "A place where money is coined", options: ["Mint", "Bank", "Vault", "Treasury"], answer: "Mint" },
  { question: "One who is all powerful", options: ["Omnipresent", "Omniscient", "Omnipotent", "Invincible"], answer: "Omnipotent" },
  { question: "An instrument for viewing distant objects", options: ["Microscope", "Kaleidoscope", "Telescope", "Periscope"], answer: "Telescope" },
  { question: "One who looks on the bright side of things", options: ["Pessimist", "Optimist", "Cynic", "Stoic"], answer: "Optimist" },
  { question: "A play with a sad ending", options: ["Comedy", "Tragedy", "Drama", "Farce"], answer: "Tragedy" },
  { question: "A place where wild animals are kept", options: ["Zoo", "Cage", "Barn", "Aquarium"], answer: "Zoo" },
  { question: "An act of breaking off relations", options: ["Breakup", "Separation", "Estrangement", "Severance"], answer: "Severance" },
  { question: "The science of the mind", options: ["Neurology", "Psychology", "Sociology", "Philosophy"], answer: "Psychology" },
  { question: "A person who makes maps", options: ["Cartographer", "Geographer", "Topographer", "Demographer"], answer: "Cartographer" },
  { question: "A person who opposes war or violence", options: ["Activist", "Pacifist", "Extremist", "Militant"], answer: "Pacifist" },
  { question: "Fear of water", options: ["Hydrophobia", "Xenophobia", "Claustrophobia", "Acrophobia"], answer: "Hydrophobia" },
  { question: "A person who saves money", options: ["Spendthrift", "Economist", "Miser", "Philanthropist"], answer: "Miser" },
  { question: "A building where dead bodies are kept", options: ["Mortuary", "Sanctuary", "Monastery", "Dispensary"], answer: "Mortuary" },
  { question: "A person who repairs water pipes", options: ["Mechanic", "Electrician", "Plumber", "Technician"], answer: "Plumber" },
  { question: "One who lends money at high interest", options: ["Moneylender", "Banker", "Usurer", "Financier"], answer: "Usurer" },
  { question: "A person who treats animals", options: ["Surgeon", "Veterinarian", "Doctor", "Therapist"], answer: "Veterinarian" },
  { question: "A person who never tells the truth", options: ["Liar", "Fraud", "Dishonest", "Imposter"], answer: "Liar" },

                      // ------------------     50 questions      -----------------------

{ question: "A person who introduces performers on the stage", options: ["Narrator", "Conductor", "Host", "Compere"], answer: "Compere" },
{ question: "One who is present everywhere", options: ["Omnipresent", "Omniscient", "Omnipotent", "Ubiquitous"], answer: "Omnipresent" },
{ question: "Fear of being enclosed in a small closed space", options: ["Acrophobia", "Agoraphobia", "Claustrophobia", "Xenophobia"], answer: "Claustrophobia" },
{ question: "A person who is good at telling stories", options: ["Narrator", "Orator", "Storyteller", "Raconteur"], answer: "Raconteur" },
{ question: "One who hates women", options: ["Misogynist", "Misanthrope", "Feminist", "Misogamist"], answer: "Misogynist" },
{ question: "A person who is not sure about God’s existence", options: ["Theist", "Atheist", "Agnostic", "Rationalist"], answer: "Agnostic" },
{ question: "One who knows many languages", options: ["Linguist", "Polyglot", "Translator", "Interpreter"], answer: "Polyglot" },
{ question: "One who dies without a will", options: ["Heir", "Intestate", "Benefactor", "Executor"], answer: "Intestate" },
{ question: "Study of birds", options: ["Zoology", "Biology", "Ornithology", "Ichthyology"], answer: "Ornithology" },
{ question: "An act of speaking one's thoughts aloud when alone", options: ["Dialogue", "Soliloquy", "Monologue", "Debate"], answer: "Soliloquy" },
{ question: "A person who talks too much", options: ["Garrulous", "Taciturn", "Introvert", "Shy"], answer: "Garrulous" },
{ question: "A short, witty remark", options: ["Joke", "Wit", "Epigram", "Satire"], answer: "Epigram" },
{ question: "One who collects coins", options: ["Numismatist", "Philatelist", "Collector", "Archivist"], answer: "Numismatist" },
{ question: "A person who withdraws from the world to live in seclusion", options: ["Hermit", "Ascetic", "Nomad", "Wanderer"], answer: "Hermit" },
{ question: "A job carrying no salary", options: ["Honorary", "Voluntary", "Arbitrary", "Temporary"], answer: "Honorary" },
{ question: "A person who is very selective in eating", options: ["Gourmet", "Glutton", "Epicure", "Connoisseur"], answer: "Epicure" },
{ question: "The use of mild words in place of harsh ones", options: ["Eulogy", "Euphemism", "Proverb", "Maxim"], answer: "Euphemism" },
{ question: "A person who takes the worst possible view", options: ["Optimist", "Pessimist", "Cynic", "Fatalist"], answer: "Pessimist" },
{ question: "That which cannot be avoided", options: ["Evitable", "Inevitable", "Preventable", "Forgivable"], answer: "Inevitable" },
{ question: "A person who is outgoing and social", options: ["Introvert", "Extrovert", "Recluse", "Cynic"], answer: "Extrovert" },
{ question: "Someone who can use both hands with ease", options: ["Ambidextrous", "Skilled", "Balanced", "Bilateral"], answer: "Ambidextrous" },
{ question: "The science of heredity", options: ["Genetics", "Anatomy", "Physiology", "Embryology"], answer: "Genetics" },
{ question: "A person who writes with both hands", options: ["Bilingual", "Ambidextrous", "Dexterous", "Handy"], answer: "Ambidextrous" },
{ question: "A government run by religious leaders", options: ["Autocracy", "Theocracy", "Plutocracy", "Oligarchy"], answer: "Theocracy" },
{ question: "An object that is believed to bring good luck", options: ["Amulet", "Charm", "Talisman", "Totem"], answer: "Talisman" },
{ question: "Animals that live in water", options: ["Aquatic", "Terrestrial", "Amphibian", "Marine"], answer: "Aquatic" },
{ question: "Something that lasts forever", options: ["Perpetual", "Temporal", "Mortal", "Eternal"], answer: "Eternal" },
{ question: "A person who travels from place to place", options: ["Nomad", "Tourist", "Refugee", "Emigrant"], answer: "Nomad" },
{ question: "A person who studies weather", options: ["Meteorologist", "Astronomer", "Geologist", "Physicist"], answer: "Meteorologist" },
{ question: "The killing of one's brother", options: ["Patricide", "Fratricide", "Genocide", "Homicide"], answer: "Fratricide" },
{ question: "The custom of having more than one wife", options: ["Monogamy", "Polygamy", "Bigamy", "Celibacy"], answer: "Polygamy" },
{ question: "A remedy for all ills", options: ["Panacea", "Cure", "Solution", "Antidote"], answer: "Panacea" },
{ question: "One who is difficult to please", options: ["Fastidious", "Arrogant", "Cynical", "Angry"], answer: "Fastidious" },
{ question: "The act of giving up the throne", options: ["Renunciation", "Abdication", "Resignation", "Condemnation"], answer: "Abdication" },
{ question: "A woman whose husband is dead", options: ["Widow", "Spinster", "Divorcee", "Single"], answer: "Widow" },
{ question: "Words spoken impromptu", options: ["Extempore", "Scripted", "Oratory", "Debate"], answer: "Extempore" },
{ question: "Government by a few powerful people", options: ["Democracy", "Oligarchy", "Theocracy", "Plutocracy"], answer: "Oligarchy" },
{ question: "A speech delivered without any previous preparation", options: ["Extempore", "Manuscript", "Elocution", "Dialogue"], answer: "Extempore" },
{ question: "An inscription on a tomb", options: ["Monument", "Plaque", "Epitaph", "Scroll"], answer: "Epitaph" },
{ question: "A person who looks at the dark side of life", options: ["Cynic", "Pessimist", "Realist", "Optimist"], answer: "Pessimist" },
{ question: "A man who is easily tricked", options: ["Fool", "Duffer", "Gullible", "Dunce"], answer: "Gullible" },
{ question: "A person who draws or produces maps", options: ["Geographer", "Cartographer", "Demographer", "Typographer"], answer: "Cartographer" },
{ question: "The science of coins and medals", options: ["Philately", "Numismatics", "Iconography", "Symbology"], answer: "Numismatics" },
{ question: "A formal written charge against a person", options: ["Summon", "Warrant", "Indictment", "Proclamation"], answer: "Indictment" },
{ question: "An animal which lives both on land and in water", options: ["Reptile", "Aquatic", "Amphibian", "Insect"], answer: "Amphibian" },
{ question: "A person who is habitually silent", options: ["Introvert", "Taciturn", "Mute", "Shy"], answer: "Taciturn" },
{ question: "A person who is trained to travel in a spacecraft", options: ["Astronomer", "Cosmonaut", "Astronaut", "Pilot"], answer: "Astronaut" },
{ question: "One who can think about the future with imagination", options: ["Optimist", "Idealist", "Visionary", "Prophet"], answer: "Visionary" },
{ question: "A thing which is fit to be eaten", options: ["Palatable", "Delicious", "Nutritious", "Edible"], answer: "Edible" },

];

let usedQuestions = [];
let questions = [];

function getRandomQuestions(count) {
  const availableQuestions = allQuestions.filter(q => !usedQuestions.includes(q));
  if (availableQuestions.length < count) {
    alert("No more questions available. Please reload the page.");
    return [];
  }
  const shuffled = availableQuestions.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  usedQuestions = usedQuestions.concat(selected);
  return selected;
}

// Event Listeners
startBtn.onclick = () => infoBox.classList.add("activeInfo");
exitBtn.onclick = () => infoBox.classList.remove("activeInfo");

continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  initializeQuiz();
};

restartQuizBtn.onclick = () => {
  resultBox.classList.remove("activeResult");
  quizBox.classList.add("activeQuiz");
  resetQuiz();
  initializeQuiz();
};

quitQuizBtn.onclick = () => window.location.reload();

nextBtn.onclick = () => {
  if (queCount < questions.length - 1) {
    queCount++;
    queNumb++;
    updateQuiz();
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// Functions
function initializeQuiz() {
  questions = getRandomQuestions(10);
  if (questions.length === 0) return; // prevent error if no questions
  showQuestions(queCount);
  queCounter(queNumb);
  startTimer(timeValue);
  widthValue = 0;
  startTimerLine(widthValue);
}

function resetQuiz() {
  timeValue = 15;
  queCount = 0;
  queNumb = 1;
  userScore = 0;
  widthValue = 0;
}

function updateQuiz() {
  showQuestions(queCount);
  queCounter(queNumb);
  clearInterval(counter);
  clearInterval(counterLine);
  timeText.textContent = "Time Left";
  nextBtn.classList.remove("show");

  widthValue = 0;
  startTimer(timeValue);
  startTimerLine(widthValue);
}

function showQuestions(index) {
  const queText = document.querySelector(".que_text");
  let queTag = `<span>Q${index + 1}. ${questions[index].question}</span>`;
  let optionTag = questions[index].options.map(option => `<div class="option"><span>${option}</span></div>`).join('');
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;

  optionList.querySelectorAll(".option").forEach(option => {
    option.onclick = () => optionSelected(option);
  });
}

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[queCount].answer;

  if (userAns === correctAns) {
    userScore++;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
    disableOptions();
    setTimeout(() => nextBtn.click(), 800); // auto move to next
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    highlightCorrectAnswer(correctAns);
    disableOptions();
    nextBtn.classList.add("show");
  }
}

function highlightCorrectAnswer(correctAns) {
  for (let i = 0; i < optionList.children.length; i++) {
    if (optionList.children[i].textContent === correctAns) {
      optionList.children[i].classList.add("correct");
      optionList.children[i].insertAdjacentHTML("beforeend", tickIconTag);
    }
  }
}

function disableOptions() {
  for (let i = 0; i < optionList.children.length; i++) {
    optionList.children[i].classList.add("disabled");
  }
}

function showResult() {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score_text");

  let scoreTag = '';
  if (userScore > 7) {
    scoreTag = `<span>Great Job! 🎉 You got <p>${userScore}</p> out of <p>${questions.length}</p></span> <br>`;
  } else if (userScore > 4) {
    scoreTag = `<span>Nice effort 😎 You got <p>${userScore}</p> out of <p>${questions.length}</p></span> <br>`;
  } else {
    scoreTag = `<span>Keep practicing 😐 You got only <p>${userScore}</p> out of <p>${questions.length}</p></span> <br>`;
  }

  scoreText.innerHTML = scoreTag;
}

function startTimer(time) {
  counter = setInterval(() => {
    timeCount.textContent = time > 9 ? time : `0${time}`;
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Time Off";
      highlightCorrectAnswer(questions[queCount].answer);
      disableOptions();
      nextBtn.classList.add("show");
    }
  }, 1000);
}

function startTimerLine(time) {
  const totalTime = 15 * (1000 / 29);
  counterLine = setInterval(() => {
    time += 1;
    let progressPercentage = (time / totalTime) * 100;
    timeLine.style.width = `${progressPercentage}%`;
    if (time >= totalTime) clearInterval(counterLine);
  }, 29);
}

function queCounter(index) {
  let totalQueCounTag = `<span><p>${index}</p> of <p>${questions.length}</p> Questions</span>`;
  bottomQuesCounter.innerHTML = totalQueCounTag;
}

// Tick and Cross Icons
const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
