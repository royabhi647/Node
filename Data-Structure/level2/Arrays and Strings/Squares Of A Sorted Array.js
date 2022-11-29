Squares Of A Sorted Array

1. Given an integer array 'nums' sorted in non-decreasing order.
2. Return an array of the squares of each number sorted in non-decreasing order.

Input Format
nums = [-4,-1,0,3,10]

Output Format
[0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Constraints
1. 1 <= nums.length <= 10^4
2. -10^4 <= nums[i] <= 10^4
3. 'nums' is sorted in non-decreasing order.

Sample Input
9
-6 -2 -1 0 1 4 5 7 9

Sample Output
0 1 1 4 16 25 36 49 81

// optimise code tc = O(n)

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~~~~~

    public static int[] sortedSquares(int[] nums) {
        // write your code here
         int res[] = new int[nums.length];
        int i = 0;  // most -ve element
        int j = nums.length - 1;  // most +ve element
        int index = nums.length - 1;  //help in filling the result
        while(i <= j){
            int val1 = nums[i] * nums[i];
            int val2 = nums[j] * nums[j];

            if(val1 > val2){
                res[index] = val1;
                i++;
            }else{
                res[index] = val2;
                j--;
            }
            index--;
        }
        return res;
    }

    // ~~~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~~~

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] nums = new int[n];
        
        for(int i = 0; i < n; i++) 
            nums[i] = scn.nextInt();
        
        int[] res = sortedSquares(nums);

        for(int i = 0; i < n; i++) {
            System.out.print(res[i] + " ");
        }
    }
}