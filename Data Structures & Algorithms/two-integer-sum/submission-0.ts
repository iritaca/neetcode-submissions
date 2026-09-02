class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map ={}
        for(let i = 0; i < nums.length;i++){
        const res = target - nums[i]
        if(Object.keys(map).includes(res+'')){
            return [i, map[res]]
        } else{
            map[nums[i]]=i
        }
        
        }
    }
}
