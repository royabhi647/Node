Find All Duplicates In An Array

1. Given an integer array nums of length n where all the integers of nums are in the range [1, n].
2. Each integer appears once or twice, return an array of all the integers that appears twice.
3. You must write an algorithm that runs in O(n) time and uses only constant extra space.

Input Format
Input is Managed for you
1. nums = [4,3,2,7,8,2,3,1]
2. nums = [1]

Output Format
Output is Managed for you
1. [2,3]
2. [], Empty

Constraints
1. n == nums.length
2. 1 <= n <= 100000
3. 1 <= nums[i] <= n
4. Each element in nums appears once or twice.

Sample Input
8
4 3 2 7 8 2 3 1

Sample Output
2 3 

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~~~User's Section~~~~~~~~~~~~~~~~~
  public static List<Integer> findDuplicates(int[] nums) {
    // write your code here
    List<Integer> res = new ArrayList<>();
    
    for(int i = 0; i < nums.length; i++){
        int indx = Math.abs(nums[i]) - 1;
        int val = nums[indx];
        
        if(val < 0){
            // duplicate element occurs
            res.add(indx + 1);
        }else{
            // mark index value with negative
            nums[indx] *= -1;
        }
    }
    return res;
  }

  // ~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    List<Integer> res = findDuplicates(arr);
    if (res.size() == 0) {
      System.out.println("Empty");
      return;
    }
    Collections.sort(res);
    for (int val : res)
      System.out.print(val + " ");
    System.out.println();
  }
}