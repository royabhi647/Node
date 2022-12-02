Wiggle Sort 1

1. Given an unsorted array 'arr'.
2. Reorder it in-place such that :  arr[0] <= arr[1] >= arr[2] <= arr[3] . . . .
3. Please sort the array in place and do not define additional arrays.
4. Allowed Time Complexity : O(n)

Input Format
Input: [3, 5, 2, 1, 6, 4]

Output Format
Output: [1, 6, 2, 5, 3, 4]

Constraints
1. arr.length <= 10^5
2. -10^9 <= arr[i] <= 10^9

Sample Input
6
3 5 2 1 6 4

Sample Output
3 5 1 6 2 4 

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~
  public static void swap(int arr[], int left, int right){
      int temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  }
  public static void wiggleSort(int[] arr) {
    // write your code here
    for(int i = 0; i < arr.length - 1; i++){
        if(i % 2 == 0){
            // even index
            if(arr[i] > arr[i + 1]){
                swap(arr, i, i + 1);
            }
        }else{
            // odd index
            if(arr[i] < arr[i + 1]){
                swap(arr, i, i + 1);
            }
        }
    }
  }

  // ~~~~~~~~~~~~Input Management~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

    int n = scn.nextInt();
    int[] arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    wiggleSort(arr);

    for (int val : arr) {
      System.out.print(val + " ");
    }
    System.out.println();
  }

}
