class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0, right = matrix.length -1
        while (left<right){
            const mid = Math.floor((left+right)/2)
            if(target<=matrix[mid][matrix[mid].length-1]){
                right = mid
            }else{
                left = mid+1
            }
        }

        let nLeft=0, nRight =matrix[left].length-1
        while(nLeft<=nRight){
            let nMid=Math.floor((nLeft+nRight)/2)
            if(target ===matrix[left][nMid]){
                return true
            }else if(target<matrix[left][nMid]){
                nRight= nMid-1
            }else{
                nLeft = nMid+1
            }
        }
        return false
    }
}
