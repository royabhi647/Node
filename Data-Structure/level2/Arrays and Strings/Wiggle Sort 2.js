Wiggle Sort 2

1. Given an integer array 'arr'.
2. Reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
3. You may assume the input array always has a valid answer.
Note : You can return answer in any order.

Input Format
Input: nums = [1,5,1,1,6,4]

Output Format
Output: [1,6,1,5,1,4]
Explanation: [1,4,1,5,1,6] is also accepted.

Constraints
1. 1 <= nums.length <= 10^4
2. 0 <= nums[i] <= 5000
3. It is guaranteed that there will be an answer for the given input 'arr'.

Sample Input
6
1 5 1 1 6 4

Sample Output
true

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~User's Section~~~~~~~~~~~~
  public static void wiggleSort2(int[] nums) {
    // write your code here
    // 1. Sort array
    Arrays.sort(nums);
    // 2. make an extra space and manage equality in it
    int n = nums.length;
    int[] res = new int[n];
    int i = 1;
    int j = n - 1;
    while(i < n){
        res[i] = nums[j];
        i += 2;
        j--;
    }
    i = 0;
    while(i < n){
        res[i] = nums[j];
        i += 2;
        j--;
    }
    // 3. fill input array from res
    for(i = 0; i < n; i++){
        nums[i] = res[i];
    }
  }

  // ~~~~~~~~~~~Input Management~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    wiggleSort2(arr);
    /*
    -if index is even then smaller than next,
    -if index is odd then greater than next element,
    -to check any correct order, we will not print array, we will check inequality
    -if print false, that means wrong answer, if true than correct answer.
    */
    for (int i = 0; i < n - 1; i++) {
      if (i % 2 == 0 && arr[i] >= arr[i + 1]) {
        System.out.println(false);
        return;
      } else if (i % 2 == 1 && arr[i] <= arr[i + 1]) {
        System.out.println(false);
        return;
      }
    }
    System.out.println(true);
  }
}