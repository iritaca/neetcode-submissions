class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if(s===" ") return true
        const loweCasedWord =s.toLowerCase().replace(/[^a-z0-9]/g,"")
        for(let i = 0; i<Math.floor(loweCasedWord.length/2);i++){
            if(loweCasedWord[i]!==loweCasedWord[loweCasedWord.length - (i+1)])return false
        }
        return true
    }
}
