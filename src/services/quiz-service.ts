import {Quiz,questionType} from '../Types/quiz_types';
const shuffleArray = (array:any[] )=> [...array].sort(()=>Math.random()-0.5)

export const getQuizDetails=async(totalQuestions:number ,level:string ): Promise<questionType[]>=>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let {results} = await res.json();
    const quiz:questionType[] = results.map((questionObj:Quiz)=>{
        return{
            question : questionObj.question,
            answer : questionObj.correct_answer,
            option : shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}