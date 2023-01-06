Find Minimum In Rotated Sorted Array

1. Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
2. Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
    in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
3. Given the sorted rotated array nums of unique elements, return the minimum element of this array.
4. You must write an algorithm that runs in O(log n) time.


Constraints
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

Sample Input
6
5 6 1 2 3 4

Sample Output
1


// code

import java.util.*;

public class Main {

    public static int findMinimum(int[]arr) {
        //write your code here
        int low = 0;
        int high = arr.length - 1;
        
        // array is not rotated
        if(arr[low] <= arr[high]){
            return arr[0];
        }
        
        while(low <= high){
            int mid = (low+high)/2;
            
            if(arr[mid] > arr[mid+1]){
                return arr[mid+1];
            }
            else if(arr[mid] < arr[mid-1]){
                return arr[mid];
            }
            // low to mid part is sorted
            else if(arr[low] <= arr[mid]){
                low = mid + 1;
            }
            // mid to high part is sorted
            else if(arr[mid] <= arr[high]){
                high = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[]arr = new int[n];
        for(int i = 0 ; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int ans = findMinimum(arr);
        System.out.println(ans);
    }
}