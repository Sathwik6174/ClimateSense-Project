const quizData = [
    {
        question: "Which gas is most responsible for global warming?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 1
    },
    {
        question: "ग्लोबल वार्मिंग के लिए कौन सी गैस सबसे अधिक जिम्मेदार है?",
        options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        correct: 1
    },
    {
        question: "భూతాపం (Global Warming) పెరగడానికి ప్రధాన కారణం ఏ వాయువు?",
        options: ["ఆక్సిజన్", "కార్బన్ డయాక్సైడ్", "నైట్రోజన్", "ఆర్గాన్"],
        correct: 1
    },
    {
        question: "What is the main cause of rising sea levels?",
        options: ["Heavy rain", "Melting glaciers", "Ship traffic", "Overfishing"],
        correct: 1
    },
    {
        question: "समुद्र के जल स्तर बढ़ने का मुख्य कारण क्या है?",
        options: ["भारी बारिश", "ग्लेशियरों का पिघलना", "जहाजों का चलना", "अत्यधिक मछली पकड़ना"],
        correct: 1
    },
    {
        question: "సముద్ర మట్టాలు పెరగడానికి ప్రధాన కారణం ఏమిటి?",
        options: ["భారీ వర్షాలు", "మంచు పర్వతాలు కరగడం", "ఓడల రాకపోకలు", "చేపల వేట"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].correct) {
        score++;
    }
    document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerText = score + " / " + quizData.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuiz();
}

//Praying god and calling the function for the first time :)
loadQuiz();

// Most imp. part of the kahaani...submitting a story by the user actually represents my intent to make this web app successful by letting others know how other conscious ppl are using natural resources sustainably
function submitStory(event) {
    event.preventDefault();

    const name = document.getElementById("user-name").value;
    const story = document.getElementById("user-story").value;

    const storyCard = document.createElement("div");
    storyCard.classList.add("story-card");
    storyCard.innerHTML = `<h4>${name}</h4><p>"${story}"</p>`;

    document.getElementById("story-display").prepend(storyCard);

    document.getElementById("story-form").reset();
    alert("Thank you for sharing your story!");
}

