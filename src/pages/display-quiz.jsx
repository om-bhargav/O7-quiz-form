import React, { useState } from 'react'
import { useContext } from 'react';
import User from "../context/context";
import {useNavigate} from "react-router-dom";
const data = [
    {
      "id": 1,
      "question": "Which language is primarily used for web page structure?",
      "options": ["CSS", "HTML", "JavaScript", "Python"],
      "correct_option": 1,
      "difficulty":"medium"
    },
    {
      "id": 2,
      "question": "Which data type is immutable in Python?",
      "options": ["List", "Dictionary", "Set", "Tuple"],
      "correct_option": 3,
      "difficulty":"medium"
    },
    {
      "id": 3,
      "question": "Which of the following is a JavaScript framework?",
      "options": ["Django", "Laravel", "React", "Flask"],
      "correct_option": 2,
      "difficulty":"hard"
    },
    {
      "id": 4,
      "question": "What does CSS stand for?",
      "options": ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax", "Colorful Style Sheet"],
      "correct_option": 0,
      "difficulty":"hard"
    },
    {
      "id": 5,
      "question": "Which HTML tag is used to include JavaScript code?",
      "options": ["<script>", "<code>", "<js>", "<javascript>"],
      "correct_option": 0,
      "difficulty":"easy"
    },
    {
      "id": 6,
      "question": "Which keyword is used to declare a variable in JavaScript?",
      "options": ["define", "var", "let", "declare"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 7,
      "question": "What does the ‘return’ statement do in a function?",
      "options": ["Stops the function", "Returns a value", "Prints output", "None of the above"],
      "correct_option": 1,
      "difficulty":"hard"
    },
    {
      "id": 8,
      "question": "Which of these is used to style web pages?",
      "options": ["CSS", "HTML", "JavaScript", "SQL"],
      "correct_option": 0,
      "difficulty":"easy"
    },
    {
      "id": 9,
      "question": "Which database language is used to manipulate data?",
      "options": ["HTML", "SQL", "CSS", "Python"],
      "correct_option": 1,
      "difficulty":"medium"
    },
    {
      "id": 10,
      "question": "Which of the following is not a programming language?",
      "options": ["Python", "HTML", "C++", "Java"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 11,
      "question": "Which symbol is used for comments in Python?",
      "options": ["//", "#", "/* */", "--"],
      "correct_option": 1,
      "difficulty":"medium"
    },
    {
      "id": 12,
      "question": "Which operator is used to compare two values in JavaScript?",
      "options": ["=", "==", "===", "!="],
      "correct_option": 2,
      "difficulty":"medium"
    },
    {
      "id": 13,
      "question": "Which function converts a string to an integer in Python?",
      "options": ["parseInt()", "int()", "str()", "float()"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 14,
      "question": "Which company developed Java?",
      "options": ["Sun Microsystems", "Microsoft", "IBM", "Apple"],
      "correct_option": 0,
      "difficulty":"hard"
    },
    {
      "id": 15,
      "question": "What is the default port number for HTTP?",
      "options": ["21", "25", "80", "8080"],
      "correct_option": 2,
      "difficulty":"hard"
    },
    {
      "id": 16,
      "question": "Which of these is a NoSQL database?",
      "options": ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 17,
      "question": "In React, what hook is used for state management?",
      "options": ["useEffect", "useContext", "useState", "useMemo"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 18,
      "question": "What does API stand for?",
      "options": ["Application Programming Interface", "Applied Program Interaction", "Advanced Programming Input", "App Programming Integration"],
      "correct_option": 0,
      "difficulty":"easy"
    },
    {
      "id": 19,
      "question": "Which HTTP method is used to send data to the server?",
      "options": ["GET", "POST", "PUT", "DELETE"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 20,
      "question": "Which keyword is used to define a class in Python?",
      "options": ["function", "define", "class", "object"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 21,
      "question": "Which HTML element is used to display a picture?",
      "options": ["<picture>", "<image>", "<img>", "<src>"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 22,
      "question": "Which of the following is used to handle exceptions in Python?",
      "options": ["if-else", "try-except", "for-while", "def-return"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 23,
      "question": "Which CSS property is used to change text color?",
      "options": ["font-color", "text-style", "color", "text-color"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 24,
      "question": "Which command is used to initialize a new Git repository?",
      "options": ["git start", "git init", "git new", "git create"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 25,
      "question": "Which of the following is a Python web framework?",
      "options": ["Spring", "Flask", "Express", "React"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 26,
      "question": "What is the output of: 3 + 2 * 2 in Python?",
      "options": ["10", "7", "8", "9"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 27,
      "question": "Which of these defines a constant in JavaScript?",
      "options": ["let", "var", "const", "static"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 28,
      "question": "Which symbol is used for single-line comments in JavaScript?",
      "options": ["/* */", "#", "//", "--"],
      "correct_option": 2,
      "difficulty":"easy"
    },
    {
      "id": 29,
      "question": "Which HTML tag is used to create a hyperlink?",
      "options": ["<link>", "<a>", "<href>", "<nav>"],
      "correct_option": 1,
      "difficulty":"easy"
    },
    {
      "id": 30,
      "question": "Which of these is a backend language?",
      "options": ["CSS", "Python", "HTML", "Bootstrap"],
      "correct_option": 1,
      "difficulty":"easy"
    }
  ];

const options = {
  1: -1,
  2: -1,
  3: -1,
  4: -1,
  5: -1,
  6: -1,
  7: -1,
  8: -1,
  9: -1,
  10: -1,
  11: -1,
  12: -1,
  13: -1,
  14: -1,
  15: -1,
  16: -1,
  17: -1,
  18: -1,
  19: -1,
  20: -1,
  21: -1,
  22: -1,
  23: -1,
  24: -1,
  25: -1,
  26: -1,
  27: -1,
  28: -1,
  29: -1,
  10: -1,
};
const displayquiz = () => {
  const values = useContext(User);
  const length = 30;
  const navigate = useNavigate();
  const [index,setIndex] = useState(0);
  const [answers,setAnswers] = useState(options);
  const Next = () =>{
    setIndex(index+1);
  }
  const calculateScore = () => {
    let correct = 0;
    for(let i in answers){
        if(data[i].correct_option===answers[i]){
          correct++;
        }
    }
    values.setUsers(...values.users,{...values.currentUser,score:correct})
    values.setCurrentUser({...values.currentUser,score:correct})
    
    navigate("/score");
  }
  return (
    <div className='min-h-screen p-5'>
      <div className='p-5 border grid place-items-center gap-5 items-center container max-w-[800px] mx-auto my-10 shadow-lg rounded'>
        <div className='text-2xl font-semibold'>Quiz Live</div>
        <div className='border w-full p-3'>
          <div className='flex gap-2'>
          <div>

          {index+1})
          </div>
          <div>

          {
            data[index].question
          }
          </div>
          </div>
          <div className='grid'>
            {
              data[index].options.map((option,ind)=>{
                return (<div key={ind} onClick={()=>setAnswers({...answers,[index]:ind})} className='cursor-pointer'>
                  {ind+1}) {option}
                </div>)
              })
            }
          </div>
        </div>
        {
          index<length-2?
          <input onClick={Next} type="button" value="Next" className='bg-green-500 text-white rounded p-2 w-full text-lg grid'/>:
          <input onClick={calculateScore} type="button" value="Finish" className='bg-green-500 text-white rounded p-2 w-full text-lg grid'/>
        
        }
      </div>

      </div>
  )
}

export default displayquiz