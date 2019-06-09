function sortArray(array) {
    
    //filter out the odd and sort it
    let oddArr=array.filter(num => num % 2 !==0).sort((a, b) => a - b)

    //map through the orginal array and replace the odd number with the sorted odd num from the oddArr
    return array.map(num => num % 2 ===1 ?  oddArr.shift() : num )
  }