class Solution {
    
    public static int[][] dir = {{-1,0},{0,-1},{1,0},{0,1}};
    public int count=0;
    public int perimeterOfIslands(int i, int j , int[][]grid){

    if(i == -1 || j == -1 || i == grid.length || j == grid[0].length || grid[i][j] == 0){
        count++;
        return 0;
    }
        if(grid[i][j] == 2){
            return -1;
        }
        int peri = 0;
        grid[i][j] = 2;
        
        for(int m = 0; m < 4; m++){
            int newi = i + dir[m][0]; 
            int newj = j + dir[m][1]; 
            
            int funPeri = perimeterOfIslands(newi, newj, grid); 
            
            if(funPeri == 0){
                peri++;
            }else if( funPeri == -1){
                continue;
            }else{
                // System.out.println(funPeri);
            peri = peri + funPeri; 
        }
        }
        
        return peri;
    }
    
    
    public int islandPerimeter(int[][] grid) {
        
        int perimeter = 0;
        
        for(int i = 0 ; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                
                if(grid[i][j] == 1 ){
     
               perimeterOfIslands(i , j , grid); 
                          perimeter =count;
                    
                }        
                
            }
        }
             return perimeter;
    }
}
