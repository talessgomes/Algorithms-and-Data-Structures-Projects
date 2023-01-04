function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    
    for(let i = min; i <= max; i++) {
       sumBetween += i;
    }
  
    return sumBetween;
  }
  
  console.log(sumAll([1, 4]));
  
  /*Também seria possível fazer com 
    for(let i = Math.min(...arr); i < Math.max(...arr); i ++ {
      sumBetween += i;
    }) 
   */