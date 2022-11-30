import React, {useState} from 'react'
import A from './A';

export default function B() {
    const [count, setCount] = 
    useState(0);

  const handleClick = (event, num) => {
    console.log(event.target);

    setCount(current => current + num);
  };

  return (
    <div>
       <A handleClick={handleClick} />

        <h2>Count: {count}</h2>
    </div>
  )
}
