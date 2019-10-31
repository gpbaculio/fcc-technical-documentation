import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

const Compiling = () => {
  const compiling_code_1 = 'tsc greeter.ts';
  const compiling_code_2 = `function greeter(person: string) {
  return "Hello, " + person;
}
  
var user = "Jane User";
  
document.body.innerHTML = greeter(user);`;
  return (
    <section id='Compiling_your_code' className='main-section'>
      <header className='main-option'>Compiling your code</header>
      <div className='content'>
        <p>
          We used a .ts extension, but this code is just JavaScript. You could
          have copy/pasted this straight out of an existing JavaScript app.
        </p>
        <p>At the command line, run the TypeScript compiler:</p>
        <div className='compiling-code-1'>
          <SyntaxHighlighter language='shell' style={okaidia}>
            {compiling_code_1}
          </SyntaxHighlighter>
          <CopyToClipBoard text={compiling_code_1} />
        </div>
        <p>
          The result will be a file greeter.js which contains the same
          JavaScript that you fed in. We’re up and running using TypeScript in
          our JavaScript app!
        </p>
        <p>
          Now we can start taking advantage of some of the new tools TypeScript
          offers. Add a : string type annotation to the ‘person’ function
          argument as shown here:
        </p>
        <div className='compiling-code-2'>
          <SyntaxHighlighter language='typescript' style={okaidia}>
            {compiling_code_2}
          </SyntaxHighlighter>
          <CopyToClipBoard text={compiling_code_2} />
        </div>
      </div>
    </section>
  );
};

export default Compiling;
