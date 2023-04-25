import uniqid from 'uniqid'
import image1 from './images/tesla2.png'
import image2 from './images/tesla4.png'
import image5 from './images/tesla6.png'
import image6 from './images/tesla7.png'
import image7 from './images/tesla8.png'
import image8 from './images/tesla9.png'
import image9 from './images/tesla10.png'
import image10 from './images/tesla11.png'
import image12 from './images/tesla1.png'

import { reshuffleImages, markAsClicked } from '../data'

import { useState } from 'react';
export const ImageGrid = ({setScore, setBest, bestScore, currentScore}) => {
  
  
  let collection =  [
    {id: uniqid(), src: image12, clicked: false},
    {id: uniqid(), src: image1,  clicked: false},
    {id: uniqid(), src: image2,  clicked: false},
    {id: uniqid(), src: image5,  clicked: false},
    {id: uniqid(), src: image6,  clicked: false},
    {id: uniqid(), src: image7,  clicked: false},
    {id: uniqid(), src: image8,  clicked: false},
    {id: uniqid(), src: image9,  clicked: false},
    {id: uniqid(), src: image10,  clicked: false},
    {id: uniqid(), src: image7,  clicked: false},
    {id: uniqid(), src: image8,  clicked: false},
    {id: uniqid(), src: image9,  clicked: false},
    ]
            
    const [images, setImages] = useState(collection)
    

    const handleClick = (e) => {
      const status = markAsClicked(e.target, collection)

      //If collection is returned reshuffle
      if(status){
        //Increment current score
        setScore(currentScore += 1)
        setImages(reshuffleImages(status))
      } 
      else{//If target images has been clicked- flase was returned

      }
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
    </div>
  )
}

export default ImageGrid