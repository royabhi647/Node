Maximum Average Subarray I

Given a list of Integers(array) & a number K.
Task is to "Find MAXIMUM AVERAGE of Contiguous subarray of size k."

Example 1 : 
    Nums : [-10,5,-6,8,-7,2,-4,8,-6,7] , K : 3
    Output : 3.0
    Explanation : average of 8,-6,7 is maximum

Example 2 : 
    Nums : [1,2,-3,-4,5,-6] , K = 2
    Output : 1.5

Constraints
    1. 0 < n(Number of Integers) <= 10^5
    2. 0 <= k <= n

Sample Input
    10
    -10 5 -6 8 -7 2 -4 8 -6 7
    3

Sample Output
    3.0



// code

import java.util.Scanner;

public class Main {
  public static double solution(int nums[], int k) {
    // write your code here
    int sum = 0;
    int maxSum = 0;
    
    // add value of nums array of k-1 length
    for(int i = 0; i < k; i++){
        sum += nums[i];
    }
    
    maxSum = sum;
    // add from k to last and remove from start
    for(int i = k; i < nums.length; i++){
        sum += nums[i];
        sum -= nums[i - k];
        
        maxSum = Math.max(sum, maxSum);
    }
    return (double)maxSum/k;
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int nums[] = new int[n];
    for (int i = 0 ; i < n ; i++) {
      nums[i] = scn.nextInt();
    }
    int k = scn.nextInt();

    System.out.println(solution(nums, k));
  }
}