const questions = [
  {
    question: "What does CPU stand for?",
    answers: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Computer Processing User"],
    correct: 0
  },
  {
    question: "Which component is known as the brain of the computer?",
    answers: ["RAM", "CPU", "SSD", "Monitor"],
    correct: 1
  },
  {
    question: "Which component provides temporary memory?",
    answers: ["SSD", "RAM", "CPU", "Power Supply"],
    correct: 1
  },
  {
    question: "Which storage device is generally faster?",
    answers: ["SSD", "Floppy Disk", "CD", "Tape"],
    correct: 0
  },
  {
    question: "What does RAM stand for?",
    answers: ["Random Access Memory", "Read Access Module", "Rapid Application Memory", "Random Application Module"],
    correct: 0
  },
  {
    question: "Which device is used to type text?",
    answers: ["Mouse", "Keyboard", "Monitor", "Speaker"],
    correct: 1
  },
  {
    question: "Which device controls the pointer?",
    answers: ["Mouse", "Printer", "RAM", "CPU"],
    correct: 0
  },
  {
    question: "Which device displays images?",
    answers: ["Keyboard", "Monitor", "SSD", "CPU"],
    correct: 1
  },
  {
    question: "What is the main purpose of a power supply?",
    answers: ["Store files", "Provide electrical power", "Display images", "Process data"],
    correct: 1
  },
  {
    question: "Which component helps cool the CPU?",
    answers: ["CPU fan", "Keyboard", "RAM", "SSD"],
    correct: 0
  },

  {
    question: "What does USB stand for?",
    answers: ["Universal Serial Bus", "United System Board", "Universal Storage Box", "User Serial Bridge"],
    correct: 0
  },
  {
    question: "Which component connects many internal computer components together?",
    answers: ["Motherboard", "Mouse", "Monitor", "Speaker"],
    correct: 0
  },
  {
    question: "What is the motherboard?",
    answers: ["The main circuit board", "A storage device", "A display device", "A cooling device"],
    correct: 0
  },
  {
    question: "Which component stores data even when power is turned off?",
    answers: ["RAM", "SSD", "Cache", "Register"],
    correct: 1
  },
  {
    question: "Which one is an input device?",
    answers: ["Keyboard", "Monitor", "Speaker", "Projector"],
    correct: 0
  },
  {
    question: "Which one is an output device?",
    answers: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    correct: 2
  },
  {
    question: "What does GPU stand for?",
    answers: ["Graphics Processing Unit", "General Processing Utility", "Graphics Power Unit", "General Program Unit"],
    correct: 0
  },
  {
    question: "What is a GPU mainly designed to process?",
    answers: ["Graphics", "Keyboard input", "Power", "Sound cables"],
    correct: 0
  },
  {
    question: "Which component can contain multiple CPU cores?",
    answers: ["Processor", "Keyboard", "Monitor", "Mouse"],
    correct: 0
  },
  {
    question: "What does HDMI commonly transmit?",
    answers: ["Audio and video", "Electricity only", "Keyboard signals only", "Internet only"],
    correct: 0
  },

  {
    question: "Which device can print documents on paper?",
    answers: ["Printer", "RAM", "CPU", "Router"],
    correct: 0
  },
  {
    question: "Which device scans physical documents?",
    answers: ["Scanner", "Speaker", "Monitor", "CPU"],
    correct: 0
  },
  {
    question: "Which device produces sound?",
    answers: ["Speaker", "Monitor", "Keyboard", "SSD"],
    correct: 0
  },
  {
    question: "What is a computer case used for?",
    answers: ["Housing computer components", "Typing", "Displaying images", "Printing"],
    correct: 0
  },
  {
    question: "What is thermal paste used for?",
    answers: ["Improve heat transfer", "Store data", "Provide internet", "Clean the keyboard"],
    correct: 0
  },
  {
    question: "Which component supplies power to the motherboard and other parts?",
    answers: ["PSU", "GPU", "RAM", "Monitor"],
    correct: 0
  },
  {
    question: "What does PSU stand for?",
    answers: ["Power Supply Unit", "Processor System Unit", "Power Storage Utility", "Personal Supply Unit"],
    correct: 0
  },
  {
    question: "Which technology allows devices to connect wirelessly to a local network?",
    answers: ["Wi-Fi", "HDMI", "SATA", "USB"],
    correct: 0
  },
  {
    question: "What is Bluetooth mainly used for?",
    answers: ["Short-range wireless connections", "Cooling the CPU", "Storing files", "Displaying graphics"],
    correct: 0
  },
  {
    question: "What is an operating system?",
    answers: ["Software that manages computer resources", "A keyboard", "A processor", "A power cable"],
    correct: 0
  },

  {
    question: "Which is an example of an operating system?",
    answers: ["Windows", "HDMI", "RAM", "USB"],
    correct: 0
  },
  {
    question: "What does SSD stand for?",
    answers: ["Solid State Drive", "System Storage Device", "Solid System Disk", "Storage Software Drive"],
    correct: 0
  },
  {
    question: "What does HDD stand for?",
    answers: ["Hard Disk Drive", "High Data Device", "Hardware Data Disk", "Hard Digital Drive"],
    correct: 0
  },
  {
    question: "Which storage device traditionally uses spinning magnetic disks?",
    answers: ["HDD", "SSD", "RAM", "USB cable"],
    correct: 0
  },
  {
    question: "What is a computer network?",
    answers: ["Connected devices that communicate", "A type of keyboard", "A cooling system", "A processor"],
    correct: 0
  },
  {
    question: "Which device commonly connects devices to a network?",
    answers: ["Router", "Monitor", "Keyboard", "Printer cartridge"],
    correct: 0
  },
  {
    question: "What is a web browser used for?",
    answers: ["Accessing websites", "Cooling the CPU", "Storing electricity", "Printing circuits"],
    correct: 0
  },
  {
    question: "Which is a web browser?",
    answers: ["Chrome", "Windows", "RAM", "SSD"],
    correct: 0
  },
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "High Tech Machine Language", "Hyperlink Text Management Language", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "What is CSS mainly used for?",
    answers: ["Styling web pages", "Processing CPU instructions", "Storing files", "Providing electricity"],
    correct: 0
  },

  {
    question: "What is JavaScript commonly used for on websites?",
    answers: ["Adding interactivity", "Providing electricity", "Cooling hardware", "Manufacturing CPUs"],
    correct: 0
  },
  {
    question: "Which symbol is commonly used for a JavaScript comment on one line?",
    answers: ["//", "##", "<!--", "**"],
    correct: 0
  },
  {
    question: "What is a variable in programming?",
    answers: ["A named place for storing a value", "A computer cable", "A monitor type", "A power supply"],
    correct: 0
  },
  {
    question: "What is a function in programming?",
    answers: ["A reusable block of instructions", "A storage drive", "A computer screen", "A network cable"],
    correct: 0
  },
  {
    question: "What is debugging?",
    answers: ["Finding and fixing problems in code", "Cleaning a monitor", "Installing RAM", "Charging a laptop"],
    correct: 0
  },
  {
    question: "What is GitHub commonly used for?",
    answers: ["Hosting and managing code projects", "Printing documents", "Cooling computers", "Making power supplies"],
    correct: 0
  },
  {
    question: "What is a repository on GitHub?",
    answers: ["A project space for files and code", "A computer processor", "A type of RAM", "A monitor"],
    correct: 0
  },
  {
    question: "What does URL mean?",
    answers: ["Uniform Resource Locator", "Universal Router Link", "User Resource Language", "Uniform Register Link"],
    correct: 0
  },
  {
    question: "What is an IP address used for?",
    answers: ["Identifying a device/interface on a network", "Cooling a CPU", "Storing photos", "Displaying videos"],
    correct: 0
  },
  {
    question: "What is cybersecurity?",
    answers: ["Protecting systems and data from digital threats", "Building monitors", "Installing keyboards", "Designing power cables"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let time = 15;
let timer;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("question-number");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

// Shuffle questions
function shuffleQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

// Start a new round
function startRound() {
  shuffleQuestions();
  currentQuestion = 0;
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);

  const current = questions[currentQuestion];

  questionEl.textContent = current.question;
  questionNumberEl.textContent =
    `Question ${currentQuestion + 1}/50`;

  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextButton.style.display = "none";

  current.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;
    button.className = "answer";

    button.onclick = () => checkAnswer(index);

    answersEl.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  time = 15;
  timerEl.textContent = time;

  timer = setInterval(() => {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      checkAnswer(-1);
    }
  }, 1000);
}

function checkAnswer(selected) {
  clearInterval(timer);

  const current = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (selected === current.correct) {
    score++;
    scoreEl.textContent = score;

    feedbackEl.textContent = "✅ Correct!";
    buttons[selected].classList.add("correct");

  } else {
    feedbackEl.textContent =
      "❌ Wrong! Correct answer: " +
      current.answers[current.correct];

    if (selected >= 0) {
      buttons[selected].classList.add("wrong");
    }

    buttons[current.correct].classList.add("correct");
  }

  nextButton.style.display = "inline-block";
}

nextButton.onclick = () => {

  currentQuestion++;

  // After question 50, start another round
  if (currentQuestion >= questions.length) {
    shuffleQuestions();
    currentQuestion = 0;
  }

  loadQuestion();
};

// Start game
shuffleQuestions();
loadQuestion();
