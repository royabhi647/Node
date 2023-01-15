Counting Elements In Two Arrays

Given two unsorted arrays arr1[] and arr2[]. They may contain duplicates. 
For each element in arr1[] count elements less than or equal to it in array arr2[].

Constraints
1 <= m,n <= 10^5
1 <= arr1[i],arr2[j] <= 10^5

Sample Input
6
1 2 3 4 7 9
6
0 1 2 1 1 4

Sample Output
4 5 5 6 6 6


// 1st code tc = O(nlogn)
import java.util.*;
import java.io.*;

public class Main {

  public static int[] find(int[]arr1, int[]arr2) {
    //write your code here
    Arrays.sort(arr2);
    int ans[] = new int[arr1.length];
    for(int i = 0; i < arr1.length; i++){
        int key = arr1[i];
        // count smaller
        int cs = helper(key,arr2);
        ans[i] = cs;
    }
    return ans;
  }
  
  public static int helper(int key, int arr[]){
      // to find count of elements which are less than or equal to k
      int count = 0;
      
      int lo = 0;
      int hi = arr.length-1;
      
      while(lo <= hi){
          int mid = (lo+hi)/2;
          
          if(arr[mid]<=key){
              count += (mid-lo+1);
              lo = mid+1;
          }else{
              hi = mid-1;
          }
      }
      return count;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);

    int n1 = scn.nextInt();
    int[]a = new int[n1];

    for (int i = 0; i < n1; i++) {
      a[i] = scn.nextInt();
    }

    int n2 = scn.nextInt();
    int[]b = new int[n2];

    for (int i = 0; i < n2; i++) {
      b[i] = scn.nextInt();
    }

    int[]ans = find(a, b);

    for (int val : ans) {
      System.out.print(val + " ");
    }
  }
}


// 2nd code tc = O(n), sc=O(n)

import java.util.*;
import java.io.*;

public class Main {

  public static int[] find(int[]arr1, int[]arr2) {
    //write your code here
    int max1 = 0;
    int max2 = 0;
    
    for(int i = 0; i < arr1.length; i++){
        max1 = Math.max(max1,arr1[i]);
    }
    
    for(int i = 0; i < arr2.length; i++){
        max2 = Math.max(max2,arr2[i]);
    }
    // overall max
    int omax = 0;
    omax = Math.max(max1,max2);
    // 1. create frequency array
    int[] farr = new int[100000];
    
    for(int i = 0; i < arr2.length; i++){
        farr[arr2[i]]++;
    }
    
    // 2. create prefix sum array
    int[] psa = new int[100000];
    psa[0] = farr[0];
    
    for(int i = 1; i <= omax; i++){
        psa[i] = psa[i-1] + farr[i];
    }
    
    int[] ans = new int[arr1.length];
    
    for(int i = 0; i < arr1.length; i++){
        int key = arr1[i];
        ans[i] = psa[key];
    }
    return ans;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);

    int n1 = scn.nextInt();
    int[]a = new int[n1];

    for (int i = 0; i < n1; i++) {
      a[i] = scn.nextInt();
    }

    int n2 = scn.nextInt();
    int[]b = new int[n2];

    for (int i = 0; i < n2; i++) {
      b[i] = scn.nextInt();
    }

    int[]ans = find(a, b);

    for (int val : ans) {
      System.out.print(val + " ");
    }
  }
}