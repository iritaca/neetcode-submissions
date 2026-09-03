class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    wordSort(word:string):string{
        return word.split('').sort().join('')
    }

    groupAnagrams(strs: string[]): string[][] {
        const groups:Record<string,string[]> = {}
        for(let i =0;i<strs.length;i++){
            const group = this.wordSort(strs[i])

if(!groups[group]){
    groups[group]=[]
}
groups[group].push(strs[i])

        }
        return [...Object.values(groups)].sort((a,b)=>a.length- b.length)
        
}
}