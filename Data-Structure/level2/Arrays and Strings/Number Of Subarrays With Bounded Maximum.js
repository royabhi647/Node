Number Of Subarrays With Bounded Maximum

1. We have an array 'arr' of positive integers, and two positive integers left and right 
(left is smaller than right).
2. Return the number of (contiguous, non-empty) subarrays such that the value of the 
maximum array element in that subarray is at least left and at most right.

Input Format
arr = [2, 1, 4, 3]
left = 2
right = 3

Output Format
3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].

Constraints
1. left, right, and arr[i] will be an integer in the range [0, 10^9].
2. The length of arr will be in the range of [1, 10000]

Sample Input
4
2 1 4 3
2
3

Sample Output
3

// brute force tc O(n^2) -> generate all subarray and check range then count



// optimise code tc = O(n)


import java.util.*;

public class Main {

  public static int numSubarrayBoundedMax(int[] arr, int left, int right) {
    // write your code here
    int si = 0;
    int ei = 0;
    
    int n = arr.length;
    int ans = 0;
    int prevCount = 0;
    
    while(ei < n){
        // element are in range of left and right
        if(left <= arr[ei] && arr[ei] <= right){
            prevCount = ei - si + 1;
            ans += prevCount;
            // element is less than left
        }else if(arr[ei] < left){
            ans += prevCount;
        }else{
            // element is greater than right
            si = ei + 1;
            prevCount = 0;
        }
        ei++;
    }
    return ans;
  }

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int left = scn.nextInt();
    int right = scn.nextInt();

    int count = numSubarrayBoundedMax(arr, left, right);
    System.out.println(count);
  }
}