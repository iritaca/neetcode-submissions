class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        const res = []
        const maxRowCount = matrix.length-1
        const maxColCount = matrix[0].length-1
        let top=0, right=maxColCount, bottom=maxRowCount,  left = 0

        while(top<=bottom && left <=right){
            // Top row
            for(let col = left; col<=right;col++){
                res.push(matrix[top][col]) 
            }
            top++
            // Right col
            for(let row = top;row<=bottom;row++){
                res.push(matrix[row][right])
            }
            right--
            // Bottom row
            for(let col=right;col>=left;col--){
                if(top<=bottom){
                    res.push(matrix[bottom][col])
                }
            }
            bottom--
            for(let row=bottom;row>=top;row--){
                if(left<=right){
                    res.push(matrix[row][left])
                }
            }
            left++
        }
        return res

    }
}
