class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let sum = 0
        let maxSum = -Infinity
        for(let i =0;i<nums.length;i++){
            if(sum<0){
                sum=0
            }
            sum+=nums[i]
            if(maxSum<sum){
                maxSum=sum
            }
        }
        return maxSum
    }
    
}
