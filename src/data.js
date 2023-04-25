export const reshuffleImages = (collection) =>{
    for(let index = collection.length -1; index >= 0; index --){
      // generate random index btw 0 and max
      const randomIndex = Math.floor(Math.random() * index)

      // Swap image at current index with image at random index
      const temp = collection[index] //Value at current index

      //Value at random index
      const randomVal = collection[randomIndex]

      // swap
      collection[index] = randomVal
      collection[randomIndex] = temp
    }
    return collection
  }

  export const markAsClicked = (target, collection) =>{
    for(let index = 0; index < collection.length; index++){
        const image = collection[index]
        //Find target
        if(image.id === target.id){
            // check if not clicked then click
            if(!image.clicked){
                image.clicked = !image.clicked//Invert 
                break
            } 
            else {return false} //Return false if image had been clicked
        }

    }
    return collection
  }