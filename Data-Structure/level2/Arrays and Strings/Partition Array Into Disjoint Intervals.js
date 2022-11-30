Partition Array Into Disjoint Intervals

1. Given an integer array nums.
2. Partition it into two (contiguous) subarrays left and right so that:
    a. Every element in left is less than or equal to every element in right.
    b. Left and right are non-empty.
    c. Left has the smallest possible size.
3. Return the length of left after such a partitioning.
NOTE : Test cases are generated such that partitioning exists.

Input Format
Input is Managed for You
nums = [5,0,3,8,6]

nums = [1,1,1,0,6,12]

Output Format
3
Explanation: left = [5,0,3], right = [8,6]

4
Explanation: left = [1,1,1,0], right = [6,12]

Constraints
1. 2 <= nums.length <= 10^5
2. 0 <= nums[i] <= 10^6
3. There is at least one valid answer for the given input.

Sample Input
5
5 0 3 8 6

Sample Output
3

// 1st code tc and sc = O(n)

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~User's Section~~~~~~~~~~~~~~~
  public static int partitionDisjoint(int[] arr) {
    // write your code here
    int n = arr.length;
    // create right min array
    int[] rightMin = new int[n + 1];
    rightMin[n] = Integer.MAX_VALUE;
    for(int i = n - 1; i >= 0; i--){
        rightMin[i] = Math.min(rightMin[i + 1],arr[i]);
    }
    // maintain left max and figure out the partition index
    int leftMax = Integer.MIN_VALUE;
    int ans = 0;
    for(int i = 0; i < n; i++){
        leftMax = Math.max(leftMax,arr[i]);
        if(leftMax <= rightMin[i + 1]){
            ans = i;
            break;
        }
    }
    return ans + 1;  // index started from 0
  }

  // ~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int len = partitionDisjoint(arr);
    System.out.println(len);
  }
}



// 2nd code tc = = O(n) and sc = O(1)

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~User's Section~~~~~~~~~~~~~~~
  public static int partitionDisjoint(int[] arr) {
    // write your code here
    int leftMax = arr[0];
    int greater = arr[0];
    int ans = 0;
    
    for(int i = 1; i < arr.length; i++){
        if(arr[i] > greater){
            greater = arr[i];
        }else if(arr[i] < leftMax){
            leftMax = greater;
            ans = i;
        }
    }
    return ans + 1;
  }

  // ~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int len = partitionDisjoint(arr);
    System.out.println(len);
  }
}