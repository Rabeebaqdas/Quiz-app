import React,{useEffect,useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz-service';
import { questionType} from './Types/quiz_types'
import QuestionCard from './Components/QuestionCard';

function App() {
let [quiz,setQuiz] = useState<questionType[]>([])
let [currentStep,setcurrentStep] = useState(0)
let [score,setScore] = useState(0)
let [showResult,setShowResult] = useState(false)

  useEffect(()=>{
   async function fetchData(){
     const questions:questionType[] = await getQuizDetails(10,'easy');
     setQuiz(questions);
   } 
   fetchData()
  },[]);
 const  handleSubmit = (e:React.FormEvent<EventTarget>,userAns:string)=>{
   e.preventDefault();
   const currentQues = quiz[currentStep].answer;
  if(userAns == currentQues){
    setScore(++score);
  }
   if(currentStep !== quiz.length-1){
    setcurrentStep(++currentStep);   
   }
    else{
      setShowResult(true);
    }

  }
  if(!quiz.length){
    return <h2>Loading...</h2>
  }
  const restartQuiz = ()=>{
    setScore(0);
    setcurrentStep(0);
    setShowResult(false);
  }
  if(showResult){
    return(
    <div className="question-container">
      <h1>Quiz Completed!</h1>
    <h2>Result:-</h2>
    <p>Your final score is <b>{score}</b> out of <b>{quiz.length}</b></p>
    <button className="submit" onClick={restartQuiz}>Restart Quiz</button>
    </div>
    )
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
    <QuestionCard option={quiz[currentStep].option} question={quiz[currentStep].question} callback={handleSubmit}/>
    </div>
  );
}

export default App;
