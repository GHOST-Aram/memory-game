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

import { reshuffleImages } from '../data'

import { useState } from 'react';
export const ImageGrid = () => {
  
  
  let collection =  [
    {id: uniqid(), src: image12, isClicked: false},
    {id: uniqid(), src: image1,  isClicked: false},
    {id: uniqid(), src: image2,  isClicked: false},
    {id: uniqid(), src: image5,  isClicked: false},
    {id: uniqid(), src: image6,  isClicked: false},
    {id: uniqid(), src: image7,  isClicked: false},
    {id: uniqid(), src: image8,  isClicked: false},
    {id: uniqid(), src: image9,  isClicked: false},
    {id: uniqid(), src: image10,  isClicked: false},
    {id: uniqid(), src: image7,  isClicked: false},
    {id: uniqid(), src: image8,  isClicked: false},
    {id: uniqid(), src: image9,  isClicked: false},
    ]
            
    const [images, setImages] = useState(collection)
    

    const handleClick = (e) => {
      // e.target.style.display = 'none'
      setImages(reshuffleImages(collection))
    }
    
  
  return (
    <div className='grid grid-4 gap-4 container py-12'>
      {
      images.map((image, index) => {
        return <div className='p-4 bg-gray rounded-md'>
                  <img  id= {image.id} onClick={(e)=>handleClick(e)} 
                  key={image.id} src ={image.src}  alt={`imageNo-${index + 1}`}/>
              </div>
      })
      }
    </div>
  )
}

export default ImageGrid