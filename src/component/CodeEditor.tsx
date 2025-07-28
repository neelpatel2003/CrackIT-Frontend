import React, { useState } from 'react'
import axios from 'axios';
const CodeEditor = () => {
   const [message, setMessage] = useState("");
   const [reply, setReply] = useState("");
   const codeCompiler = async () => {
      try {
         const response = await axios.post('/api/chat', {
            prompt: `Analyze the code and give code efficiency (in percentage) in addition with programming language of code, time complexity of code and fix errors.Code is as per below:
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
         <div className='editor-page'></div>
         <div className="editor-container ">
            <div className="editor">
               <h2 className='text-blue-700'>CODE EDITOR</h2>
               <div className='flex gap-8'>
                  <div>
                     <p className='text-xl'>Input</p>
                     <textarea
                        value={message}
                        name="CodeEditor"
                        id="code-editor"
                        cols={70}
                        rows={10}
                        style={{ padding: "5px" }}
                        placeholder='Write code in any language here...
   For example:
<html>
<head>
<title> Hello world</title>
</head>
<body>
<div>Big fan sir<div>
</body>
</html>
'
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                  <div>
                     <p className='text-xl'>Output</p>
                     <textarea
                        value={reply}
                        name="CodeEditor"
                        id="code-editor"
                        cols={70}
                        rows={10}
                        style={{ padding: "5px" }}
                        placeholder='Get efficiency, language, time complexity with error handling here...'
                        readOnly
                     ></textarea>
                  </div>
               </div>
            </div>
            <button type='submit' onClick={codeCompiler} className='editor-btn'>Submit</button>
         </div>
      </>
   )
}

export default CodeEditor

// #include<stdio.h>
// using namespace std;
// int main(){
// int n;
// cin>>n
// cout<<n+2<<endl;
// }

{/* <html>
<head>
<title> Hello world</title>
</head>
<body>
<div>Big fan sir<div>
</body>
</html>  */}
