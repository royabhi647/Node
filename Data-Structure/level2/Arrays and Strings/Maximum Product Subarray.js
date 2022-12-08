Maximum Product Subarray

1.Given an integer array.
 2.You have to find the contiguous subarray within an array (containing at least one number) 
 which has the largest product.
 3.You have to complete the function max() that should retuen an Integer

 Input Format
First line contains an Integer 'N' denoting the size of the array.
 Second line contains 'N' space separated elements of the array.

 Output Format
Return an Integer

Constraints
1<=N<=1000

Sample Input
4
2 3 -2 4

Sample Output
6


// code

import java.util.Scanner;
 
 public class Main {
 
    public static int max(int[] nums) {
 	    //Write your code here.	 	 
        int ans = Integer.MIN_VALUE;
        int curr_prod = 1;
        // maximum product lies from 0 to n-1
        for(int i = 0; i < nums.length; i++){
            curr_prod *= nums[i];
            ans = Math.max(ans, curr_prod);
            if(curr_prod == 0){
                curr_prod = 1;
            }
        }
        curr_prod = 1;
        // maximum product lies from n-1 to 0
        for(int i = nums.length - 1; i >= 0; i--){
            curr_prod *= nums[i];
            ans = Math.max(ans, curr_prod);
            if(curr_prod == 0){
                curr_prod = 1;
            }
        }
        return ans;
 
 	 }
 
 	 public static void main(String[] args) {
 
 	 	 Scanner s = new Scanner(System.in);
 	 	 int n = s.nextInt();
 	 	 int[] a = new int[n];
 	 	 for (int i = 0; i < a.length; i++) {
 	 	 	 a[i] = s.nextInt();
 	 	 }
 	 	 System.out.println(max(a));
 
 	 }
 
 }