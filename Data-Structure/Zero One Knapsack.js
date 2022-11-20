Zero One Knapsack

1. You are given a number n, representing the count of items.
2. You are given n numbers, representing the values of n items.
3. You are given n numbers, representing the weights of n items.
3. You are given a number "cap", which is the capacity of a bag you've.
4. You are required to calculate and print the maximum value that can be created in the bag without 
     overflowing it's capacity.

Note -> Each item can be taken 0 or 1 number of times. You are not allowed to put the same item 
               again and again.

Constraints
1 <= n <= 20
0 <= v1, v2, .. n elements <= 50
0 < w1, w2, .. n elements <= 10
0 < cap <= 10

Sample Input
5
15 14 10 45 30
2 5 1 3 4
7

Sample Output
75

// tabulation code

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int vals[] = new int[n];
        int wts[] = new int[n];
        
        for(int i = 0; i < vals.length; i++){
            vals[i] = scn.nextInt();
        }
        
        for(int i = 0; i < wts.length; i++){
            wts[i] = scn.nextInt();
        }
        
        int cap = scn.nextInt();
        
        int dp[][] = new int[n + 1][cap + 1];
        
        for(int i = 1; i < dp.length; i++){
            for(int j = 1; j < dp[0].length; j++){
                if(j >= wts[i - 1]){
                    int rCap = j - wts[i - 1];    // i - 1 means , in dp table 0 index is cross (0 index points from 1st row)  and in actual value of wts start from 0 index so, wts[i - 1]
                    
                    if(dp[i - 1][rCap] + vals[i - 1] > dp[i - 1][j]){
                        dp[i][j] = dp[i - 1][rCap] + vals[i - 1];
                    }else{
                        dp[i][j] = dp[i - 1][j]; // when i doesn't bat
                    }
                }else{
                    dp[i][j] = dp[i - 1][j]; // when i doesn't bat
                }
            }
        }
        System.out.println(dp[n][cap]);
    }
}