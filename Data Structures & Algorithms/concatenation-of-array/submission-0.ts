class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans =[...nums]
        for(let i =0; i<nums.length;i++){
            ans.push(nums[i])
        }
        return ans
    }
}
