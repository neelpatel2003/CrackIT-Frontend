import React, { useState } from 'react'
import axios from 'axios';
const CodeEditor = () => {
   const [message, setMessage] = useState("");
   const [reply, setReply] = useState("");
   const codeCompiler = async () => {
      try {
         const response = await axios.post('/api/chat', {
            prompt: `Analyze the code and give suggestions, programming language of code, time complexity of code and fix errors.Code is as per below:
            ${message}`
         });
         console.log(response);
         setReply(response.data);
      } catch (error) {
         console.error(error);
      }
   }
   return (
      <>
         <div className="editor-container">
            <div className="editor">
               <h2>CODE EDITOR</h2>
               <textarea
                  value={message}
                  name="CodeEditor"
                  id="code-editor"
                  cols={70}
                  rows={10}
                  placeholder='Write code here..'
                  onChange={(e) => setMessage(e.target.value)}></textarea>
               <textarea
                  value={reply}
                  name="CodeEditor"
                  id="code-editor"
                  cols={70}
                  rows={10}
                  placeholder='Output...'></textarea>
            </div>
            <button type='submit' onClick={codeCompiler} className='editor-btn'>Submit</button>
         </div>
      </>
   )
}

export default CodeEditor
