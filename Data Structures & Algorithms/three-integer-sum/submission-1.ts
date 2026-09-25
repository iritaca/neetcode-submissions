class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a,b)=>a-b)
        const list = []
        for (let i =0;i<nums.length-2;i++){
            if(sorted[i]===sorted[i-1]) continue 
            const inverted = sorted[i]*-1

            let p1= i +1, p2 = sorted.length-1
            while(p1<p2){
                let sortedSum = sorted[p1]+sorted[p2]
                if(sortedSum>inverted){
                    p2--
                }else if(sortedSum<inverted){
                    p1++
                }else if(sortedSum == inverted){
                    list.push([sorted[i],sorted[p1],sorted[p2]])
                    p1++
                    p2--
                    while(sorted[p1]===sorted[p1-1]&& p1<p2){
                        p1++
                    }
                    while(sorted[p2]===sorted[p2+1]&& p1<p2){
                        p2++
                    }
                }
            }
        }
        return list
    }
}
