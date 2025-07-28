import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [botReply, setBotReply] = useState('');
    const handleChat = async () => {
        try {
            const response = await axios.post('/api/chat', {
                prompt: message
            });
            console.log(response);
            setBotReply(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='bg-[#D6DCE4]'>
            {/* <img src='./src/utils/about-bg.jpg' className='fixed blur-md h-100 w-100 z-[-1]'></img> */}
            <Navbar />
            <p className='text-3xl mt-6 font-serif'>Our AI can help you in</p>
            <marquee>
                <div className='flex text-xl justify-between m-3 px-4'>
                    <p>Code Autocompletion</p>
                    <p>Automated Code Generation</p>
                    <p>Bug Detection and Fixes</p>
                    <p>Natural Language Interfaces</p>
                </div>
            </marquee>
            <hr />
            <div className='flex justify-between mt-7 mb-4 p-4 mx-10'>
                <video src="./video/robot.mp4" autoPlay muted loop className='h-[450px] rounded-3xl'></video>
                <div className='flex flex-col justify-center items-center mr-10'>
                    <div className='text-3xl m-2'>Click here to use the ChatBot</div>
                    <a href="#bot"><button className='border-2 border-black rounded-lg text-xl p-2 m-2 bg-gray-700 text-white hover:bg-gray-950'>ChatBot</button></a>
                </div>
            </div>
            <div className='bot-container container p-4' id='bot'>
                <h1 className='text-2xl mb-3'>Chat Bot</h1>
                <div className="breakpoint">
                    <div className="area-and-btn">
                        <p className='text-xl mb-2'>Ask me anything!</p>
                        <textarea
                            value={message}
                            className='text-black rounded-md'
                            rows={6}
                            cols={35}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={handleChat} className='chatbot-border border-2 py-2  border-white hover:bg-gray-950'>Send</button>
                    </div>
                    <img src="./line2.png" alt="" />
                    <p className='response text-xl mb-2'>Response: </p>
                    <div className='response-text'>
                        {botReply}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default ChatBot



