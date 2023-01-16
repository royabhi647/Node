Find The Element That Appears Once In Sorted Array

Given a sorted array arr[] of size N. 
Find the element that appears only once in the array. All other elements appear exactly twice. 

Constraints
10^5 <= N <= 10^5

Sample Input
11
1 1 2 2 4 4 7 7 8 10 10

Sample Output
8


// 1st code

import java.util.*;
import java.io.*;

public class Main {

  public static int findSingleElement(int[]arr) {
    //write your code here
    int n = arr.length;
    
    if(n == 1){
        return arr[0];
    }
    if(arr[0] != arr[1]){
        return arr[0];
    }
    if(arr[n-1] != arr[n-2]){
        return arr[n-1];
    }
    
    int lo = 0;
    int hi = arr.length-1;
    
     while(lo <= hi){
         int mid = lo+(hi-lo)/2;
         
         if(arr[mid] != arr[mid-1] && arr[mid] != arr[mid+1]){
             return arr[mid];
         }
         else if(arr[mid] == arr[mid-1]){
             // lo to mid elements count
             int lc = mid-lo+1;
             
             if(lc % 2 == 0){
                 lo =  mid+1;
             }
             else{
                 hi = mid-2;
             }
         }
         else if(arr[mid] == arr[mid+1]){
             // mid to hi elements count
             int rc = hi-mid+1;
             
             if(rc % 2 == 0){
                 hi = mid-1;
             }
             else{
                 lo = mid+2;
             }
         }
     }
    return -1;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int ans = findSingleElement(arr);
    System.out.println(ans);
  }
}


// 2nd code 

public static int findSingleElement(int[]arr) {
    //write your code here
    int lo = 0;
    int hi = arr.length-1;
    
    while(lo < hi){
        int mid = lo+(hi-lo)/2;
        
        if(arr[mid] == arr[mid+1]){
            mid = mid-1;
        }
        if((mid-lo+1)%2 != 0){
            hi = mid;
        }else{
            lo = mid+1;
        }
    }
    return arr[lo];
  }
