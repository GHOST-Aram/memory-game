import uniqid from 'uniqid'
import image1 from './images/waterfall-1.jpg'
import image2 from './images/waterfall-2.jpg'
import image3 from './images/waterfall-3.jpg'
import image4 from './images/waterfall-4.jpg'
import image5 from './images/waterfall-5.jpg'
import image6 from './images/waterfall-6.jpg'
import image7 from './images/waterfall-7.jpg'
import image8 from './images/waterfall-8.jpg'
import image9 from './images/waterfall-9.jpg'
import image10 from './images/waterfall-10.jpg'
import image11 from './images/waterfall-11.jpg'
import image12 from './images/waterfall-12.jpg'
import GameStatus from './GameStatus'


import { reshuffleImages, markAsClicked } from '../data'

import { useState } from 'react';
export const ImageGrid = ({setScore, setBest, bestScore, currentScore}) => {
  
  
  let collection =  [
    {id: uniqid(), src: image1,  clicked: false},
    {id: uniqid(), src: image2,  clicked: false},
    {id: uniqid(), src: image3,  clicked: false},
    {id: uniqid(), src: image4,  clicked: false},
    {id: uniqid(), src: image5,  clicked: false},
    {id: uniqid(), src: image6,  clicked: false},
    {id: uniqid(), src: image7,  clicked: false},
    {id: uniqid(), src: image8,  clicked: false},
    {id: uniqid(), src: image9,  clicked: false},
    {id: uniqid(), src: image10,  clicked: false},
    {id: uniqid(), src: image11,  clicked: false},
    {id: uniqid(), src: image12, clicked: false},
    ]
            
    const [images, setImages] = useState(collection)
    
    const [isWin, setIsWin] = useState(false)

    const [showStatus, setShowStatus] = useState(false)



    const handleClick = (e) => {
      const status = markAsClicked(e.target.id, images)

      //If collection is returned reshuffle
      if(status){
        //Increment current score
        setScore(currentScore += 1)
        if(currentScore === images.length){ //Player wins
          setBest(currentScore)
          setIsWin(true)
          setShowStatus(true) //diplay win
        }
        else {setImages(reshuffleImages(status))}
      } 
      else{//If target images has been clicked- flase was returned
        //Set best score
        if(currentScore > bestScore){
          setBest(currentScore)
        }
        
        // Alert user 
        setIsWin(false)
        setShowStatus(true)
      }
    }
    
    const hideStatus = () => {
      setShowStatus(false)
      tryAgain()
    }
    
    const tryAgain = () =>{
      //Reset current score
      setScore(0)
  
      // Reset images
      setImages(collection)
      
    }
  
  return (
    <div className='grid grid-4 gap-4 container py-12'>
      {
      images.map((image, index) => {
        return <div key={image.id} className='p-4 bg-gray rounded-md'>
                  <img id={image.id}  onClick={(e)=>handleClick(e)} 
                   src ={image.src}  alt={`imageNo-${index + 1}`}/>
              </div>
      })
    }
    {showStatus && <GameStatus bestScore={bestScore} hideStatus={hideStatus} 
    currentScore={currentScore} isWin={isWin}
    />}
    </div>
  )
}

export default ImageGrid