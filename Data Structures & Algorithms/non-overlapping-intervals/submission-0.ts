class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        const sorted = [...intervals].sort((a,b)=>a[0]-b[0])
        let removed = 0
        let lastEnd = sorted[0][1]
        for(let i =1;i<sorted.length;i++){
            if(lastEnd>sorted[i][0]){
                removed++
                lastEnd=Math.min(lastEnd,sorted[i][1])
            }else{
                lastEnd=sorted[i][1]
            }
        }
        return removed
    }
}
