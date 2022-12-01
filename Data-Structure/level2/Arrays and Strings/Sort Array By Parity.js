Sort Array By Parity

1. Given an array nums of non-negative integers.
2. Arrange elements of array in specific order, all even elements followed by odd elements. [even -> odd]
3. Preserve the order of Even elements without using extra space.
4. Hence question is order specific so you have to match your output in order of given output.

Input Format
7
9 3 8 7 6 2 3

Output Format
8 6 2 7 3 9 3  
Explanation : {even -> odd}, 8 is before 6 in given input as well as in output, same for 6,2.

Constraints
1. 1 <= nums.length <= 5000
2. 0 <= nums[i] <= 5000

Sample Input
7
9 3 8 7 6 2 3

Sample Output
8 6 2 7 3 9 3 

// code

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~
    
    public static void sortArrayByParity(int[] nums) {
        // write your code here
        int i = 0; // first unsolved
        int j = 0; // first odd
        
        while(i < nums.length){
            if(nums[i] % 2 == 0){
                // even -> swap, i++, j++
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j]= temp;
                
                i++;
                j++;
            }else{
                // odd -> i++
                i++;
            }
        }
    }

    //// ~~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        sortArrayByParity(arr);

        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}