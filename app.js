document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');
    const startBtn = document.getElementById('start-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    const questionCategory = document.getElementById('question-category');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const progressBar = document.getElementById('progress');
    const scoreEl = document.getElementById('score');
    const maxScoreEl = document.getElementById('max-score');
    const scoreMessage = document.getElementById('score-message');
    const categoryStats = document.getElementById('category-stats');

    // Game state
    const gameState = {
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        categoryScores: {
            'Characters': { correct: 0, total: 0 },
            'Mysteries': { correct: 0, total: 0 },
            'Running Jokes': { correct: 0, total: 0 },
            'Surprising Facts': { correct: 0, total: 0 }
        },
        totalQuestions: 10
    };

    // Initialize the game
    function initGame() {
        // Reset game state
        gameState.questions = [];
        gameState.currentQuestionIndex = 0;
        gameState.score = 0;
        
        // Reset category scores
        Object.keys(gameState.categoryScores).forEach(category => {
            gameState.categoryScores[category].correct = 0;
            gameState.categoryScores[category].total = 0;
        });

        // Select random questions from each category
        const categories = ['Characters', 'Mysteries', 'Running Jokes', 'Surprising Facts'];
        const questionsPerCategory = Math.ceil(gameState.totalQuestions / categories.length);
        
        categories.forEach(category => {
            const categoryQuestions = triviaQuestions.filter(q => q.category === category);
            const shuffledCategoryQuestions = shuffleArray([...categoryQuestions]);
            gameState.questions.push(...shuffledCategoryQuestions.slice(0, questionsPerCategory));
        });

        // Shuffle all selected questions and trim to total questions count
        gameState.questions = shuffleArray(gameState.questions).slice(0, gameState.totalQuestions);
        
        // Update UI
        totalQuestionsEl.textContent = gameState.totalQuestions;
        maxScoreEl.textContent = gameState.totalQuestions;
    }

    // Shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Load question
    function loadQuestion() {
        const question = gameState.questions[gameState.currentQuestionIndex];
        
        // Update question text and category
        questionText.textContent = question.question;
        questionCategory.textContent = question.category;
        
        // Update progress
        currentQuestionEl.textContent = gameState.currentQuestionIndex + 1;
        const progressPercentage = ((gameState.currentQuestionIndex) / gameState.totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Clear previous answers
        answersContainer.innerHTML = '';
        
        // Create answer buttons
        const allAnswers = [question.correctAnswer, ...question.incorrectAnswers];
        const shuffledAnswers = shuffleArray([...allAnswers]);
        
        shuffledAnswers.forEach(answer => {
            const answerBtn = document.createElement('button');
            answerBtn.classList.add('answer-btn');
            answerBtn.textContent = answer;
            answerBtn.dataset.answer = answer;
            
            answerBtn.addEventListener('click', handleAnswerClick);
            
            answersContainer.appendChild(answerBtn);
        });
        
        // Update category scores
        gameState.categoryScores[question.category].total++;
    }

    // Handle answer click
    function handleAnswerClick(e) {
        const selectedAnswer = e.target.dataset.answer;
        const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        
        // Disable all answer buttons
        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach(btn => {
            btn.removeEventListener('click', handleAnswerClick);
            btn.disabled = true;
            
            // Highlight correct and incorrect answers
            if (btn.dataset.answer === currentQuestion.correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.dataset.answer === selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Show source and explanation information
        const sourceInfo = document.createElement('div');
        sourceInfo.classList.add('source-info');
        sourceInfo.innerHTML = `
            <p><strong>Source:</strong> ${currentQuestion.source}</p>
            <p>${currentQuestion.explanation}</p>
        `;
        sourceInfo.style.display = 'block';
        answersContainer.appendChild(sourceInfo);
        
        // Update score if correct
        if (isCorrect) {
            gameState.score++;
            gameState.categoryScores[currentQuestion.category].correct++;
            
            // Add pulse animation to correct answer
            e.target.classList.add('pulse');
        }
        
        // Move to next question after delay
        setTimeout(() => {
            gameState.currentQuestionIndex++;
            
            if (gameState.currentQuestionIndex < gameState.totalQuestions) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 2500);
    }

    // Show results screen
    function showResults() {
        // Hide question screen, show result screen
        questionScreen.classList.remove('active');
        resultScreen.classList.add('active');
        
        // Update score
        scoreEl.textContent = gameState.score;
        
        // Generate score message
        let message = '';
        const scorePercentage = (gameState.score / gameState.totalQuestions) * 100;
        
        if (scorePercentage >= 90) {
            message = "You're a true Psych-O!";
        } else if (scorePercentage >= 70) {
            message = "You know that's right!";
        } else if (scorePercentage >= 50) {
            message = "Not quite Shawn Spencer level yet.";
        } else {
            message = "Come on, son!";
        }
        
        scoreMessage.textContent = message;
        
        // Generate category stats
        categoryStats.innerHTML = '';
        
        let bestCategory = '';
        let bestCategoryPercentage = 0;
        
        Object.entries(gameState.categoryScores).forEach(([category, scores]) => {
            if (scores.total > 0) {
                const percentage = (scores.correct / scores.total) * 100;
                
                // Check if this is the best category
                if (percentage > bestCategoryPercentage) {
                    bestCategoryPercentage = percentage;
                    bestCategory = category;
                }
                
                const categoryStatEl = document.createElement('div');
                categoryStatEl.classList.add('category-stat');
                categoryStatEl.innerHTML = `
                    <span>${category}</span>
                    <span>${scores.correct}/${scores.total} (${Math.round(percentage)}%)</span>
                `;
                
                categoryStats.appendChild(categoryStatEl);
            }
        });
        
        // Highlight best category
        if (bestCategory) {
            const bestCategoryEl = document.querySelector(`.category-stat:contains('${bestCategory}')`);
            if (bestCategoryEl) {
                bestCategoryEl.classList.add('best-category');
                bestCategoryEl.innerHTML = `
                    <span>${bestCategory} <i class="fas fa-trophy"></i></span>
                    <span>${gameState.categoryScores[bestCategory].correct}/${gameState.categoryScores[bestCategory].total} 
                    (${Math.round(bestCategoryPercentage)}%)</span>
                `;
            }
        }
    }

    // Event listeners
    startBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        questionScreen.classList.add('active');
        
        initGame();
        loadQuestion();
    });
    
    playAgainBtn.addEventListener('click', () => {
        resultScreen.classList.remove('active');
        questionScreen.classList.add('active');
        
        initGame();
        loadQuestion();
    });

    // jQuery-like contains selector for vanilla JS
    Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
    
    Element.prototype.closest = Element.prototype.closest || function(selector) {
        let el = this;
        while (el) {
            if (el.matches(selector)) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    };
    
    // Add :contains selector functionality
    document.querySelectorAll = document.querySelectorAll || function(selector) {
        if (selector.includes(':contains(')) {
            const match = selector.match(/:contains\('([^']+)'\)/);
            if (match) {
                const text = match[1];
                const baseSelector = selector.replace(/:contains\('[^']+'\)/, '');
                const elements = Array.from(document.querySelectorAll(baseSelector));
                return elements.filter(el => el.textContent.includes(text));
            }
        }
        return document.querySelectorAll(selector);
    };
}); 