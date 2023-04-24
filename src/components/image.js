import React from 'react'

const Image = ({image}) => {
  return (
    <img src={image.src} alt="Tesla car" />
  )
}

export default Image