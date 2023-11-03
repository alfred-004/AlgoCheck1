import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import './StackC.css'

export default function StackC() {

    const codeString1 = 
    `#include<stdio.h>
    #include<stdlib.h>
    #define SIZE 20
    
    typedef struct
    {
        int tos;  //to get the last data
        float arr[SIZE]; //any random size
 
    } Stack;


    
int main()
{
    Stack s1;  //creating a variable of stack 
	s1.tos = -1;  //initializing the stack


    return 0;
}    
    `;

    const codeString2 = `
    // Push an element onto the stack.
    void push(Stack *s, int n) 
    {
    // Check for stack overflow.
    if (s->tos == SIZE - 1) 
    {
        // Increment tos, store element.
        (s->tos)++;
        s->a[s->tos] = n;
    }
}

// Pop an element from the stack.
int pop(Stack *s)
 {
    // Check for stack underflow.
    if (s->tos == -1) 
    {
        // If underflow, print error and return 0.
        printf("Stack Underflow. ");
        return 0;
    }
     else 
    {
        // Return the top element and decrement tos.
        return (s->a[s->tos--]);
    }
}

// Display stack elements from top to bottom.
void display(Stack s) {
    // Iterate from top of the stack to the bottom.
    for (int i = s.tos; i >= 0; i--) {
        // Print each element with spacing.
        printf(" %d ", s.a[i]);
    }
    // Print a newline for formatting.
    printf("\n");
}


    `;

    const codeString3 = `

    // Get the top element without removing it.
int peek(Stack s) 
{
    // Check if the stack is not empty.
    if (!isEmpty(s)) 
    {
        // Return the top element.
        return (s.a[s.tos]);
    }
}


// Check if the stack is empty.
int isEmpty(Stack s) 
{
    // If tos is -1, the stack is empty (return 1) 
    if (s.tos == -1) {
        return 1;
    }
    //it's not (return 0) 
    else 
    {
        return 0;
    }
}

`;

  return (
    <>
    <div className='code-page'>
    <h2>Implementation Code of Stack in C language</h2>
    <div className='code'>
        <ul>
        <li><h3>Declaring a Stack</h3></li>
        </ul>
    <SyntaxHighlighter language="c" style={atomOneDark} className="c-code"
        customStyle={{
            padding: "1.2rem",
        }}
    >
      {codeString1}
    </SyntaxHighlighter>
    </div>
    <div className='code'>
        <ul>
        <li><h3>Push, Pop and display method</h3></li>
        </ul>
    <SyntaxHighlighter language="c" style={atomOneDark} className="c-code"
        customStyle={{
            padding: "1.2rem",
        }}
    >
      {codeString2}
    </SyntaxHighlighter>
    </div>
    <div className='code'>
        <ul>
        <li><h3>Peek and isEmpty method</h3></li>
        </ul>
    <SyntaxHighlighter language="c" style={atomOneDark} className="c-code"
        customStyle={{
            padding: "1.2rem",
        }}
    >
      {codeString3}
    </SyntaxHighlighter>
    </div>
    </div>
    <div className="p-n">
        <Link to="/stack-methods"><button className="bt-1">PREV</button></Link>
        <Link to="/stack-problem"><button className="bt-2">NEXT</button></Link>
    </div>
    </>
  )
}
