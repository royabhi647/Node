Split Array Largest Sum

1. Given an array nums which consists of non-negative integers and an integer m,
     you can split the array into m non-empty continuous subarrays.
2. Write an algorithm to minimize the largest sum among these m subarrays.

Constraints
1 <= nums.length <= 1000
0 <= nums[i] <= 10^6
1 <= m <= nums.length

Sample Input
5
7 2 5 10 8
2

Sample Output
18

// code

import java.util.*;
import java.io.*;

public class Main {

  public static int splitArray(int[]arr, int m) {
    //write your code here
    int max = 0;
    int sum = 0;
    
    for(int val : arr){
        sum += val;
        max = Math.max(val,max);
    }
    
    if(m == arr.length){
        return max;
    }
    
    int lo = max;
    int hi = sum;
    int ans = 0;
    
    while(lo <= hi){
        int mid = lo + (hi - lo)/2;
        
        if(isPossible(arr,mid,m) == true){
            ans = mid;
            hi = mid - 1;
        }else{
            lo = mid + 1;
        }
    }
    return ans;
  }
  
    public static boolean isPossible(int arr[], int mid, int m){
      int sa = 1;  // subarray
      int sum = 0;
      
        for(int i = 0; i < arr.length; i++){
          sum += arr[i];
          
            if(sum > mid){
              sa++;
              sum = arr[i];
            }
        }
        return sa <= m;
    }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int m = scn.nextInt();

    int ans = splitArray(arr, m);
    System.out.println(ans);
  }
}