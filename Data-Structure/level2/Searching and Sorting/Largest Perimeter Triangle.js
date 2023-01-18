Largest Perimeter Triangle

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
 formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, 
 return 0.

 Constraints
 3 <= nums.length <= 10^4
 1 <= nums[i] <= 10^6

 Sample Input
 4
 3 6 2 3

 Sample Output
 8


 // code

 import java.util.*;
import java.io.*;

public class Main {
  public static int largestPerimeter(int[]nums) {
    //write your code here
    Arrays.sort(nums);
    int peri = 0;
    
    for(int i = nums.length-1; i >= 2; i--){
        if(nums[i-1] + nums[i-2] > nums[i]){
            peri = nums[i] + nums[i-1] + nums[i-2];
            break;
        }
    }
    return peri;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[]nums = new int[n];

    for (int i = 0; i < n; i++) {
      nums[i] = scn.nextInt();
    }

    System.out.println(largestPerimeter(nums));
  }
}