Count Possible Triangles

Given an unsorted array arr[] of n positive integers. Find the number of triangles that can be formed with three different array elements 
    as lengths of three sides of triangles. 

Constraints
3 <= n <= 10^3
1 <= arr[i] <= 10^3

Sample Input
5
6 4 9 7 8

Sample Output
10

// code tc = O(n^2)

import java.util.*;
import java.io.*;

public class Main {

  public static int countTriangles(int[]arr) {
    //write your code here
    Arrays.sort(arr);
    int count = 0;
    
    for(int i = arr.length-1; i >= 2; i--){
        int l = 0;
        int r = i - 1;
        
        while(l < r){
            if(arr[l] + arr[r] > arr[i]){
                count += (r - l);
                r--;
            }else{
                l++;
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

    System.out.println(countTriangles(arr));
  }
}