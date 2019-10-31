import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

const Interfaces = () => {
  const interace_code = `interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);`;
  return (
    <section id='interfaces'>
      <h2 className='main-option'>Interfaces</h2>
      <div className='content'>
        <p>
          Let’s develop our sample further. Here we use an interface that
          describes objects that have a firstName and lastName field. In
          TypeScript, two types are compatible if their internal structure is
          compatible. This allows us to implement an interface just by having
          the shape the interface requires, without an explicit{' '}
          <mark>implements</mark> clause.
        </p>
        <div className='interfaces-code'>
          <SyntaxHighlighter language='javascript' style={okaidia}>
            {interace_code}
          </SyntaxHighlighter>
          <CopyToClipBoard text={interace_code} />
        </div>
      </div>
    </section>
  );
};

export default Interfaces;
