import React, { useEffect, useState } from 'react'

const Counter = () => {
    // logic
    // let counter = 0

    const [counter2, setCounter2] = useState(0)

    const increase = () => {
        // counter += 1;
        // console.log("~ increase", counter);
        setCounter2(counter2 + 1);
        console.log("~ increase")
    };
    const decrease = () => {
        setCounter2(counter2 - 1);
        console.log("~ decrease")
    };

    useEffect(() => {
        console.log('counter2', counter2)
    }, [counter2])

    //view
  return ( <div>
    <div className='flex gap-1 justify-center'>{counter2}</div>
    <button type='button' className='bg-blue-800 text-white px-1' onClick={increase}>+1</button>
    <button type='button' className='bg-blue-800 text-white px-1' onClick={decrease}>-1</button>
  </div>
  )
}

export default Counter