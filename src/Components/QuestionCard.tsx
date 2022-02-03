import React, { useState } from 'react';
import '../App.css';
import { questionPropsTypes } from '../Types/quiz_types';
const QuestionCard: React.FC<questionPropsTypes> = ({ question, option, callback }) => {
    let [userAns, setUserAns] = useState("");

    const handleSubmit = (e:any) => {
        setUserAns(e.target.value)
    }
    return (
        <div className="question-container">
            <div className="question">
                <h4>{question}</h4>
                <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, userAns)}>
                    {option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label className="radio">
                                    <input type="radio" required name="opt" value={opt} onChange={handleSubmit} checked={userAns == opt} />
                                    {opt}
                                </label>
                            </div>
                        )
                    })}
                    <input type="submit" className="submit" />
                </form>
            </div>
        </div>
    )
}
export default QuestionCard;