import React from 'react'


const GameStatus = ({isWin, currentScore, bestScore}) => {
  return (
    <div className='bg-white border-gray p-8 text-center rounded-lg position-absolute w-50'>
        {
        isWin ?
        <>
            <h1 className='font-md text-green-500'>Congratulations: You Remembered all Images Correctly.</h1>
            <h1 className='font-light py-8'>Current Score: <span className='text-sky-blue'>{currentScore}</span></h1>
        </>
        :
        <>
            <h1 className='font-md text-red-500'>Game Over: You Clicked the Same Image Twice.</h1>
            <h1 className='font-light pb-4'>Current Score: <span className='text-sky-blue'>{currentScore}</span></h1>
            <h1 className='font-light pb-8'>Best Score: <span className='text-sky-blue'>{bestScore}</span></h1>
        </>

        }
        <button className='bg-gray text-white py-4 px-8 border-none rounded-sm hover-scale'>
            <h2 className='font-light'>{isWin ? 'Play Again' : 'Try Again'}</h2>
        </button>
    </div>
  )
}

export default GameStatus