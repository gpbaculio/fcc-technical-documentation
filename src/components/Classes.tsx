import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

const Classes = () => {
  const classes_code = `class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);`;
  return (
    <section id='classes'>
      <h2 className='main-option'>Classes</h2>
      <div className='content'>
        <p>
          Finally, let’s extend the example one last time with classes.
          TypeScript supports new features in JavaScript, like support for
          class-based object-oriented programming.
        </p>
        <p>
          Here we’re going to create a <mark>Student</mark> class with a
          constructor and a few public fields. Notice that classes and
          interfaces play well together, letting the programmer decide on the
          right level of abstraction.
        </p>
        <p>
          Also of note, the use of <mark>public</mark> on arguments to the
          constructor is a shorthand that allows us to automatically create
          properties with that name.
        </p>
        <div className='classes-code'>
          <SyntaxHighlighter language='typescript' style={okaidia}>
            {classes_code}
          </SyntaxHighlighter>
          <CopyToClipBoard text={classes_code} />
        </div>
        <p>
          Re-run <mark>tsc greeter.ts</mark> and you’ll see the generated
          JavaScript is the same as the earlier code. Classes in TypeScript are
          just a shorthand for the same prototype-based OO that is frequently
          used in JavaScript.
        </p>
      </div>
    </section>
  );
};

export default Classes;
