/**
 * @param {number[]} arr
 * Given an integer array arr of distinct integers and an integer k.
 * A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds.
 * Return the integer which will win the game.
 * It is guaranteed that there will be a winner of the game.
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    win_count = 0
    winner = 0
    
    while (win_count<k){
        if(arr[0]>arr[1]){
            winner = arr[0]
            arr.push(arr[1])
            arr.splice(1,1)
            win_count ++
        }
        else {
            winner = arr[1]
            arr.push(arr[0])
            arr.splice(0,1)
            win_count =1
        }
   }
    
    return winner
    
   
};