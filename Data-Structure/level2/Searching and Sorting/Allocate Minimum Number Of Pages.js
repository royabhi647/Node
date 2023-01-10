Allocate Minimum Number Of Pages

1. You are given N number of books. Every ith book has Ai number of pages. 
2. You have to allocate books to M number of students. There can be many ways or permutations to do so.
     In each permutation, one of the M students will be allocated the maximum number of pages.
      Out of all these permutations, the task is to find that particular permutation in which 
      the maximum number of pages allocated to a student is minimum of those in all the other permutations 
      and print this minimum value. 
3. Each book will be allocated to exactly one student. Each student has to be allocated at least one book.
4. Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order.


Constraints
 1 <= N <= 10^5
1 <= A [ i ] <= 10^6
1 <= M <= 10^5

Sample Input
4
12 30 48 10
2

Sample Output
58


// code

import java.util.*;
import java.io.*;

public class Main {

  public static int minPages(int[]arr, int m) {
    //write your code here
    int sum = 0;
    int max = 0;
    
    for(int val : arr){
        sum += val;
        max = Math.max(val,max);
    }
    
    if(m > arr.length) return -1;
    
    int lo = max;
    int hi = sum;
    int ans = 0;
    
    while(lo <= hi){
        int mid = lo + (hi-lo)/2;
        
        if(isPossible(arr,mid,m) == true){
            ans = mid;
            hi = mid-1;
        }else{
            lo = mid+1;
        }
    }
    return ans;
  }
  
    public static boolean isPossible(int[]arr,int mid, int m){
        int st = 1; //student
        int sum = 0;
      
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
          
            if(sum > mid){
                st++;
                sum = arr[i];
            }
        }
        return st <= m;
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

    int ans = minPages(arr, m);
    System.out.println(ans);
  }
}