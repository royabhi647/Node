Max Product Of Three Numbers

1. Given an integer array 'arr',
2. Find three numbers whose product is maximum and return the maximum product.

Input Format
(Already managed for you)
4
1 2 3 4

Output Format
(Already managed for you)
24

Constraints
1. 3 <= nums.length <= 10^4
2. -1000 <= nums[i] <= 1000

Sample Input
6
3 2 -4 -6 5 1

Sample Output
120

// code

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~
    public static int maximumProduct(int[] arr) {
        // write your code here
        // find min1, min2, max1, max2, max3
        int min1 = Integer.MAX_VALUE;
        int min2 = min1;
        
        int max1 = Integer.MIN_VALUE;
        int max2 = max1;
        int max3 = max1;
        
        for(int i = 0; i < arr.length; i++){
            int val = arr[i];
            // max check
            if(val >= max1){
                max3 = max2;
                max2 = max1;
                max1 = val;
            }else if(val >= max2){
                max3 = max2;
                max2 = val;
            }else if(val >= max3){
                max3 = val;
            }
            
            // min check
            if(val <= min1){
                min2 = min1;
                min1 = val;
            }else if(val <= min2){
                min2 = val;
            }
        }
        
        // compare
        return Math.max(min1 * min2 * max1, max1 * max2 * max3);
    }

    // ~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int prod = maximumProduct(arr);
        System.out.println(prod);
    }
}