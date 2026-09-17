class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let num1=0, num2=numbers.length-1
       while(num1<num2){
            if(numbers[num1]+numbers[num2]>target){
                num2-=1
            }else if (numbers[num1]+numbers[num2]<target){
                num1+=1
            }else{
                break
            }
       }
       return [num1+1,num2+1]
    }
}
