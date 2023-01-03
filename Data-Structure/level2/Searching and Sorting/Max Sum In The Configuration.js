Max Sum In The Configuration

1. Given an array, you have to find the max sum of i*A[i] where A[i] is the element at index i in the array. 
2. The only operation allowed is to rotate(clock-wise or counter clock-wise) the array any number of times.

Constraints
1 <= N <= 10^6
1 <= arr[i] <= 10^5

Sample Input
4
8 3 1 2

Sample Output
29

// code

import java.util.*;

public class Main {

    public static int maximise(int[]arr) {
        //write your code here
        int n = arr.length;
        
        int sum = 0;
        int s0 = 0;
        
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
            s0 += arr[i] * i;
        }
        
        int max = s0;
        int si = s0;
        
        for(int i = 0; i < n-1; i++){
            int sip1 = si + sum - n*arr[n-i-1];
            
            if(sip1 > max){
                max = sip1;
            }
            
            si = sip1;
        }
        return max;
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