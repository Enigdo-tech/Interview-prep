// Application State
const state = {
    jobDescription: '',
    resume: '',
    interviewType: '',
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    startTime: null,
    questionStartTime: null,
    totalScore: 0,
    userLevel: 1,
    isRecording: false,
    recognition: null,
    atsScore: 0,
    missingKeywords: []
};

// Common technical keywords and skills
const technicalKeywords = [
    'javascript', 'python', 'java', 'react', 'angular', 'vue', 'node', 'express',
    'django', 'flask', 'spring', 'sql', 'nosql', 'mongodb', 'postgresql', 'mysql',
    'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'ci/cd', 'git', 'agile', 'scrum',
    'api', 'rest', 'graphql', 'microservices', 'testing', 'tdd', 'machine learning',
    'data science', 'analytics', 'typescript', 'html', 'css', 'sass', 'webpack',
    'redux', 'mongodb', 'firebase', 'serverless', 'devops', 'linux', 'bash'
];

// Skill-based bullet point templates
const skillBulletPoints = {
    'javascript': [
        'Developed scalable web applications using modern JavaScript (ES6+) and asynchronous programming patterns.',
        'Optimized frontend performance by implementing efficient DOM manipulation and event handling strategies.',
        'Built reusable component libraries and design systems to accelerate development velocity.'
    ],
    'react': [
        'Architected complex single-page applications using React.js, Redux, and Context API for state management.',
        'Implemented performance optimizations including code splitting, lazy loading, and memoization techniques.',
        'Developed custom hooks and higher-order components to promote code reusability and maintainability.'
    ],
    'python': [
        'Designed and implemented robust backend services and RESTful APIs using Python frameworks (Django/Flask).',
        'Automated data processing pipelines and ETL workflows, reducing manual effort by 70%.',
        'Built machine learning models for predictive analytics using scikit-learn and TensorFlow.'
    ],
    'java': [
        'Developed enterprise-grade microservices architecture using Java, Spring Boot, and Hibernate.',
        'Optimized application performance for high-concurrency systems handling 10K+ requests per second.',
        'Implemented secure authentication and authorization using OAuth2 and JWT tokens.'
    ],
    'aws': [
        'Architected and deployed scalable cloud infrastructure on AWS using EC2, S3, Lambda, and RDS.',
        'Implemented CI/CD pipelines using AWS CodePipeline and CodeDeploy for automated deployments.',
        'Reduced infrastructure costs by 40% through auto-scaling and resource optimization strategies.'
    ],
    'agile': [
        'Led Agile transformation initiatives, implementing Scrum practices across cross-functional teams.',
        'Facilitated sprint planning, daily standups, and retrospectives to improve team velocity by 25%.',
        'Collaborated with Product Owners to prioritize backlog and deliver high-impact features.'
    ],
    'leadership': [
        'Mentored and coached junior developers, conducting code reviews and knowledge-sharing sessions.',
        'Led cross-functional teams of 10+ engineers to deliver critical business projects on time.',
        'Established engineering best practices and coding standards across the organization.'
    ]
};

// Generic professional bullet points
const genericBulletPoints = [
    'Demonstrated strong problem-solving skills by resolving complex technical challenges efficiently.',
    'Collaborated effectively with cross-functional teams to deliver high-quality software solutions.',
    'Proactively identified and mitigated project risks to ensure successful delivery.',
    'Continuously learned and applied new technologies to improve product quality and user experience.',
    'Contributed to process improvements that increased team productivity and code quality.',
    'Delivered high-impact features that improved user engagement and customer satisfaction.',
    'Ensured code quality through comprehensive unit testing, integration testing, and documentation.',
    'Adapted quickly to changing requirements and business priorities in fast-paced environments.'
];

// DOM Elements
const elements = {
    // Welcome Screen
    jobDescriptionFile: document.getElementById('jobDescriptionFile'),
    jobDescriptionText: document.getElementById('jobDescriptionText'),
    resumeFile: document.getElementById('resumeFile'),
    resumeText: document.getElementById('resumeText'),
    startButton: document.getElementById('startButton'),
    fileInfo: document.getElementById('fileInfo'),
    fileName: document.getElementById('fileName'),
    removeFile: document.getElementById('removeFile'),
    resumeFileInfo: document.getElementById('resumeFileInfo'),
    resumeFileName: document.getElementById('resumeFileName'),
    removeResume: document.getElementById('removeResume'),

    // Analysis Screen
    analysisScreen: document.getElementById('analysisScreen'),
    atsScore: document.getElementById('atsScore'),
    scoreProgress: document.getElementById('scoreProgress'),
    keywordsBar: document.getElementById('keywordsBar'),
    keywordsScore: document.getElementById('keywordsScore'),
    skillsBar: document.getElementById('skillsBar'),
    skillsScore: document.getElementById('skillsScore'),
    experienceBar: document.getElementById('experienceBar'),
    experienceScore: document.getElementById('experienceScore'),
    missingKeywords: document.getElementById('missingKeywords'),
    resumePointsList: document.getElementById('resumePointsList'),
    proceedToInterview: document.getElementById('proceedToInterview'),

    // Selection Screen
    selectionScreen: document.getElementById('selectionScreen'),
    selectButtons: document.querySelectorAll('.select-button'),

    // Interview Screen
    interviewScreen: document.getElementById('interviewScreen'),
    currentQuestion: document.getElementById('currentQuestion'),
    totalQuestions: document.getElementById('totalQuestions'),
    progressPercentage: document.getElementById('progressPercentage'),
    progressFill: document.getElementById('progressFill'),
    questionType: document.getElementById('questionType'),
    questionText: document.getElementById('questionText'),
    timerValue: document.getElementById('timerValue'),
    starToggle: document.getElementById('starToggle'),
    starContent: document.getElementById('starContent'),
    answerText: document.getElementById('answerText'),
    submitAnswer: document.getElementById('submitAnswer'),
    skipButton: document.getElementById('skipButton'),
    micButton: document.getElementById('micButton'),
    micStatus: document.getElementById('micStatus'),
    audioVisualizer: document.getElementById('audioVisualizer'),

    // Results Screen
    resultsScreen: document.getElementById('resultsScreen'),
    answeredCount: document.getElementById('answeredCount'),
    totalTime: document.getElementById('totalTime'),
    pointsEarned: document.getElementById('pointsEarned'),
    reviewAnswers: document.getElementById('reviewAnswers'),
    practiceAgain: document.getElementById('practiceAgain'),
    feedbackStrengths: document.getElementById('feedbackStrengths'),
    feedbackImprovements: document.getElementById('feedbackImprovements'),
    feedbackSummary: document.getElementById('feedbackSummary'),

    // Header
    headerStats: document.getElementById('headerStats'),
    totalScore: document.getElementById('totalScore'),
    userLevel: document.getElementById('userLevel')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    initializeSpeechRecognition();
    validateInput();
});

// Initialize Event Listeners
function initializeEventListeners() {
    // File uploads
    elements.jobDescriptionFile.addEventListener('change', handleFileUpload);
    elements.resumeFile.addEventListener('change', handleResumeUpload);
    elements.removeFile.addEventListener('click', clearFile);
    elements.removeResume.addEventListener('click', clearResume);

    // Text inputs
    elements.jobDescriptionText.addEventListener('input', validateInput);
    elements.resumeText.addEventListener('input', validateInput);

    // Start button -> Analysis
    elements.startButton.addEventListener('click', analyzeJobAndResume);

    // Proceed -> Selection
    elements.proceedToInterview.addEventListener('click', showSelectionScreen);

    // Interview type selection
    elements.selectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.target.dataset.type;
            startInterview(type);
        });
    });

    // STAR guide toggle
    elements.starToggle.addEventListener('click', toggleStarGuide);

    // Audio Controls
    elements.micButton.addEventListener('click', toggleRecording);

    // Answer submission
    elements.submitAnswer.addEventListener('click', submitAnswer);
    elements.skipButton.addEventListener('click', skipQuestion);

    // Results actions
    elements.practiceAgain.addEventListener('click', resetApplication);
    elements.reviewAnswers.addEventListener('click', showReview);
}

// Speech Recognition Setup
function initializeSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        state.recognition = new SpeechRecognition();
        state.recognition.continuous = true;
        state.recognition.interimResults = true;
        state.recognition.lang = 'en-IN'; // Indian English dialect

        state.recognition.onstart = () => {
            state.isRecording = true;
            updateMicUI(true);
        };

        state.recognition.onend = () => {
            state.isRecording = false;
            updateMicUI(false);
        };

        state.recognition.onresult = (event) => {
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                }
            }

            if (finalTranscript) {
                const currentText = elements.answerText.value;
                elements.answerText.value = currentText + (currentText ? ' ' : '') + finalTranscript;
            }
        };

        state.recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            state.isRecording = false;
            updateMicUI(false);
        };
    } else {
        elements.micButton.style.display = 'none';
    }
}

function toggleRecording() {
    if (!state.recognition) return;

    if (state.isRecording) {
        state.recognition.stop();
    } else {
        state.recognition.start();
    }
}

function updateMicUI(isRecording) {
    if (isRecording) {
        elements.micButton.classList.add('recording');
        elements.micStatus.textContent = 'Listening...';
        elements.audioVisualizer.classList.add('active');
    } else {
        elements.micButton.classList.remove('recording');
        elements.micStatus.textContent = 'Tap to Speak';
        elements.audioVisualizer.classList.remove('active');
    }
}

// File Upload Handlers
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
        elements.fileName.textContent = file.name;
        elements.fileInfo.style.display = 'flex';

        const reader = new FileReader();
        reader.onload = (event) => {
            state.jobDescription = event.target.result;
            elements.jobDescriptionText.value = '';
            validateInput();
        };
        reader.readAsText(file);
    }
}

function handleResumeUpload(e) {
    const file = e.target.files[0];
    if (file) {
        elements.resumeFileName.textContent = file.name;
        elements.resumeFileInfo.style.display = 'flex';

        const reader = new FileReader();
        reader.onload = (event) => {
            state.resume = event.target.result;
            elements.resumeText.value = '';
            validateInput();
        };
        reader.readAsText(file);
    }
}

function clearFile() {
    elements.jobDescriptionFile.value = '';
    elements.fileInfo.style.display = 'none';
    state.jobDescription = '';
    validateInput();
}

function clearResume() {
    elements.resumeFile.value = '';
    elements.resumeFileInfo.style.display = 'none';
    state.resume = '';
    validateInput();
}

function validateInput() {
    const hasJDFile = elements.jobDescriptionFile.files.length > 0;
    const hasJDText = elements.jobDescriptionText.value.trim().length > 0;
    const hasResumeFile = elements.resumeFile.files.length > 0;
    const hasResumeText = elements.resumeText.value.trim().length > 0;

    if (!hasJDFile && hasJDText) {
        state.jobDescription = elements.jobDescriptionText.value.trim();
    }

    if (!hasResumeFile && hasResumeText) {
        state.resume = elements.resumeText.value.trim();
    }

    // Enable button only if both JD and Resume are provided
    elements.startButton.disabled = !((hasJDFile || hasJDText) && (hasResumeFile || hasResumeText));
}

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ATS Score Calculation & Analysis
function analyzeJobAndResume() {
    const jdText = state.jobDescription.toLowerCase();
    const resumeText = state.resume.toLowerCase();

    // Extract keywords from JD
    const jdKeywords = extractKeywords(jdText);
    const resumeKeywords = extractKeywords(resumeText);

    // Calculate keyword match
    const matchingKeywords = jdKeywords.filter(kw => resumeKeywords.includes(kw));
    const keywordScore = jdKeywords.length > 0 ? (matchingKeywords.length / jdKeywords.length) * 100 : 0;

    // Calculate skills match
    const jdSkills = technicalKeywords.filter(skill => jdText.includes(skill));
    const resumeSkills = technicalKeywords.filter(skill => resumeText.includes(skill));
    const matchingSkills = jdSkills.filter(skill => resumeSkills.includes(skill));
    const skillsScore = jdSkills.length > 0 ? (matchingSkills.length / jdSkills.length) * 100 : 0;

    // Calculate experience match (simple heuristic based on years mentioned)
    const jdYears = extractYearsExperience(jdText);
    const resumeYears = extractYearsExperience(resumeText);
    const experienceScore = resumeYears >= jdYears ? 100 : (resumeYears / jdYears) * 100;

    // Calculate overall ATS score (weighted average)
    state.atsScore = Math.round((keywordScore * 0.4) + (skillsScore * 0.4) + (experienceScore * 0.2));

    // Find missing keywords
    state.missingKeywords = jdSkills.filter(skill => !resumeSkills.includes(skill));

    // Display results
    displayATSScore(state.atsScore, keywordScore, skillsScore, experienceScore);
    displayMissingKeywords(state.missingKeywords);
    generateResumeImprovements(jdText, resumeText);

    showScreen('analysisScreen');
}

function extractKeywords(text) {
    // Simple keyword extraction (words longer than 4 characters, excluding common words)
    const commonWords = ['that', 'this', 'with', 'from', 'have', 'will', 'your', 'about', 'their', 'which', 'would', 'there', 'could', 'should'];
    const words = text.match(/\b\w{4,}\b/g) || [];
    return [...new Set(words.filter(w => !commonWords.includes(w)))];
}

function extractYearsExperience(text) {
    const match = text.match(/(\d+)\+?\s*years?/i);
    return match ? parseInt(match[1]) : 0;
}

function displayATSScore(overall, keywords, skills, experience) {
    // Animate score number
    animateValue(elements.atsScore, 0, overall, 1500);

    // Animate circular progress
    const circumference = 2 * Math.PI * 90; // radius = 90
    const offset = circumference - (overall / 100) * circumference;
    setTimeout(() => {
        elements.scoreProgress.style.strokeDashoffset = offset;
    }, 100);

    // Animate breakdown bars
    setTimeout(() => {
        elements.keywordsBar.style.width = `${keywords}%`;
        elements.keywordsScore.textContent = `${Math.round(keywords)}%`;

        elements.skillsBar.style.width = `${skills}%`;
        elements.skillsScore.textContent = `${Math.round(skills)}%`;

        elements.experienceBar.style.width = `${experience}%`;
        elements.experienceScore.textContent = `${Math.round(experience)}%`;
    }, 500);
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, 16);
}

function displayMissingKeywords(keywords) {
    if (keywords.length === 0) {
        elements.missingKeywords.innerHTML = '<p style="color: var(--color-success);">✓ Great! Your resume includes all key skills from the job description.</p>';
    } else {
        elements.missingKeywords.innerHTML = keywords
            .map(kw => `<span class="keyword-tag missing">${kw}</span>`)
            .join('');
    }
}

function generateResumeImprovements(jdText, resumeText) {
    const improvements = [];

    // Find skills mentioned in JD
    const jdSkills = technicalKeywords.filter(skill => jdText.includes(skill));

    // Generate bullet points for matching skills
    jdSkills.forEach(skill => {
        if (skillBulletPoints[skill]) {
            const points = skillBulletPoints[skill];
            improvements.push(...points.slice(0, 2)); // Add 2 points per skill
        }
    });

    // Fill with generic points if needed
    const remaining = 15 - improvements.length;
    if (remaining > 0) {
        improvements.push(...shuffleArray(genericBulletPoints).slice(0, remaining));
    }

    // Display bullet points
    elements.resumePointsList.innerHTML = improvements
        .slice(0, 15)
        .map(point => `
            <div class="bullet-point-item">
                <strong>Recommended</strong>
                ${point}
            </div>
        `).join('');
}

function showSelectionScreen() {
    showScreen('selectionScreen');
}

// Generate JD-specific Interview Questions
function generateJDSpecificQuestions(jdText, type) {
    const questions = [];

    // Extract key skills and requirements from JD
    const jdSkills = technicalKeywords.filter(skill => jdText.includes(skill));

    if (type === 'screening') {
        questions.push("Tell me about yourself and your background.");
        questions.push("Why are you interested in this position?");
        questions.push("What do you know about our company?");
        questions.push("What are your salary expectations?");
        questions.push("When are you available to start?");
    } else if (type === 'manager') {
        // Add JD-specific technical questions
        jdSkills.forEach(skill => {
            questions.push(`Describe your experience working with ${skill} and how you've applied it in past projects.`);
        });

        // Add general manager round questions
        questions.push("Describe a challenging project you worked on that's relevant to this role.");
        questions.push("How do you prioritize tasks when managing multiple deadlines?");
        questions.push("Tell me about a time when you had to learn a new technology quickly.");
        questions.push("Describe a situation where you had to solve a complex problem.");
        questions.push("How do you handle feedback and criticism?");
        questions.push("Tell me about a time when you failed and what you learned from it.");
    } else if (type === 'team') {
        questions.push("Describe a time when you had to work with a difficult team member.");
        questions.push("Tell me about a successful team project you contributed to.");
        questions.push("How do you handle conflicts within a team?");
        questions.push("Describe a situation where you had to mentor or help a colleague.");
        questions.push("Tell me about a time when you disagreed with your team's approach.");
        questions.push("How do you contribute to a positive team culture?");
        questions.push("Describe a time when you had to collaborate with remote team members.");
    }

    return questions;
}

// Interview Logic
function startInterview(type) {
    state.interviewType = type;
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.startTime = Date.now();

    // Generate JD-specific questions
    const jdText = state.jobDescription.toLowerCase();
    const allQuestions = generateJDSpecificQuestions(jdText, type);
    const questionCount = type === 'screening' ? 5 : type === 'manager' ? 7 : 6;

    state.questions = shuffleArray(allQuestions).slice(0, questionCount);

    // Update UI
    elements.totalQuestions.textContent = state.questions.length;
    elements.questionType.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    // Show header stats
    elements.headerStats.style.display = 'flex';
    elements.totalScore.textContent = state.totalScore;
    elements.userLevel.textContent = state.userLevel;

    showScreen('interviewScreen');
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    elements.questionText.textContent = question;
    elements.currentQuestion.textContent = state.currentQuestionIndex + 1;
    elements.answerText.value = '';

    const progress = ((state.currentQuestionIndex) / state.questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressPercentage.textContent = `${Math.round(progress)}%`;

    state.questionStartTime = Date.now();
}

let timerInterval;
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - state.questionStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        elements.timerValue.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function toggleStarGuide() {
    elements.starContent.classList.toggle('expanded');
}

function submitAnswer() {
    const answer = elements.answerText.value.trim();

    if (answer.length === 0) {
        alert('Please provide an answer before submitting.');
        return;
    }

    if (state.isRecording && state.recognition) {
        state.recognition.stop();
    }

    const timeSpent = Math.floor((Date.now() - state.questionStartTime) / 1000);
    state.answers.push({
        question: state.questions[state.currentQuestionIndex],
        answer: answer,
        timeSpent: timeSpent
    });

    const points = calculatePoints(answer, timeSpent);
    state.totalScore += points;
    elements.totalScore.textContent = state.totalScore;

    checkLevelUp();

    state.currentQuestionIndex++;

    if (state.currentQuestionIndex < state.questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function skipQuestion() {
    if (state.isRecording && state.recognition) {
        state.recognition.stop();
    }

    state.answers.push({
        question: state.questions[state.currentQuestionIndex],
        answer: '[Skipped]',
        timeSpent: 0
    });

    state.currentQuestionIndex++;

    if (state.currentQuestionIndex < state.questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function calculatePoints(answer, timeSpent) {
    let points = 10;

    if (answer.length > 200) points += 5;
    if (answer.length > 400) points += 5;

    const starKeywords = ['situation', 'task', 'action', 'result'];
    const lowerAnswer = answer.toLowerCase();
    const starCount = starKeywords.filter(keyword => lowerAnswer.includes(keyword)).length;
    points += starCount * 5;

    if (timeSpent < 300) points += 5;

    return points;
}

function checkLevelUp() {
    const newLevel = Math.floor(state.totalScore / 100) + 1;
    if (newLevel > state.userLevel) {
        state.userLevel = newLevel;
        elements.userLevel.textContent = state.userLevel;
        showLevelUpAnimation();
    }
}

function showLevelUpAnimation() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, hsl(260, 85%, 60%), hsl(190, 85%, 55%));
        color: white;
        padding: 2rem 3rem;
        border-radius: 16px;
        font-size: 1.5rem;
        font-weight: 700;
        z-index: 1000;
        animation: fadeIn 350ms;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    `;
    notification.textContent = `🎉 Level Up! You're now Level ${state.userLevel}!`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function showResults() {
    clearInterval(timerInterval);

    const totalTime = Math.floor((Date.now() - state.startTime) / 1000);
    const answeredCount = state.answers.filter(a => a.answer !== '[Skipped]').length;

    elements.answeredCount.textContent = answeredCount;
    elements.totalTime.textContent = formatTime(totalTime);
    elements.pointsEarned.textContent = state.totalScore;

    elements.progressFill.style.width = '100%';
    elements.progressPercentage.textContent = '100%';

    generateFeedback();

    showScreen('resultsScreen');
}

function generateFeedback() {
    const strengths = [];
    const improvements = [];
    let starUsageCount = 0;
    let avgLength = 0;

    state.answers.forEach(a => {
        if (a.answer === '[Skipped]') return;

        const lower = a.answer.toLowerCase();
        if (lower.includes('situation') && lower.includes('task') && lower.includes('action') && lower.includes('result')) {
            starUsageCount++;
        }
        avgLength += a.answer.length;
    });

    const answeredCount = state.answers.filter(a => a.answer !== '[Skipped]').length;
    if (answeredCount > 0) avgLength /= answeredCount;

    if (starUsageCount > 0) {
        strengths.push(`You successfully used the STAR methodology in ${starUsageCount} answers.`);
    }
    if (avgLength > 300) {
        strengths.push("Your answers were comprehensive and detailed.");
    }
    if (state.totalScore > 50) {
        strengths.push("You maintained a strong scoring pace throughout the interview.");
    }
    if (state.atsScore >= 70) {
        strengths.push(`Your resume has a strong ATS score of ${state.atsScore}%, showing good alignment with the job description.`);
    }

    if (starUsageCount < answeredCount) {
        improvements.push("Try to structure more answers using the STAR format (Situation, Task, Action, Result).");
    }
    if (avgLength < 150) {
        improvements.push("Consider expanding your answers with more specific details and examples.");
    }
    const skippedCount = state.answers.length - answeredCount;
    if (skippedCount > 0) {
        improvements.push(`You skipped ${skippedCount} questions. Practice these topics to build confidence.`);
    }
    if (state.atsScore < 70) {
        improvements.push(`Your ATS score is ${state.atsScore}%. Consider adding the missing keywords to your resume.`);
    }

    elements.feedbackStrengths.innerHTML = strengths.length > 0
        ? strengths.map(s => `<li>${s}</li>`).join('')
        : '<li>Keep practicing to identify your strengths!</li>';

    elements.feedbackImprovements.innerHTML = improvements.length > 0
        ? improvements.map(i => `<li>${i}</li>`).join('')
        : '<li>Excellent work! No major areas for improvement detected.</li>';

    const scorePercentage = (state.totalScore / (state.questions.length * 25)) * 100;
    let summary = '';
    if (scorePercentage > 80) {
        summary = "Outstanding performance! You demonstrated strong communication skills and structured thinking. You're well-prepared for this interview level.";
    } else if (scorePercentage > 50) {
        summary = "Good effort! You have a solid foundation but could benefit from more structured answers and detailed examples. Focus on the STAR method.";
    } else {
        summary = "You're on the right track, but need more practice. Focus on providing concrete examples and structuring your thoughts clearly.";
    }
    elements.feedbackSummary.textContent = summary;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (minutes === 0) return `${secs}s`;
    return `${minutes}m ${secs}s`;
}

function showReview() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        overflow-y: auto;
        padding: 2rem;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        max-width: 900px;
        margin: 0 auto;
        background: hsl(240, 12%, 12%);
        border-radius: 16px;
        padding: 2rem;
    `;

    let html = '<h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: center;">Your Answers Review</h2>';

    state.answers.forEach((item, index) => {
        html += `
            <div style="background: hsl(240, 10%, 16%); border: 1px solid hsla(0, 0%, 100%, 0.1); border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem;">
                <h3 style="font-size: 1.125rem; margin-bottom: 0.5rem; color: hsl(260, 85%, 60%);">Question ${index + 1}</h3>
                <p style="margin-bottom: 1rem; color: hsl(0, 0%, 75%);">${item.question}</p>
                <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">Your Answer:</h4>
                <p style="color: hsl(0, 0%, 85%); line-height: 1.6;">${item.answer}</p>
                <p style="margin-top: 0.5rem; font-size: 0.875rem; color: hsl(0, 0%, 55%);">Time spent: ${formatTime(item.timeSpent)}</p>
            </div>
        `;
    });

    html += `<button onclick="this.closest('div').parentElement.remove()" style="width: 100%; padding: 1rem; background: linear-gradient(135deg, hsl(260, 85%, 60%), hsl(190, 85%, 55%)); color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-top: 1rem;">Close Review</button>`;

    content.innerHTML = html;
    modal.appendChild(content);
    document.body.appendChild(modal);
}

function resetApplication() {
    state.jobDescription = '';
    state.resume = '';
    state.interviewType = '';
    state.currentQuestionIndex = 0;
    state.questions = [];
    state.answers = [];
    state.isRecording = false;
    state.atsScore = 0;
    state.missingKeywords = [];

    elements.jobDescriptionText.value = '';
    elements.jobDescriptionFile.value = '';
    elements.resumeText.value = '';
    elements.resumeFile.value = '';
    elements.fileInfo.style.display = 'none';
    elements.resumeFileInfo.style.display = 'none';
    elements.answerText.value = '';

    elements.progressFill.style.width = '0%';
    elements.progressPercentage.textContent = '0%';

    elements.starContent.classList.remove('expanded');

    showScreen('welcomeScreen');
    validateInput();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
