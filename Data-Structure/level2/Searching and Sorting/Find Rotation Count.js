Find Rotation Count

1. Given an ascending sorted rotated array arr of distinct integers of size N. 
2. The array is right rotated K times. 
3. Your task is to find the value of K.

Constraints
1 <= N <=10^5
1 <= arr[i] <= 10^7

Sample Input
6
5 6 1 2 3 4

Sample Output
2

// code

import java.util.*;

public class Main {

    public static int findRotationCount(int[]arr) {
        //write your code here
        int low = 0;
        int high = arr.length-1;
        
        // array is not rotated at all
        if(arr[low] <= arr[high]){
            return 0;
        }
        
        while(low <= high){
            int mid = (low+high)/2;
            
            if(arr[mid] > arr[mid+1]){
                return mid+1;
            }else if(arr[mid] < arr[mid-1]){
                return mid;
            }else if(arr[low] <= arr[mid]){
                low = mid+1;
            }else if(arr[mid] <= arr[high]){
                high = mid-1;
            }
        }
        return 0;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[]arr = new int[n];
        for(int i = 0 ; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int ans = findRotationCount(arr);
        System.out.println(ans);
    }
}