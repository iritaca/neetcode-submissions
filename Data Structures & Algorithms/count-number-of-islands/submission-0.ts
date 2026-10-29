class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let count =0

        function canPaint(r:number,c:number):boolean{
            if(r<0||r>grid.length-1) return false
            if(c<0||c>grid[0].length-1) return false
            if(grid[r][c]!=='1') return false
            return true
        }

        function fill(r:number,c:number):void{
            if(!canPaint(r,c)) return 
            grid[r][c]='0'
            fill(r-1,c)
            fill(r+1,c)
            fill(r,c-1)
            fill(r,c+1)
        }

        for(let r =0;r<grid.length;r++){
            for(let c=0;c<grid[0].length;c++){
                if(grid[r][c]==='1'){
                    count++
                    fill(r,c)
                }
            }
        }

        return count
    }
}
