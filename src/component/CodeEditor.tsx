import axios from 'axios';
import React, { useState } from 'react'

const CodeEditor = async () => {
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
      <>
         <div className="editor-container">
            <div className="editor">
               <h2>CODE EDITOR</h2>
               <textarea className='p-3' onChange={(e) => setMessage(e.target.value)} name="CodeEditor" id="code-editor" cols={70} rows={10} placeholder='Write code here..'></textarea>
            </div>
            <button onClick={handleChat} type='submit' className='editor-btn'>Submit</button>
            <hr className='w-full m-3' />
            <div className='m-3'>
               {botReply}
            </div>
         </div>
      </>
   )
}

export default CodeEditor
