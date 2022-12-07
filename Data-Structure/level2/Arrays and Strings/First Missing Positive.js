First Missing Positive

1. Given an unsorted integer array 'arr'.
2. Find the smallest missing positive integer.
Note : You must implement an algorithm that runs in O(n) time and uses constant extra space.

Constraints
1. 1 <= nums.length <= 10^5
2. -2^31 <= nums[i] <= 2^31 - 1

Sample Input
4
3 4 -1 1

Sample Output
2

// code

import java.util.*;

public class Main {


  //~~~~~~~~~~~~~~~User's Section~~~~~~~~~~~~~~~~~
  public static int firstMissingPositive(int[] arr) {
    // write your code here
    //  step 1 -> mark element which are out of range and manage presence of one
    boolean one = false;
    int n = arr.length;
    for(int i = 0; i < n; i++){
        if(arr[i] == 1){
            one = true;
        }
        // out of range
        if(arr[i] < 1 || arr[i] > n){
            arr[i] = 1;
        }
    }
    if(one == false){
        return 1;
    }
    // step 2 -> map elements with index
    for(int i = 0; i < n; i++){
        int indx = Math.abs(arr[i]);
        arr[indx - 1] = -Math.abs(arr[indx - 1]);
    }
    // step 3 -> find out missing integer
    for(int i = 0; i < n; i++){
        // if element is positive that means indx + 1 is misssing from array
        if(arr[i] > 0) return i + 1;
    }
    return n + 1;
  }

  //~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int res = firstMissingPositive(arr);
    System.out.println(res);
  }
}