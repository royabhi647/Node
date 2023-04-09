// Number Of Distinct Island
// --> https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1

Given an m*n binary matrix mat, return the number of distinct island.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Input Format
First line contains two integers n and m.
Each of next n lines contain n numbers containing either 0 or 1.

Output Format
print number of distinct island.

Constraints
1<= n <= 1000
1<= e <= n*(n-1)/2

Sample Input
3 3
1 0 0
0 1 0
1 1 1

Sample Output
2

// code

class Solution {
    static StringBuilder psf = new StringBuilder();
    int countDistinctIslands(int[][] grid) {
        // Your Code here
        HashSet<String> set = new HashSet<>();
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                if(grid[i][j] == 1){
                    psf = new StringBuilder();
                    psf.append("x");
                    dfs(grid,i,j);
                    set.add(psf.toString());
                }
            }
        }
        return set.size();
    }
    
    public static void dfs(int[][] grid, int row, int col){
        grid[row][col] = 0;
        if(row-1 >= 0 && grid[row-1][col] == 1){
            psf.append("u");
            dfs(grid,row-1,col);
        }
        if(col+1 < grid[0].length && grid[row][col+1] == 1){
            psf.append("r");
            dfs(grid,row,col+1);
        }
        if(row+1 < grid.length && grid[row+1][col] == 1){
            psf.append("d");
            dfs(grid,row+1,col);
        }
        if(col-1 >= 0 && grid[row][col-1] == 1){
            psf.append("l");
            dfs(grid, row, col-1);
        }
        
        psf.append("z");
    }
}
