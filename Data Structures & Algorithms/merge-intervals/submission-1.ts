class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if(intervals.length===0) return []
        const sorted = [...intervals].sort((a,b)=>a[0]-b[0])
        const result = [sorted[0]]

        for(let i=1; i<sorted.length;i++){
            const last = result[result.length-1]
            if(last[1]>=sorted[i][0]){
                const highest = Math.max(last[1],sorted[i][1])
                last[1]=highest
            }else{
                result.push(sorted[i])
            }
        }
        return result

    }
}
