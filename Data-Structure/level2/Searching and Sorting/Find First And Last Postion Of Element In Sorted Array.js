Find First And Last Postion Of Element In Sorted Array

1. Given an array of integers nums sorted in ascending order, find the starting and ending position of 
    a given target value.
2. If target is not found in the array, return [-1, -1].
3. You must write an algorithm with O(log n) runtime complexity.

Constraints
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non-decreasing array.
-10^9 <= target <= 10^9

Sample Input
7
2 2 3 3 3 4 5
3

Sample Output
2 4


// code

import java.util.*;
import java.io.*;

public class Main {

    //return an array of size two, which contains first and last index of target.
    public static int[] find(int[]arr,int target) {
        //write your code here
        int low = 0;
        int high = arr.length - 1;
        int fi = -1;
        int li = -1;
        
        // find first index
        while(low <= high){
            int mid = (low+high)/2;
            if(arr[mid] == target){
                fi = mid;
                high = mid-1;
            }else if(arr[mid] < target){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        
        // find last index
        low = 0;
        high = arr.length - 1;
        
        while(low <= high){
            int mid = (low+high)/2;
            if(arr[mid]==target){
                li = mid;
                low = mid+1;
            }else if(arr[mid]<target){
                low = mid+1;
            }else{
                high = mid - 1;
            }
        }
        
        int ans[] = new int[2];
        ans[0] = fi;
        ans[1] = li;
        return ans;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();
        int[]arr = new int[n];

        for(int i=0;i < n;i++) {
            arr[i] = scn.nextInt();
        }

        int target = scn.nextInt();

        int[]ans = find(arr,target);
        System.out.println(ans[0] + " " + ans[1]);
    }
}