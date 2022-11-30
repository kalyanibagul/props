import React, {useState}from 'react'

export default function A({handleClick}) {
  return (
    <div>
      <button onClick={event => handleClick(event, 100)}>
        Click
      </button>
    </div>
  )
}
