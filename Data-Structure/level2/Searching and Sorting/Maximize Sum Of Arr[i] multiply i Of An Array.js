Maximize Sum Of Arr[i]*i Of An Array

1. Given an array arr of N integers. 
2. Your task is to write a program to find the maximum value of sum of arr[i]*i, where i = 0,1,2,...,n-1.
3. You are allowed to rearrange the elements of the array.


Constraints
1 <= N <= 10^6
1 <= arr[i] <= 10^5

Sample Input
5
2 3 1 5 4

Sample Output
40


// code

import java.util.*;

public class Main {

    public static int maximise(int[]arr) {
        //write your code here
        int osum = 0;
        Arrays.sort(arr);
        for(int i = 0; i < arr.length; i++){
            osum += arr[i] * i;
        }
        return osum;
    }

    public static void main(String[]args) {
        //input work
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[]arr = new int[n];
        for(int i = 0 ; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int ans = maximise(arr);
        System.out.println(ans);
    }
}