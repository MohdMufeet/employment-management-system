import React from 'react'

const Button = ({btnName, type, className}) => {
  return (
    <>
    <button className={className} type={type}>
        {btnName}
    </button>
    </>
  )
}

export default Button