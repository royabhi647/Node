Find Pivot Index

1. Given an array of integers nums, calculate the pivot index of this array.
2. The pivot index is the index where the sum of all the numbers strictly to the left of the index 
    is equal to the sum of all the numbers strictly to the index's right.
3. If the index is on the left edge of the array, then the left sum is 0 because there are no elements 
    to the left. This also applies to the right edge of the array.
4. Return the leftmost pivot index. If no such index exists, return -1.


Constraints
1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Sample Input
6
1 7 3 6 5 6

Sample Output
3

// code

import java.util.*;
import java.io.*;

public class Main {

    public static int pivot_index(int[]arr) {
        //write your code here
        int sum = 0;
        
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        
        int lsum = 0;
        int rsum = sum;
        
        for(int i = 0; i < arr.length; i++){
            rsum = rsum - arr[i];
            
            if(lsum == rsum){
                return i;
            }
            
            lsum += arr[i];
        }
        return -1;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[]arr = new int[n];

        for(int i=0; i < arr.length;i++) {
            arr[i] = scn.nextInt();
        }

        int pi = pivot_index(arr);
        System.out.println(pi);
    }
}