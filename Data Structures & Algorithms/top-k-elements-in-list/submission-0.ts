class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map:Map<number,number> = new Map()
        for(let i =0 ; i <nums.length;i++){
            if(map.get(nums[i])===undefined){
                map.set(nums[i],1)
            }else{
                const curr = map.get(nums[i])??0
                map.set(nums[i],curr+1)
            }
            
        }

    const sortedMap = [...map.entries()].sort((a,b)=>b[1]-a[1])
    const list = []
    for(let j = 0;j<k;j++){
        list.push(sortedMap[j][0])
    }
    return list
    }
}
