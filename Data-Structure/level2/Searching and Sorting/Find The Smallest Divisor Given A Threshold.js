Find The Smallest Divisor Given A Threshold

1. Given an array of integers nums and an integer threshold, we will choose a positive integer divisor,
     divide all the array by it, and sum the division's result. Find the smallest divisor such that the 
     result mentioned above is less than or equal to threshold.
2. Each result of the division is rounded to the nearest integer greater than or equal to that element. 
    (For example: 7/3 = 3 and 10/2 = 5).
3. It is guaranteed that there will be an answer.

Constraints
1 <= nums.length <= 5 * 10^4
1 <= nums[i] <= 10^6
nums.length <= threshold <= 10^6

Sample Input
4
1 2 5 9
6

Sample Output
5

// code

import java.util.*;
import java.io.*;

public class Main {
    public static int findSmallestDivisor(int[]nums,int th) {
        //write your code here
        int max = nums[0];
        
        for(int i = 1; i < nums.length; i++){
            max = Math.max(max, nums[i]);
        }
        
        if(th == nums.length){
            return max;
        }
        
        int lo = 1;
        int hi = max;
        int mdiv = Integer.MAX_VALUE;
        
        while(lo <= hi){
            int div = lo + (hi - lo)/2;
            
            if(isPossible(nums,div,th) == true){
                mdiv = div;
                hi = div-1;
            }else{
                lo = div+1;
            }
        }
        return mdiv;
    }
    
    public static boolean isPossible(int nums[], int div, int th){
        int res = 0;
        
        for(int i = 0; i < nums.length; i++){
            res += (int)Math.ceil(nums[i]*1.0/div);
        }
        
        return res <= th;
    }

    public static void main(String[]args) {
        Scanner scn = new Scanner(System.in);
        //input work
        int n = scn.nextInt();
        int[]nums = new int[n];

        for(int i=0 ; i < n ; i++) {
            nums[i] = scn.nextInt();
        }

        int th = scn.nextInt();

        int speed = findSmallestDivisor(nums,th);
        System.out.println(speed);
    }
}