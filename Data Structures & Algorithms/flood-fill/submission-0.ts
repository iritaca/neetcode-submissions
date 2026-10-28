class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(
        image: number[][],
        sr: number,
        sc: number,
        color: number,
    ): number[][] {
        const prevColor =image[sr][sc]
        function canPaint(r:number,c:number):boolean{
            if(r<0||r>image.length-1) return false
            if(c<0||c>image[0].length) return false 
            if(image[r][c]!==prevColor||color===image[r][c]) return false
            return true
        }
        
        function fill(r:number,c:number):void{
            if(!canPaint(r,c)) return
            image[r][c]=color
            fill(r-1,c)
            fill(r+1,c)
            fill(r,c-1)
            fill(r,c+1)
        }
        fill(sr,sc)
        return image
    }
}
