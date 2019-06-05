function solution(roman){
    // complete the solution by transforming the 
    // string roman numeral into an integer 
    var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let sum=0;
    for(let i =0; i<roman.length; i++){
      if(data[roman[i]] < data[roman[i+1]]){
         sum+=data[roman[i+1]]-data[roman[i]]
         i++;
      }else{
      sum+=data[roman[i]]
      }
    }
    return sum
  }