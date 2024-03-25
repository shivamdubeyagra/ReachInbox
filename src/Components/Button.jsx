import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <button className="bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white w-48 py-3 px-6">
          {text}
        </button>
    </>
  )
}

export default Button