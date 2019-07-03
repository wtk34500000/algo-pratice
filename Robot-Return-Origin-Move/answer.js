var judgeCircle = function(moves) {
    let origin = [0, 0];
    moves.split("").forEach(move => {
        if(move === 'U'){
            origin[0]=origin[0]+1
        }else if(move === 'D'){
            origin[0]=origin[0]-1
        }else if(move === 'L'){
            origin[1]=origin[1]+1
        }else if(move === 'R'){
            origin[1]=origin[1]-1
        }
    })
    
    return origin[0]===0 && origin[1]===0
};