Transpose Of Matrix With Dimension M X N

1. You have a matrix of M*N Dimension.
2. You have to return a Transpose matrix, where The transpose of a matrix is the matrix flipped over its main diagonal.

Input Format
matrix = {
    {11, 12, 13},
    {21, 22, 23}
}

Output Format
res = {
    {11, 21},
    {12, 22},
    {13, 23}
}

Constraints
1. m == matrix.length
2. n == matrix[i].length
3. 1 <= m, n <= 1000
4. 1 <= m * n <= 10^5
5. -10^9 <= matrix[i][j] <= 10^9

Sample Input
2 3
11 12 13
21 22 23

Sample Output
11 21 
12 22 
13 23 

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~User Section~~~~~~~~~~~~~
  public static int[][] transpose(int[][] matrix) {
    // write your code here
    int n = matrix.length;   // row
    int m = matrix[0].length; // col
    
    int res[][] = new int[m][n]; // col * row -> dimension of res
    
    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            res[i][j] = matrix[j][i];
        }
    }
    return res;
  }


  // ~~~~~~~~~~~Input Management~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int m = scn.nextInt();

    int[][] matrix = new int[n][m];

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        matrix[i][j] = scn.nextInt();
      }
    }

    int[][] res = transpose(matrix);

    for (int i = 0; i < res.length; i++) {
      for (int j = 0; j < res[0].length; j++) {
        System.out.print(res[i][j] + " ");
      }
      System.out.println();
    }
  }
}