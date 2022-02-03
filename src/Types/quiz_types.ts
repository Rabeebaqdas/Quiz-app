import React from "react";
export type Quiz={
category: string
correct_answer: string
difficulty: string
incorrect_answers: string[]
question: string
type:string
}

export type questionType={
  question : string
  option:string[]
  answer:string
}

export type questionPropsTypes = {
    question : string
    option : string[]
    callback:(e:React.FormEvent<EventTarget>,userAns:string)=>void
}