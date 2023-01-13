Count Zeros In A Sorted Matrix

Given a Binary Square Matrix where each row and column of the matrix is sorted in ascending order.
 Find the total number of Zeros present in the matrix.

Constraints
1 <= T <= 50
1 <= M,N <= 1000
0 <= A[i][j] <= 1

Sample Input
3 
0 0 1
0 1 1
0 1 1

Sample Output
4

// code tc = O(n)

import java.util.*;
import java.io.*;

public class Main {

  public static int countZeros(int[][]mat) {
    //write your code here
    int n = mat.length;
    int i = 0;
    int j = n - 1;
    
    int cz = 0;  // count zero
    
    while(i < n && j >= 0){
        if(mat[i][j] == 1){
            j--;
        }else{
            cz += (j+1);
            i++;
        }
    }
    return cz;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[][]mat = new int[n][n];

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        mat[i][j] = scn.nextInt();
      }
    }

    System.out.println(countZeros(mat));
  }
}