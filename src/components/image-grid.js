import uniqid from 'uniqid'
import image1 from './images/tesla2.jfif'
import image2 from './images/tesla3.jfif'
import image5 from './images/tesla6.jfif'
import image6 from './images/tesla7.jfif'
import image7 from './images/tesla8.jfif'
import image8 from './images/tesla9.jfif'
import image9 from './images/tesla10.jfif'
import image10 from './images/tesla11.jfif'
import image12 from './images/tesla1.jfif'

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
    

    const handleClick = () => {
      // e.target.style.display = 'none'
      setImages(reshuffleImages(collection))
    }
    
  
  return (
    <div className='grid grid-4 gap-4 container'>
      {images.map((image, index) => <img  id= {image.id} onClick={handleClick} key={image.id} src ={image.src}  alt={`imageNo-${index + 1}`}/>)}
    </div>
  )
}

export default ImageGrid