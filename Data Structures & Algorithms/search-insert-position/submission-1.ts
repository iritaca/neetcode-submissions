class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        let left = 0 , right = nums.length -1
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            if(target===nums[mid]) {return mid
            }else if(nums[mid]>target){
                right = mid -1
            }else{
                left= mid + 1
            }
            
        }
        return left
        
    }
}
