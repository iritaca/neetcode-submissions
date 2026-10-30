class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const rows = board.length
        const cols = board[0].length

        let cells:{r:number,c:number}[] = []
        let touchesBorder=false

        function explore(startR:number,startC:number):void{
            const todo:{r:number,c:number}[]=[{r:startR,c:startC}]

            while(todo.length>0){
                const {r,c} = todo.pop()!

                if(r<0||r>rows-1||c<0||c>cols-1){
                    touchesBorder=true
                    continue
                }
                if(board[r][c]!=='O') continue

                board[r][c]='V'
                cells.push({r,c})

                todo.push(
                    {r:r-1,c},
                    {r:r+1,c},
                    {r,c:c-1},
                    {r,c:c+1},
                )
            }
        }

        //scan every cell
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(board[r][c]==='O'){
                    // initializes for this region
                    cells = []
                    touchesBorder=false

                    explore(r,c)

                    // Value for each cell in the region
                    for( const cell of cells){
                        board[cell.r][cell.c]= touchesBorder?'S':'X'
                    }
                }
            }
        }

        // Final pass to replace temporary S
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(board[r][c]==='S') board[r][c]='O'
                
            }
            }

        
    }
}
