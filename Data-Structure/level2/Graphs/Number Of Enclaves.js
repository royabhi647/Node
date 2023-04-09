// Number Of Enclaves
//    --> https://leetcode.com/problems/number-of-enclaves/

You are given an m * n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

Constraints
1 <= m,n <= 1000

Sample Input
4 4
0 0 0 0
1 0 1 0
0 1 1 0
0 0 0 0

Sample Output
3


// code

class Solution {
    public void dfs(int arr[][], int i, int j){
        if(i < 0 || j < 0 || i >= arr.length || j >= arr[0].length || arr[i][j] == 0){
            return;
        }
        // make boundary connected 1's to 0
        arr[i][j] = 0;
        dfs(arr, i + 1, j);
        dfs(arr, i - 1, j);
        dfs(arr, i, j + 1);
        dfs(arr, i, j - 1);
    }
    public int numEnclaves(int[][] grid) {
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                // call dfs when 1 happens in boundary cell
                if(i == 0 || j == 0 || i == grid.length - 1 || j == grid[0].length - 1){
                    if(grid[i][j] == 1){
                        dfs(grid, i, j);
                    }
                }
            }
        }

        // count all ones
        int count = 0;
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                if(grid[i][j] == 1){
                    count++;
                }
            }
        }
        return count;
    }
}