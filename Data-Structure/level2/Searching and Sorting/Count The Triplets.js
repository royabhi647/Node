Count The Triplets

Given an array of distinct integers. 
The task is to count all the triplets such that sum of two elements equals the third element.

Constraints
1 <= N <= 10^3
1 <= arr[i] <= 10^5

Sample Input
4
1 5 3 2

Sample Output
2

// code  tc = O(n^2)

import java.util.*;
import java.io.*;

public class Main {

  public static int countTriplets(int[]arr) {
    //write your code here
    Arrays.sort(arr);
    int count = 0;
    
    for(int i = arr.length - 1; i >= 2; i--){
        int l = 0;
        int r = i - 1;
        
        while(l < r){
            if(arr[l] + arr[r] == arr[i]){
                count++;
                l++;
                r--;
            }else if(arr[l] + arr[r] < arr[i]){
                l++;
            }else{
                r--;
            }
        }
    }
    return count;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    System.out.println(countTriplets(arr));
  }
}