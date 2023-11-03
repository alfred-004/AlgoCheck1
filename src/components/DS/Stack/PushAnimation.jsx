import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import './push.css'; // Import your CSS file


const PushPopAnimation = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);

  const pushItem = () => {
    setItems((prevItems) => [...prevItems, `data ${count}`]);
    setCount(count + 1);
  };

  const popItem = () => {
    if (items.length > 0) {
      setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
    }
  };

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  return (
    <div className="push-pop-animation-container">
      <div className="button-container">
        <button className='b1' onClick={pushItem}>Push Item</button>
        <button className='b2' onClick={popItem}>Pop Item</button>
      </div>
      <div className="items-container">
        <ul>
          {transitions((style, item) => (
            <animated.li style={style} key={item}>
              {item}
            </animated.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PushPopAnimation;
