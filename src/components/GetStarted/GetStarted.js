import React from 'react'
import { Link } from 'react-router-dom';
import './GetStarted.css'

const GetStarted = () => {
  return (
    <>
    <div className='searchbar'>
      <input type='text' placeholder='Search any topic here '/>
      <button>Search</button>
    </div>
      <div className='data-structure'>
        <h1>Data Structure</h1>
        <div className='topic'>
          <div className='topics'>
            <Link to = "/stack-intro">
            <h2>Stack</h2>
            <p>10 topics!</p>
            </Link>
          </div>
          <div className='topics'>
            <a href='#'>
            <h2>Stack</h2>
            <p>10 topics!</p>
            </a>
          </div>
          <div className='topics'>
            <a href='#'>
            <h2>Stack</h2>
            <p>10 topics!</p>
            </a>
          </div>
      </div>
      </div>
      <div className='algorithm'>
        <h1>Algorithm</h1>
        <div className='topic'>
          <div className='topics'>
            <h2>Sorting</h2>
            <p>20 topics</p>
          </div>
          <div className='topics'>
            <h2>Sorting</h2>
            <p>20 topics</p>
          </div><div className='topics'>
            <h2>Sorting</h2>
            <p>20 topics</p>
          </div><div className='topics'>
            <h2>Sorting</h2>
            <p>20 topics</p>
          </div>
          </div>
      </div>
    </>
  )
}

export default GetStarted;