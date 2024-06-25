import React from 'react'

// type: increase/decrease
const CounterButton = ({ step, type }) => {
  // logic

  // view
  return (
    <div>
    <button type='button' className='bg-blue-800 text-white px-1' onClick={step}>+1</button>
    {/* <button type='button' className='bg-blue-800 text-white px-1' onClick={step2}>-1</button>     */}
    </div>
  )
}

export default CounterButton