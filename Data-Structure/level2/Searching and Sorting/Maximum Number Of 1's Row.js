Maximum Number Of 1's Row

Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.

Constraints
 1 <= n, m <= 40
0 <= mat[][] <= 1

Sample Input
4 3
0 1 1
0 0 1
1 1 1
0 0 1

Sample Output
2

// code tc = O(n*log(m))

import java.util.*;
import java.io.*;

public class Main {

  public static int findRow(int[][]mat) {
    //write your code here
    int omax = 0;
    int r = 0;
    
    for(int i = 0; i < mat.length; i++){
        // count of 1's in ith row
        int coir = binarySearch(mat,i);
        
        if(coir > omax){
            omax = coir;
            r = i;
        }
    }
    return r;
  }
  
  public static int binarySearch(int[][] mat, int r){
      int lo = 0;
      int hi = mat[0].length-1;
      int fi1 = mat[0].length;  // first 1
      
      while(lo <= hi){
          int mid = lo+(hi-lo)/2;
          
          if(mat[r][mid] == 1){
              fi1 = mid;
              hi = mid-1;
          }else{
              lo = mid+1;
          }
      }
      int count = mat[0].length-fi1;
      return count;
  }

  public static void main(String[]args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int m = scn.nextInt();

    int[][]mat = new int[n][m];

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        mat[i][j] = scn.nextInt();
      }
    }

    System.out.println(findRow(mat));
  }
}