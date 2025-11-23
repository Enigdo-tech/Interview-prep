# InterviewPro - Holistic Resume-JD Matching & Interview Preparation Platform

A comprehensive, gamified web application that helps job seekers optimize their resumes, calculate ATS scores, and practice interviews with AI-powered, job-description-specific questions.

## 🚀 Key Features

### 1. **Resume-JD Matching & ATS Scoring**
- Upload both your **Resume** and **Job Description**
- Get instant **ATS (Applicant Tracking System) Score** (0-100)
- Detailed breakdown of:
  - **Keywords Match**: How well your resume matches JD keywords
  - **Skills Match**: Technical skills alignment
  - **Experience Match**: Years of experience comparison
- Identify **missing keywords** from the job description
- Visual circular progress indicator for ATS score

### 2. **Intelligent Resume Improvement Suggestions**
- **15+ tailored bullet points** based on:
  - Skills mentioned in the job description
  - Your current resume content
  - Industry best practices
- Copy-paste ready resume bullets to improve your ATS score
- Skill-specific recommendations (JavaScript, Python, AWS, Agile, etc.)

### 3. **JD-Specific Interview Questions**
- Questions **dynamically generated** from the job description
- Three interview levels:
  - **Screening Round**: HR and cultural fit questions (5 questions)
  - **Manager Round**: Technical and role-specific questions based on JD (7 questions)
  - **Team Round**: Collaboration and experience-focused questions (6 questions)
- Questions tailored to the specific skills and requirements in the JD

### 4. **Audio Response (Speech-to-Text)**
- **Microphone button** for hands-free answering
- Supports **Indian English dialect** (`en-IN`)
- Real-time audio visualizer
- Automatic transcription to text area
- Works in Chrome, Edge, and Safari

### 5. **STAR Methodology Guidance**
- Built-in **STAR framework** guide (Situation, Task, Action, Result)
- Expandable reference panel during interviews
- **Bonus points** for using STAR elements in answers

### 6. **Gamification & Progress Tracking**
- **Points System**: Earn points for comprehensive, structured answers
- **Level Progression**: Level up every 100 points
- **Real-time Timer**: Track time spent on each question
- **Performance Analytics**: Detailed feedback on strengths and improvements

### 7. **Comprehensive Feedback**
- **Strengths**: What you did well
- **Areas for Improvement**: Specific suggestions
- **Overall Assessment**: Performance summary
- **ATS Score Integration**: Feedback includes resume-JD alignment insights

## 📋 How to Use

### Step 1: Upload Documents
1. **Upload or paste** your **Job Description**
2. **Upload or paste** your **Resume**
3. Click **"Start Interview Practice"**

### Step 2: Review Analysis
- View your **ATS Score** and breakdown
- See **missing keywords** from the JD
- Review **15+ recommended resume bullet points**
- Click **"Proceed to Interview Practice"**

### Step 3: Select Interview Round
Choose from:
- **Screening Round** (HR questions)
- **Manager Round** (Technical, JD-specific)
- **Team Round** (Collaboration & experience)

### Step 4: Answer Questions
- Read the question
- Use the **STAR Method Guide** for structured answers
- **Tap the microphone** to speak your answer (or type)
- Submit or skip to next question

### Step 5: Review Results
- See your **performance statistics**
- Get **detailed feedback**
- **Review all your answers**
- Practice again to improve!

## 🎯 Scoring System

### Points Breakdown
- **Base Points**: 10 points per answered question
- **Length Bonus**: 
  - +5 points for answers over 200 characters
  - +10 points for answers over 400 characters
- **STAR Bonus**: +5 points for each STAR element mentioned
- **Time Bonus**: +5 points for answering within 5 minutes

### Level System
- **Level 1**: 0-99 points
- **Level 2**: 100-199 points
- **Level 3**: 200-299 points
- And so on...

## 🔧 Technical Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with custom properties, gradients, animations
- **Vanilla JavaScript**: No frameworks, pure JS for maximum performance
- **Web Speech API**: For speech-to-text functionality
- **Google Fonts**: Inter and Outfit font families

## 📊 ATS Score Calculation

The ATS score is calculated using a weighted average:
- **40%** Keywords Match (JD keywords found in resume)
- **40%** Skills Match (Technical skills alignment)
- **20%** Experience Match (Years of experience comparison)

### Score Interpretation
- **90-100**: Excellent match, very likely to pass ATS
- **70-89**: Good match, strong chance of passing ATS
- **50-69**: Moderate match, consider adding missing keywords
- **Below 50**: Weak match, significant resume optimization needed

## 🎤 Audio Features

### Browser Support
- ✅ **Chrome** (Recommended)
- ✅ **Edge**
- ✅ **Safari**
- ❌ Firefox (Web Speech API not fully supported)

### Language Support
- Optimized for **Indian English** dialect
- Automatically transcribes speech to text
- Handles accents and variations

## 📁 File Structure

```
interview-practice/
├── index.html          # Main HTML structure
├── index.css           # Styling and design system
├── app.js              # Application logic and interactivity
└── README.md           # Documentation
```

## 🚀 Getting Started

### Option 1: Open Directly
```bash
open /Users/Enigdo/Downloads/interview-practice/index.html
```

### Option 2: Use a Local Server (Optional)
```bash
cd /Users/Enigdo/Downloads/interview-practice
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## 💡 Tips for Best Results

### For ATS Score
1. Include **exact keywords** from the job description in your resume
2. Match the **job title** and **required skills** precisely
3. Quantify your achievements with **numbers and metrics**
4. Use **industry-standard terminology**

### For Interview Practice
1. Use the **STAR methodology** for behavioral questions
2. Provide **specific examples** from your experience
3. Keep answers **concise but comprehensive** (200-400 words)
4. Practice with **different interview rounds** to build confidence

## 🔮 Future Enhancements

- AI-powered answer evaluation and scoring
- Video recording for mock interviews
- Industry-specific question banks
- Resume export with suggested improvements
- Integration with LinkedIn and job boards
- Multiplayer practice mode
- Interview scheduling and reminders

## 📝 License

Created for personal use and interview preparation.

## 🙏 Credits

Built with ❤️ to help job seekers ace their interviews and land their dream jobs!

---

**Pro Tip**: Practice with multiple job descriptions to build a versatile skill set and improve your interview performance across different roles!
