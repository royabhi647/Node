Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) 
connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]]

Output: 6

Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.


// code


class Solution {
    int di[] = {-1,0,1,0};  // Up, left, down, right change
    int dj[] = {0,-1,0,1};  // Up, left, down, right change

    public int findAreaOfisLand(int[][] grid, boolean[][] vis, int i, int j){
        int n = grid.length;
        int m = grid[0].length;

        if(i >=n || j >= m || i < 0 || j < 0 || grid[i][j] == 0 || vis[i][j] == true){
            return 0;
        }
        
        int res = 0;
        vis[i][j] = true;
        for(int d = 0; d < 4; d++){
            res += findAreaOfisLand(grid, vis, i+di[d], j+dj[d]);
        }
        return res+1;
    }
    public int maxAreaOfIsland(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;

        boolean[][] vis = new boolean[n][m];
        int ans = 0;

        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(grid[i][j] == 1 && vis[i][j] == false){
                    ans = Math.max(ans, findAreaOfisLand(grid, vis, i, j));
                }
            }
        }
        return ans;
    }
}