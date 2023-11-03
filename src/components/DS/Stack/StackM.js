import React from "react";
import PushPopAnimation from "./PushAnimation";
import { Link } from 'react-router-dom';
import "./StackM.css";

const StackM = () => {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="writings">
            <li>PUSH</li>
            <p>
              The "push" method in a stack data structure is used to add an
              element to the top of the stack. It involves two key steps: First,
              increment the stack's pointer or "top" to make room for the new
              element. Second, place the new element at the newly incremented
              position. This operation is efficient with a time complexity of
              O(1) because it doesn't depend on the size of the stack. It's
              commonly used in applications like managing function calls in a
              computer's memory, tracking history in web browsers, and solving
              problems that require a Last-In-First-Out (LIFO) data structure.
            </p>
          </div>
          <div className="writings">
            <li>POP</li>
            <p>
              The "pop" method is a common operation in computer programming,
              often used in the context of stacks or arrays. It allows you to
              remove and return the last element from a data structure, such as
              an array. When invoked, the "pop" method decreases the length of
              the array by one and returns the removed element. This operation
              is helpful for managing and manipulating data in a last-in,
              first-out (LIFO) fashion. In essence, it is the reverse of the
              "push" method, which adds elements to the end of the data
              structure. The "pop" method is a fundamental tool for managing
              data in many programming scenarios
            </p>
          </div>
          <PushPopAnimation />
        </div>
      </div>
      <div className="p-n">
        <Link to="/stack-intro"><button className="bt-1">PREV</button></Link>
        <Link to="/stack-code"><button className="bt-2">NEXT</button></Link>
        </div>
    </>
  );
};

export default StackM;
