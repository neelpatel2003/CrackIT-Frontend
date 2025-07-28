import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router'
import axios from 'axios';
import CodeEditor from './CodeEditor'

interface Question {
   title: string,
   description: string,
   level: Number
}
const SolveQuestion = () => {
   const [question, setQuestion] = useState<Question | null>(null);
   const location = useLocation() as any;

   // Defensive: if user navigates directly, location.state may not exist
   const title = location.state?.title;
   useEffect(() => {
      if (!title) return;
      const fetchQuestion = async () => {
         try {
            const response = await axios.get(`/api/questions/${title}`);
            setQuestion(response.data.Question);
         } catch (err) {
            setQuestion(null);
         }
      };
      fetchQuestion();
   }, [title]);
   return (
      <>
         <Navbar />
         {title && question ? <div>
            <h3 className='text-2xl my-2 text-blue-700'>{question.title}</h3>
            <p className='text-lg text-left mx-3 my-1'> {`-->`} {question.description}</p>
            <div className='flex justify-center items-center my-1'><p className='text-xl'>Difficulty Level: </p><p className='text-lg m-1'>{question.level ? question.level.toString() : 'N/A'}</p></div>
         </div> : !title ? <div className='text-red-500'>No question selected. Please go back and select a question.</div> : <></>}
         <hr />
         <CodeEditor/>
      </>
   )
}

export default SolveQuestion
