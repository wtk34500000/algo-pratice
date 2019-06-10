function solve(s){
   return 'abcdefghijklmnopqrstuvwxyz'.includes(s.split("").sort().join(""))
}