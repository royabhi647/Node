Paint House - Many Colors

1. You are given a number n and a number k separated by a space, representing the number of houses and number of colors.
2. In the next n rows, you are given k space separated numbers representing the cost of painting nth house with one of the k colors.
3. You are required to calculate and print the minimum cost of painting all houses without painting any consecutive house with same color.

Constraints
1 <= n <= 1000
1 <= k <= 10
0 <= n1-0th, n1-1st, .. <= 1000

Sample Input
4 3
1 5 7
5 8 4
3 2 9
1 2 4

Sample Output
8


// 1st code O(n^3)

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int c = scn.nextInt();
        
        int[][] arr = new int[n][c];
        for(int i = 0; i < arr.length; i++){
            for(int j = 0; j < arr[0].length; j++){
                arr[i][j] = scn.nextInt();
            }
        }
        
        int[][] dp = new int[arr.length][arr[0].length];
        
        for(int j = 0; j < arr[0].length; j++){
            dp[0][j] = arr[0][j];
        }
        
        for(int i = 1; i < dp.length; i++){
            for(int j = 0; j < dp[0].length; j++){
                int min = Integer.MAX_VALUE;
                
                for(int k = 0; k < dp[0].length; k++){
                    if(k != j){
                        if(dp[i - 1][k] < min){
                            min = dp[i - 1][k];
                        }
                    }
                }
                dp[i][j] = arr[i][j] + min;
            }
        }
        int min = Integer.MAX_VALUE;
        for(int k = 0; k < dp[0].length; k++){
            if(dp[n - 1][k] < min){
                min = dp[n - 1][k];
            }
        }
        System.out.println(min);
    }
}

// 2nd code



