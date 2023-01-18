Largest Number

Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.

Constraints
1 <= nums.length <= 100
0 <= nums[i] <= 10^9

Sample Input
5
3 30 34 5 9

Sample Output
9534330


// code

import java.util.*;
import java.io.*;

public class Main {

  public static String largestNumber(int[]nums) {
    //write your code here
    
    String[]arr = new String[nums.length];
    
    for(int i = 0; i < nums.length; i++){
        arr[i] = nums[i] + "";
    }
    
    // lambda expression , two numbers of 1st number is same then compare on the basis of 
    // addition of a+b & b+a  which one is greater
    Arrays.sort(arr,(a,b)->{
        long n1 = Long.parseLong(a + b);
        long n2 = Long.parseLong(b + a);
        
        if(n1 > n2){
            return 1;
        }
        else if(n1 < n2){
            return -1;
        }
        else{
            return 0;
        }
    });
    
    StringBuilder sb = new StringBuilder();
    
    for(int i = arr.length-1; i >= 0; i--){
        sb.append(arr[i]);
    }
    
    if(sb.charAt(0) == '0'){
        return "0";
    }
    
    return sb.toString();
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]nums = new int[n];

    for (int i = 0; i < n; i++) {
      nums[i] = scn.nextInt();
    }

    System.out.println(largestNumber(nums));
  }
}