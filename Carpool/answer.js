//not a correct answer yet...
var carPooling = function(trips, capacity) {
    let numPassengers=0;
    for(let i=0; i < trips.length; i++){
       numPassengers= numPassengers + trips[i][0]
    }
    
    if(numPassengers<=capacity)
        {
            return true;
        }
    else if(numPassengers>capacity){
         for(let i=0; i < trips.length-1; i++){
                for(let j=i+1; j<trips.length; j++){
                    if(trips[i][2] === trips[j][1]){
                        if(trips[j][1] >= trips[j-1][2]){
                            numPassengers=numPassengers-trips[i][0]-trips[j][0]
                        }
                        numPassengers=numPassengers-trips[i][0]
                        // numPassengers=numPassengers-trips[i][0]-trips[j][0]
                }else if(trips[i][2] === trips[j][2]){
                    numPassengers=numPassengers-trips[i][0]-trips[j][0]
                }
            }
        }
            if(numPassengers<=capacity)
        {
            return true;
        }
     
    }
    
        return false;
   
    
};