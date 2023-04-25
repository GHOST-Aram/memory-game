import React from 'react'

const Header = () => {
  return (
    <header className=' flex flex-row items-start justify-between bg-gray px-8 py-8'>
        <h1 className="text-left text-white font-md">Memory Game</h1>
        <div className="scores text-right">
            <h3 className="font-light text-white">Current Score</h3>
            <h3 className="font-light text-white">Best Score</h3>
        </div>
    </header>
  )
}

export default Header