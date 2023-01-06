Search In Rotated Sorted Array

1. There is an integer array nums sorted in ascending order (with distinct values).
2. nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
3. Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
4. You must write an algorithm with O(log n) runtime complexity.

Constraints
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-10^4 <= target <= 10^4

Sample Input
7
4 5 6 7 0 1 2
1

Sample Output
5


// code

import java.util.*;
import java.io.*;

public class Main {

    public static int find(int[]arr,int target) {
        //write your code here
        int low = 0;
        int high = arr.length - 1;
        
        while(low <= high){
            int mid = low + (high - low) / 2;
            if(arr[mid] == target){
                return mid;
            }
            // low to mid part is sorted
            else if(arr[low]<=arr[mid]){
                if(arr[low] <= target && target <= arr[mid]){
                    high = mid - 1;
                }else{
                    low = mid + 1;
                }
            }else{
                if(arr[mid] <= target && target <= arr[high]){
                    low = mid + 1;
                }else{
                    high = mid - 1;
                }
            }
        }
        return -1;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[]arr = new int[n];

        for(int i=0; i < n;i++) {
            arr[i] = scn.nextInt();
        }

        int target = scn.nextInt();
        int ans = find(arr,target);
        System.out.println(ans);
    }
}