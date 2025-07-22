import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Loading from './Loading';
import QuestionCard from './QuestionCard';

interface Question {
    title: string,
    description: string,
    level: Number
}
const Quetions = () => {
    const [questionList, setQuestionList] = useState<Array<Question> | null>(null);

    async function fetchQuetions() {
        await axios.get('/api/quetions').then((response) => {
            setQuestionList(response.data.Questions);
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        });
    }
    useEffect(() => {
        fetchQuetions();
    }, []);

    return (
        <div className='bg-[#D6DCE4] '>
            <Navbar />
            <div className='my-[18px]'>
                <p className='text-3xl mb-4 font-serif'>Questions</p>
                <hr />
                {(questionList) ? <ul>{
                    questionList.map((question, index) => (
                        <QuestionCard key={index} title={question.title} description={question.description} level={question.level} />
                    ))
                }</ul> : <Loading />}
            </div>
        </div>
    )
}

export default Quetions
