
/**
 * There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. 
 * Given the array groupSizes of length n telling the group size each person belongs to, 
 * return the groups there are and the people's IDs each group includes.
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let finalOutput=[];
    for(let i=0; i<groupSizes.length; i++){
        let output =[];
        let arraysize = groupSizes[i]; //3
        for (let j =0; j < arraysize; j++){
           let tempIndex = groupSizes.indexOf(arraysize)
           output.push(tempIndex);
            delete groupSizes[tempIndex];
        }
        if(output.length != 0) {
            finalOutput.push(output)
        }
    }
    return finalOutput
};