import React from 'react'
import Overlay from './Overlay'

const GameStatus = ({isWin, currentScore, bestScore, hideStatus}) => {
  return (
    <>
        <Overlay />
        <div id='game-status' className='bg-white border-gray p-8 text-center rounded-lg position-absolute cursor-pointer w-50'>
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
            <button className='bg-gray cursor-pointer text-white py-4 px-8 border-none rounded-sm hover-scale'
                    onClick={hideStatus}
            >
                <h2 className='font-light'>{isWin ? 'Play Again' : 'Try Again'}</h2>
            </button>
        </div>
    </>
  )
}

export default GameStatus