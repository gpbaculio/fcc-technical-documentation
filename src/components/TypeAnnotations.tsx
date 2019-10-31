import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

const TypeAnnotations = () => {
  const type_annotations_code_1 = `function greeter(person: string) {
  return "Hello, " + person;
}
  
var user = [0, 1, 2];
  
document.body.innerHTML = greeter(user);`;
  const type_annotations_code_2 = `greeter.ts(7,26): Supplied parameters do not match any signature of call target`;
  return (
    <section id='Type_Annotations' className='main-section'>
      <header className='main-option'>Type Annotations</header>
      <div className='content'>
        <p>
          Type annotations in TypeScript are lightweight ways to record the
          intended contract of the function or variable. In this case, we intend
          the greeter function to be called with a single string parameter. We
          can try changing the call greeter to pass an array instead:
        </p>
        <div className='type-annotations-code-1'>
          <SyntaxHighlighter language='typescript' style={okaidia}>
            {type_annotations_code_1}
          </SyntaxHighlighter>
          <CopyToClipBoard text={type_annotations_code_1} />
        </div>
        <p>Re-compiling, you’ll now see an error:</p>
        <div className='type-annotations-code-2'>
          <SyntaxHighlighter language='shell' style={okaidia}>
            {type_annotations_code_2}
          </SyntaxHighlighter>
          <CopyToClipBoard text={type_annotations_code_2} />
        </div>
        <p>
          Similarly, try removing all the arguments to the greeter call.
          TypeScript will let you know that you have called this function with
          an unexpected number of parameters. In both cases, TypeScript can
          offer static analysis based on both the structure of your code, and
          the type annotations you provide.
        </p>
        <p>
          Notice that although there were errors, the <mark>greeter.js</mark>{' '}
          file is still created. You can use TypeScript even if there are errors
          in your code. But in this case, TypeScript is warning that your code
          will likely not run as expected.
        </p>
      </div>
    </section>
  );
};

export default TypeAnnotations;
