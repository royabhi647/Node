Search A 2d Matrix

1. Write an efficient algorithm that searches for a value in a m x n matrix.
     This matrix has the following properties:
a). Integers in each row are sorted from left to right.
b). The first integer of each row is greater than the last integer of the previous row.

Constraints
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -10^4 <= matrix[i][j], target <= 10^4

Sample Input
    5 4
    1 3 5 7
    10 11 16 20
    23 30 34 60
    62 63 65 68
    71 72 74 80
    65

Sample Output
    true


// 1st code

import java.util.*;
import java.io.*;

public class Main {

    /*your task is to complete this function which returns true if target exists in the matrix
    else return false*/
    public static boolean search(int[][]matrix,int target) {
        //write your code here
        int n = matrix.length;
        int m = matrix[0].length;
        
        int low = 0;
        int high = (n * m) - 1;
        
        while(low <= high){
            int mid = low + (high - low) / 2;
            if(matrix[mid/m][mid%m] == target){
                return true;
            }else if(matrix[mid/m][mid%m] < target){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        return false;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int m = scn.nextInt();
        int n = scn.nextInt();

        int[][]matrix = new int[m][n];

        for(int i=0; i < m;i++) {
            for(int j=0; j < n;j++) {
                matrix[i][j] = scn.nextInt();
            }
        }

        int target = scn.nextInt();

        boolean isFound = search(matrix,target);
        System.out.println(isFound);

    }
}


// 2nd code

import java.util.*;
import java.io.*;

public class Main {

    /*your task is to complete this function which returns true if target exists in the matrix
    else return false*/
    public static boolean search(int[][]matrix,int target) {
        //write your code here
        int r = binarySearchRowSelect(matrix,target);
        
        if(r == -1){
            return false;
        }
        
        boolean isFound = binarySearch(matrix, r, target);
        return isFound;
    }
    
    public static boolean binarySearch(int[][] matrix, int r, int target){
        int low = 0;
        int high = matrix[0].length - 1;
        
        while(low <= high){
            int mid = (low + high) / 2;
            
            if(matrix[r][mid] == target){
                return true;
            }else if(matrix[r][mid] < target){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        return false;
    }
    
    public static int binarySearchRowSelect(int[][]matrix, int target){
        int low = 0;
        int high = matrix.length - 1;
        int lc = matrix[0].length - 1;  // last column
        
        while(low <= high){
            int mid = (low + high) / 2;
            
            if(matrix[mid][0] <= target && target <= matrix[mid][lc]){
                return mid;
            }else if(matrix[mid][0] < target){
                low = mid + 1;
            }else if(matrix[mid][0] > target){
                high = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int m = scn.nextInt();
        int n = scn.nextInt();

        int[][]matrix = new int[m][n];

        for(int i=0; i < m;i++) {
            for(int j=0; j < n;j++) {
                matrix[i][j] = scn.nextInt();
            }
        }

        int target = scn.nextInt();

        boolean isFound = search(matrix,target);
        System.out.println(isFound);

    }
}