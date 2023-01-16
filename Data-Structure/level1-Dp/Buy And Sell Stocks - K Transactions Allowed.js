Buy And Sell Stocks - K Transactions Allowed

1. You are given a number n, representing the number of days.
2. You are given n numbers, where ith number represents price of stock on ith day.
3. You are given a number k, representing the number of transactions allowed.
3. You are required to print the maximum profit you can make if you are allowed k transactions at-most.

Note - There can be no overlapping transaction. One transaction needs to be closed (a buy followed by a sell) 
before opening another transaction (another buy).

Constraints
0 <= n <= 20
0 <= n1, n2, .. <= 10
0 <= k <= n / 2

Sample Input
6
9
6
7
6
3
8
1


Sample Output
5


// code

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        
        int[] arr = new int[n];
        for(int i = 0; i < arr.length; i++){
            arr[i] = scn.nextInt();
        }
        
        int k = scn.nextInt();
        
        int[][] dp = new int[k + 1][n];
        
        // t -> transection
        // d -> day
        // ptilltm1 -> profit till t minus 1
        // pd -> past day
        // ptth -> profit'th transaction
        for(int t = 1; t <= k; t++){
            for(int d = 1; d < arr.length; d++){
                int max = dp[t][d - 1];
                
                for(int pd = 0; pd < d; pd++){
                    int ptilltm1 = dp[t - 1][pd];
                    int ptth = arr[d] - arr[pd];
                    
                    if(ptilltm1 + ptth > max){
                        max = ptilltm1 + ptth;
                    }
                }
                dp[t][d] = max;
            }
        }
        System.out.println(dp[k][n -1]);
    }

}