class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let lastDigit = digits[digits.length-1]
        let allNines = true
        if(lastDigit<9){
             digits[digits.length-1] = lastDigit + 1
             return digits
        }
        else{
            for(let i =0;i<digits.length;i++){
                if(digits[digits.length-1-i]===9){
                    digits[digits.length-1-i]=0
                }
                else {
                    allNines=false
                    digits[digits.length-1-i] += 1
                    break
                }
            }
            if(allNines){
                digits.unshift(1)
            }
        }
        
        return digits 
    }
}
