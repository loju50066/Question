/***********************************************
 * CYBERPUNK QUIZ - 150 SOAL
 * (50 Mudah, 50 Sedang, 50 Sulit)
 * Mode Marathon = Gabungan semua soal (150).
 ***********************************************/

// ====== 1. BANK SOAL (150) ======
let easyQuestions = [
  // 50 soal mudah:
  // 1
  { 
    q: "Tahun berapa Indonesia merdeka?", 
    a: ["1940","1942","1945","1950"], 
    correct: 2 
  },
  // 2
  { 
    q: "Apa nama kerajaan Hindu-Buddha terbesar di Indonesia?", 
    a: ["Majapahit","Sriwijaya","Mataram","Tarumanagara"], 
    correct: 0 
  },
  // 3
  { 
    q: "Siapa presiden pertama Indonesia?", 
    a: ["Soekarno","Suharto","Habibie","Gus Dur"], 
    correct: 0 
  },
  // 4
  { 
    q: "Apa ibu kota Jepang?", 
    a: ["Tokyo","Seoul","Beijing","Bangkok"], 
    correct: 0 
  },
  // 5
  { 
    q: "Apa nama candi Buddha terbesar di Indonesia?", 
    a: ["Prambanan","Borobudur","Mendut","Sewu"], 
    correct: 1 
  },
  // 6
  { 
    q: "Apa nama samudra terbesar di dunia?", 
    a: ["Atlantik","Hindia","Pasifik","Arktik"], 
    correct: 2 
  },
  // 7
  { 
    q: "Siapa pencipta teori gravitasi?", 
    a: ["Isaac Newton","Albert Einstein","Nikola Tesla","Thomas Edison"], 
    correct: 0 
  },
  // 8
  { 
    q: "Apa ibu kota Prancis?", 
    a: ["Berlin","Madrid","Paris","Roma"], 
    correct: 2 
  },
  // 9
  { 
    q: "Apa nama sungai terpanjang di dunia?", 
    a: ["Amazon","Nil","Yangtze","Mississippi"], 
    correct: 1 
  },
  // 10
  { 
    q: "Apa nama alat musik tradisional dari Jawa Barat yang terbuat dari bambu?", 
    a: ["Angklung","Gamelan","Kolintang","Sasando"], 
    correct: 0 
  },
  // 11
  { 
    q: "Siapa ilmuwan yang terkenal dengan teori relativitas?", 
    a: ["Albert Einstein","Isaac Newton","Nikola Tesla","Stephen Hawking"], 
    correct: 0 
  },
  // 12
  { 
    q: "Apa nama benua terkecil di dunia?", 
    a: ["Eropa","Antartika","Australia","Amerika Selatan"], 
    correct: 2 
  },
  // 13
  { 
    q: "Apa nama bangunan terkenal di India yang dibuat sebagai simbol cinta?", 
    a: ["Taj Mahal","Red Fort","Qutub Minar","Hawa Mahal"], 
    correct: 0 
  },
  // 14
  { 
    q: "Apa nama perang besar yang terjadi pada tahun 1939-1945?", 
    a: ["Perang Dunia I","Perang Dunia II","Perang Napoleon","Perang Vietnam"], 
    correct: 1 
  },
  // 15
  { 
    q: "Negara mana yang terkenal dengan Menara Eiffel?", 
    a: ["Jerman","Italia","Prancis","Spanyol"], 
    correct: 2 
  },
  // 16
  { 
    q: "Apa mata uang resmi Indonesia?", 
    a: ["Rupiah","Ringgit","Dollar","Yen"], 
    correct: 0 
  },
  // 17
  { 
    q: "Siapakah presiden Amerika Serikat pertama?", 
    a: ["Abraham Lincoln","George Washington","Thomas Jefferson","John Adams"], 
    correct: 1 
  },
  // 18
  { 
    q: "Apa nama kerajaan Islam pertama di Indonesia?", 
    a: ["Samudera Pasai","Demak","Banten","Mataram"], 
    correct: 0 
  },
  // 19
  { 
    q: "Siapa pahlawan wanita yang memperjuangkan pendidikan bagi perempuan di Indonesia?", 
    a: ["Martha Tiahahu","RA Kartini","Cut Nyak Dien","Dewi Sartika"], 
    correct: 1 
  },
  // 20
  { 
    q: "Di mana letak Piramida Giza?", 
    a: ["India","Mesir","Meksiko","Yunani"], 
    correct: 1 
  },
  // 21
  { 
    q: "Apa nama ibukota Thailand?", 
    a: ["Hanoi","Bangkok","Phnom Penh","Vientiane"], 
    correct: 1 
  },
  // 22
  { 
    q: "Apa nama suku asli yang mendiami Papua?", 
    a: ["Asmat","Dayak","Sunda","Madura"], 
    correct: 0 
  },
  // 23
  { 
    q: "Siapakah penulis buku 'Laskar Pelangi'?", 
    a: ["Andrea Hirata","Tere Liye","Dewi Lestari","Pramoedya A. Toer"], 
    correct: 0 
  },
  // 24
  { 
    q: "Siapa yang melukis 'Mona Lisa'?", 
    a: ["Van Gogh","Picasso","Leonardo da Vinci","Rembrandt"], 
    correct: 2 
  },
  // 25
  { 
    q: "Negara mana yang dikenal sebagai Negeri Tirai Bambu?", 
    a: ["Korea Selatan","Jepang","Tiongkok","India"], 
    correct: 2 
  },
  // 26
  { 
    q: "Apa nama kerajaan yang didirikan oleh Raden Wijaya?", 
    a: ["Sriwijaya","Majapahit","Singasari","Tarumanagara"], 
    correct: 1 
  },
  // 27
  { 
    q: "Apa nama tari tradisional dari Bali yang terkenal?", 
    a: ["Kecak","Saman","Piring","Pendet"], 
    correct: 0 
  },
  // 28
  { 
    q: "Siapa yang pertama kali mengelilingi dunia dengan kapal laut?", 
    a: ["Magellan","Columbus","Vasco da Gama","Marco Polo"], 
    correct: 0 
  },
  // 29
  { 
    q: "Apa nama rumah adat suku Toraja?", 
    a: ["Tongkonan","Honai","Joglo","Rumah Gadang"], 
    correct: 0 
  },
  // 30
  { 
    q: "Apa nama perang besar yang terjadi antara Prancis dan Inggris di abad ke-19?", 
    a: ["Napoleonic Wars","Perang Dunia I","Perang 7 Tahun","Perang 100 Tahun"], 
    correct: 0 
  },
  // 31
  { 
    q: "Apa nama negara terkecil di dunia?", 
    a: ["Monako","Malta","Vatikan","San Marino"], 
    correct: 2 
  },
  // 32
  { 
    q: "Apa nama kitab hukum yang dibuat oleh Gajah Mada?", 
    a: ["Kutara Manawa","Negarakertagama","Sarasamuccaya","Arjunawijaya"], 
    correct: 0 
  },
  // 33
  { 
    q: "Apa nama ibukota Korea Selatan?", 
    a: ["Seoul","Busan","Tokyo","Pyongyang"], 
    correct: 0 
  },
  // 34
  { 
    q: "Apa nama benua terbesar di dunia?", 
    a: ["Asia","Afrika","Amerika Utara","Eropa"], 
    correct: 0 
  },
  // 35
  { 
    q: "Apa nama tarian khas dari Sumatera Barat?", 
    a: ["Tari Saman","Tari Piring","Tari Kecak","Tari Tor-Tor"], 
    correct: 1 
  },
  // 36
  { 
    q: "Siapa pahlawan nasional yang dijuluki 'Singa Betawi'?", 
    a: ["Mohammad Hatta","Sutomo","Mohammad Husni Thamrin","Cut Nyak Dien"], 
    correct: 2 
  },
  // 37
  { 
    q: "Apa nama kerajaan terbesar yang pernah ada di Nusantara?", 
    a: ["Sriwijaya","Majapahit","Mataram","Tarumanagara"], 
    correct: 1 
  },
  // 38
  { 
    q: "Apa nama mata uang Jepang?", 
    a: ["Won","Yuan","Baht","Yen"], 
    correct: 3 
  },
  // 39
  { 
    q: "Dimana letak Colosseum?", 
    a: ["Paris, Prancis","Roma, Italia","Berlin, Jerman","London, Inggris"], 
    correct: 1 
  },
  // 40
  { 
    q: "Apa nama peninggalan sejarah berbentuk patung di Pulau Paskah?", 
    a: ["Moai","Sphinx","Mooi","Moho"], 
    correct: 0 
  },
  // 41
  { 
    q: "Apa nama bangunan peninggalan Romawi yang digunakan untuk pertunjukan gladiator?", 
    a: ["Colosseum","Pantheon","Acropolis","Hippodrome"], 
    correct: 0 
  },
  // 42
  { 
    q: "Siapa presiden Indonesia ke-7?", 
    a: ["SBY","Megawati","Joko Widodo","Abdurrahman Wahid"], 
    correct: 2 
  },
  // 43
  { 
    q: "Apa nama alat musik khas dari Pulau Kalimantan?", 
    a: ["Sasando","Angklung","Gamelan","Sape"], 
    correct: 3 
  },
  // 44
  { 
    q: "Apa nama sistem penulisan kuno masyarakat Mesir?", 
    a: ["Pictogram","Sanskerta","Hieroglif","Latin"], 
    correct: 2 
  },
  // 45
  { 
    q: "Apa nama kerajaan yang dipimpin oleh Sultan Agung?", 
    a: ["Mataram","Banten","Demak","Aceh"], 
    correct: 0 
  },
  // 46
  { 
    q: "Apa nama kota yang terkenal dengan Festival Oktoberfest?", 
    a: ["Berlin","Munich","Frankfurt","Hamburg"], 
    correct: 1 
  },
  // 47
  { 
    q: "Apa nama sistem bintang yang menjadi pusat Tata Surya kita?", 
    a: ["Matahari","Alpha Centauri","Sirius","Betelgeuse"], 
    correct: 0 
  },
  // 48
  { 
    q: "Apa nama suku asli yang mendiami Pulau Kalimantan?", 
    a: ["Dayak","Asmat","Toraja","Baduy"], 
    correct: 0 
  },
  // 49
  { 
    q: "Apa nama gunung tertinggi di dunia?", 
    a: ["K2","Kilimanjaro","Everest","Elbrus"], 
    correct: 2 
  },
  // 50
  { 
    q: "Siapa yang menemukan mesin cetak pertama kali?", 
    a: ["Johannes Gutenberg","Thomas Edison","Nikola Tesla","Galileo Galilei"], 
    correct: 0 
  }
];

// 50 soal tingkat Sedang
let mediumQuestions = [
  { q: "Siapa yang mengucapkan sumpah 'Saya akan mempersatukan Nusantara' dalam Sumpah Palapa?", 
    a: ["Hayam Wuruk","Gajah Mada","Raden Wijaya","Adityawarman"], correct: 1 },
  { q: "Apa nama perang terbesar di Asia yang melibatkan Jepang pada Perang Dunia II?", 
    a: ["Perang Pasifik","Perang Korea","Perang Vietnam","Perang Saudara Tiongkok"], correct: 0 },
  { q: "Siapakah penulis buku 'Das Kapital'?", 
    a: ["Karl Marx","Friedrich Engels","Adam Smith","Vladimir Lenin"], correct: 0 },
  { q: "Apa nama perjanjian yang mengakhiri Perang Dunia I?", 
    a: ["Perjanjian Versailles","Perjanjian Tordesillas","Perjanjian Renville","Perjanjian Saragosa"], correct: 0 },
  { q: "Kota manakah yang menjadi pusat pemerintahan Kerajaan Sriwijaya?", 
    a: ["Palembang","Jambi","Medan","Pekanbaru"], correct: 0 },
  // ... (silakan isi hingga total 50)
  { q: "Soal Sedang #6", a: ["A","B","C","D"], correct: 0 },
  { q: "Soal Sedang #7", a: ["A","B","C","D"], correct: 0 },
  // ...
  { q: "Soal Sedang #50", a: ["A","B","C","D"], correct: 0 }
];

// 50 soal tingkat Sulit
let hardQuestions = [
  { q: "Siapa kaisar terakhir dari Kekaisaran Romawi Barat sebelum jatuh ke tangan suku Jermanik?", 
    a: ["Romulus Augustulus","Julius Caesar","Nero","Diocletian"], correct: 0 },
  { q: "Apa nama peradaban kuno yang membangun kota Teotihuacan di Meksiko?", 
    a: ["Aztec","Maya","Teotihuacan","Inca"], correct: 2 },
  { q: "Apa nama naskah kuno yang menjadi dasar hukum Kekaisaran Bizantium?", 
    a: ["Corpus Juris Civilis","Magna Carta","Code of Hammurabi","Table of RongoRongo"], correct: 0 },
  { q: "Siapa yang menemukan vaksin rabies?", 
    a: ["Louis Pasteur","Alexander Fleming","Edward Jenner","Robert Koch"], correct: 0 },
  { q: "Apa nama perang yang terjadi antara Inggris dan Tiongkok karena perdagangan opium?", 
    a: ["Perang Opium","Perang Boxer","Perang Arrow","Perang Sino-Jepang"], correct: 0 },
  // ... (isi hingga total 50)
  { q: "Soal Sulit #6", a: ["A","B","C","D"], correct: 0 },
  // ...
  { q: "Soal Sulit #50", a: ["A","B","C","D"], correct: 0 }
];

// Marathon = gabungan 150 soal
let marathonQuestions = [
  ...easyQuestions,
  ...mediumQuestions,
  ...hardQuestions
];

// Kumpulan soal final
let questions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
  marathon: marathonQuestions
};

// ======================
// 2. VARIABEL GAME
// ======================
let currentLevel = "";
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;

// Ambil elemen HTML
const startScreen  = document.getElementById("start-screen");
const levelScreen  = document.getElementById("level-screen");
const quizScreen   = document.getElementById("quiz-screen");
const gameOverScreen = document.getElementById("game-over");

const questionEl   = document.getElementById("question");
const optionsEl    = document.getElementById("options");
const timerEl      = document.getElementById("time-left");
const scoreEl      = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");

// ======================
// 3. MENU UTAMA
// ======================
function chooseLevel() {
  startScreen.classList.add("hidden");
  levelScreen.classList.remove("hidden");
}
function backToMenu() {
  gameOverScreen.classList.add("hidden");
  levelScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

// ======================
// 4. MULAI GAME
// ======================
function startGame(level) {
  currentLevel = level;
  score = 0;
  currentQuestionIndex = 0;
  levelScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  nextQuestion();
  startTimer();
}

// ======================
// 5. LOAD PERTANYAAN
// ======================
function nextQuestion() {
  resetState();

  if (currentLevel === "marathon") {
    // Mode Marathon => Soal random dari 150 soal
    let randomIndex = Math.floor(Math.random() * questions.marathon.length);
    let qData = questions.marathon[randomIndex];
    displayQuestion(qData);
  } else {
    // Mode level biasa => 50 soal
    if (currentQuestionIndex >= questions[currentLevel].length) {
      endGame();
      return;
    }
    let qData = questions[currentLevel][currentQuestionIndex];
    displayQuestion(qData);
  }
}

function displayQuestion(qData) {
  questionEl.innerText = qData.q;
  qData.a.forEach((opt, i) => {
    let div = document.createElement("div");
    div.classList.add("option");
    div.innerText = opt;
    div.onclick = () => checkAnswer(i, qData.correct, div);
    optionsEl.appendChild(div);
  });
}

function resetState() {
  while (optionsEl.firstChild) {
    optionsEl.removeChild(optionsEl.firstChild);
  }
  timeLeft = 10;
  timerEl.innerText = timeLeft;
  timerEl.classList.remove("low");
  clearInterval(timer);
}

// ======================
// 6. CEK JAWABAN
// ======================
function checkAnswer(selectedIndex, correctIndex, divEl) {
  clearInterval(timer);
  if (selectedIndex === correctIndex) {
    divEl.classList.add("correct");
    score += 10;
    scoreEl.innerText = score;
    setTimeout(() => {
      if (currentLevel !== "marathon") {
        currentQuestionIndex++;
      }
      nextQuestion();
      startTimer();
    }, 1000);
  } else {
    divEl.classList.add("wrong");
    // Marathon => game over jika salah
    if (currentLevel === "marathon") {
      setTimeout(endGame, 1000);
    } else {
      // Level biasa => lanjut walau salah
      setTimeout(() => {
        currentQuestionIndex++;
        nextQuestion();
        startTimer();
      }, 1000);
    }
  }
}

// ======================
// 7. TIMER
// ======================
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;
    if (timeLeft <= 3) {
      timerEl.classList.add("low");
    }
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// ======================
// 8. END GAME
// ======================
function endGame() {
  quizScreen.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  finalScoreEl.innerText = score;
}

function restartGame() {
  gameOverScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  score = 0;
  scoreEl.innerText = score;
  currentQuestionIndex = 0;
  nextQuestion();
  startTimer();
}