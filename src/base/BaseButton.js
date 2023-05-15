import React from 'react'

function BaseButton({className,label}) {
  return (
    <button className={className}> {label} </button>
  )
}

export default BaseButton