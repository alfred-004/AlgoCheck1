import React from "react";
import { Link } from "react-router-dom";
import "./StackI.css";

const StackI = () => {
  return (
    <>
      <div className="page">
        <div className="content">
          <h2>Introduction to Stack</h2>
          <div className="main-content">
            <div className="writing">
              <ul>
                <li>Stack Data Structure:</li>
                <p>
                  A stack is a linear data structure that operates much like a
                  stack of plates. The most recently added item is always on
                  top, and you can only access or remove the top item. New
                  elements are added to the top, and the last added element is
                  the first to be removed, following the LIFO principle.
                </p>
              </ul>
            </div>
            <div className="writing">
              <ul>
                <li>The LIFO Principle:</li>
                <p>
                  The LIFO (Last-In-First-Out) principle governs the behavior of
                  stacks. It means that the most recently added item is the
                  first to be removed. This concept is intuitive and mirrors
                  real-life scenarios, such as stacking books or plates.
                </p>
              </ul>
            </div>
            <div className="writing">
              <ul>
                <li>Methods of Managing Stacks:</li>
              </ul>
              <div className="methods">
                <li>Push:</li>
                <p>
                  The "push" operation is used to add an element to the top of
                  the stack. It involves inserting an item into the stack, and
                  this new item becomes the top element.
                </p>
              </div>
              <div className="methods">
                <li>Pop:</li>
                <p>
                  The "pop" operation removes the top element from the stack.
                  After a pop operation, the element beneath the removed one
                  becomes the new top element. Popping an empty stack is an
                  error and should be handled appropriately.
                </p>
              </div>
              <div className="methods">
                <li>Peek (Top):</li>
                <p>
                  The "peek" operation allows you to examine the top element of
                  the stack without removing it. This is useful for inspecting
                  the element that will be removed next.
                </p>
              </div>
              <div className="methods">
                <li>IsEmpty:</li>
                <p>
                  The "isEmpty" operation checks whether the stack is empty or
                  not. This is essential to prevent errors when attempting to
                  pop an empty stack.
                </p>
              </div>
            </div>
            <Link to='/stack-methods'><button>NEXT</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackI;
