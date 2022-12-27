Set Matrix Zeroes

https://leetcode.com/problems/set-matrix-zeroes/description/

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// code

class Solution {
    public void setZeroes(int[][] matrix) {
        int Row = 0;
        int Col = 0;
        boolean Row0 = false;
        boolean Col0 = false;

        for(int i = 0; i < matrix.length; i++){
            for(int j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] == 0){
                    if(i == 0){
                        Row0 = true;
                    }
                    if(j == 0){
                        Col0 = true;
                    }
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        for(int i = 1; i < matrix.length; i++){
            for(int j = 1; j < matrix[0].length; j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
        } 

        if(Row0){
            for(int i = 0; i < matrix[0].length; i++){
                matrix[0][i] = 0;
            }
        }

        if(Col0){
            for(int j = 0; j < matrix.length; j++){
                matrix[j][0] = 0;
            }
        }
    }
}