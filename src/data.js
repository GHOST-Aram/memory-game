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
