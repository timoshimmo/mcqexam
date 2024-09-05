import React, { useEffect } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "Components/Common/BreadCrumb";

const DashboardEcommerce = () => {
  document.title = "Home | MCQ Exam";

  useEffect(() => {

    const quizData = [
      {
      question: "The piece of hardware that converts your computer’s digital signal to an analog signal that can travel over telephone lines is called a ?",
      a: "Red Wire",
      b: "Blue Cord",
      c: "Tower",
      d: "Modem",
      correct: "d" },
      
      {
      question: "The synchronous modems are more costly than the asynchronous modems because ?",
      a: "They produce large volume of data",
      b: "They contain clock recovery circuits",
      c: "They transmit the data with stop and start bits",
      d: "They operate with a larger bandwidth",
      correct: "b" },
      
      {
      question: "An alternate name for the completely interconnected network topology is ?",
      a: "Mesh",
      b: "Star",
      c: "Tree",
      d: "Ring",
      correct: "a" },
      
      {
      question: "A collection of interrelated records is called a ?",
      a: "Management information system",
      b: "Spreadsheet",
      c: "Database",
      d: "Text File ",
      correct: "c" },
      
      {
      question: "Grouping and processing all of a firm’s transactions at one time is called ?",
      a: "A database management system",
      b: "Batch processing",
      c: "A real-time system",
      d: "An online system",
      correct: "b" },
      
      {
      question: "_______ provides total solutions to reduce data redundancy, inconsistency, dependence and unauthorized access of data ?",
      a: "DBMS",
      b: "Tables",
      c: "Database",
      d: "Protection passwords",
      correct: "a" },
      
      {
      question: "______ search engine sends request for information to several search engines simultaneously and compiles the results ?",
      a: "Meta",
      b: "Individual",
      c: "Directory",
      d: "Subject directory",
      correct: "a" },
      
      {
      question: "To access a website or web content from a web server, the client sends a(n) ______ ?",
      a: "Information",
      b: "Message",
      c: "Request",
      d: "Response",
      correct: "c" },
      
      {
      question: "Which of the following software could assist someone who cannot use their hands for computer input ?",
      a: "Video conferencing",
      b: "Speech recognition",
      c: "Audio digitizer",
      d: "Synthesizer",
      correct: "b" },
      
      
      {
      question: "__________ is the process of finding errors in software code ?",
      a: "Hacking",
      b: "Compiling",
      c: "Testing",
      d: "Debugging",
      correct: "d" }
      
      ];

    const quiz = document.getElementById("quiz") as HTMLElement;
    const answerEls = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;
    const questionEl = document.getElementById("question") as HTMLElement;
    const a_text = document.getElementById("a_text") as HTMLElement;
    const b_text = document.getElementById("b_text") as HTMLElement;
    const c_text = document.getElementById("c_text") as HTMLElement;
    const d_text = document.getElementById("d_text") as HTMLElement;
    const submitBtn = document.getElementById("submit") as HTMLElement;

    let wrong_block = document.getElementById("wrong-answer") as HTMLElement;

    let currentQuiz = 0;
    let score = 0;
    let attempt = 0;
    
    loadQuiz();
    
    function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    }
    
    function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
    if (answerEl.checked) {
    answer = answerEl.id;
    }
    });
    return answer;
    }
    
    function deselectAnswers() {
    answerEls.forEach(answerEl => {
    answerEl.checked = false;
    });
    }
    
    submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        wrong_block.style.display = "none";
        attempt = 0;
        score++;
        currentQuiz++;
      
    }
    else {
        if(attempt < 1) {
            attempt++;
            wrong_block.style.display = "block";
        }
        else {
            wrong_block.style.display = "none";
            attempt = 0;
            currentQuiz++;
        }
        
    }
    
    if (currentQuiz < quizData.length) { loadQuiz(); } else { quiz.innerHTML=` <h2>You answered ${score}/${quizData.length} correctly.</h2>
        <button onclick="window.location.reload();">Reload</button>
        `;
        }
        }
        });
    

}, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Exams" pageTitle="Certification" /> */}
          <div className="d-flex justify-content-center mb-5">
            <div className="quiz-container" id="quiz">
                <div className="quiz-header">
                    <h2 id="question">Question text</h2>
                    <ul>
                        <li>
                            <input type="radio" id="a" name="answer" className="answer" />
                            <label id="a_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" id="b" name="answer" className="answer" />
                            <label id="b_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" id="c" name="answer" className="answer" />
                            <label id="c_text">Question</label>
                        </li>
                        <li>
                            <input type="radio" id="d" name="answer" className="answer" />
                            <label id="d_text">Question</label>
                        </li>
                    </ul>
                    <div id="wrong-answer" className="mt-5" style={{ display: 'none' }}>
                      <p className="wrong-title">You just selected a Wrong answer. Pls try again.</p>
                      <p className="wrong-subtitle">Attempts Left: 1</p>
                    </div>
                </div>
                <button id="submit" className="next-button">Submit</button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
