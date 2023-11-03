import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';
import { Link } from 'react-router-dom';
import "./StackP.css";

export default function StackP() {
  return (
    <>
      <div className='problem-page'>
        <h2>Q1. Write a program wherein you have to write all the methods in stack and display the stack after using each method</h2>
        <div className='code-editor'>
        < AceEditor mode="c_cpp" theme="monokai" fontSize={20}/>
        </div>
      </div>
      <div className="p-n">
        <Link to="/stack-code"><button className="bt-1">PREV</button></Link>
        <Link to="/get-started"><button className="bt-2">FINISH</button></Link>
    </div>

    </>
  )
}
