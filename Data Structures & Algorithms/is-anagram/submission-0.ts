class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length) return false
        const map = new Map()
        for(let i =0;i<s.length;i++){
            if(map.get(s[i])===undefined){
                map.set(s[i],1)
            }else{
                const curr = map.get(s[i])??0
                map.set(s[i],curr + 1)
            }
            if(map.get(t[i]===undefined)){
                map.set(t[i],-1)
            }else{
                const curr = map.get(t[i])??0
                map.set(t[i],curr - 1 )
            }
        }
    return Array.from(map.values()).every(c=>c===0)    
    }
    
}
