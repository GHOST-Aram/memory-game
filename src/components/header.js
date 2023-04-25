import React from 'react'

const Header = ({best, current}) => {
  return (
    <header className=' bg-gray px-8 py-8'>
        <div className="container flex flex-row items-start justify-between">
            <h1 className="text-left text-white font-md">Memory Game</h1>
            <div className="scores text-right">
                <h3 className="font-light text-white">Current Score: <span className='text-sky-blue'>{current}</span></h3>
                <h3 className="font-light text-white">Best Score: <span className='text-sky-blue'>{best}</span> </h3>
            </div>
        </div>
    </header>
  )
}

export default Header