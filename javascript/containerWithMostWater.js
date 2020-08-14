/**PROBLEM:
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at   *coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
    let maximumArea = 0 
    for (let j=0; j < height.length; j++){
         let val1 = height[j]
         for (let i=0; i < height.length; i++){
            let val2 = height[i]
            let heightFinal = Math.min(val1, val2) 
            let width = i - j
            let newArea = heightFinal * width
            if (newArea > maximumArea) {maximumArea = newArea}
        }
    }
    return maximumArea
} 