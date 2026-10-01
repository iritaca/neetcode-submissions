class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits: number[]): number {
        let left = 0 
        let best =0
        const baskets =2
        const map = new Map<number,number>()
        for(let right =0;right<fruits.length;right++){
            if(!map.has(fruits[right])){
                map.set(fruits[right],1)
            }else{
                map.set(fruits[right],(map.get(fruits[right]??0)+1))
            }
            while(map.size>baskets){
                const curr = (map.get(fruits[left])??0) - 1
                if(curr ===0) {
                    map.delete(fruits[left])
                }else{
                    map.set(fruits[left],curr)
                }
                left++
            }

            best= Math.max(best,right - left + 1)
        }
        return best
    }
}
