Coin Change Combination

1. You are given a number n, representing the count of coins.
2. You are given n numbers, representing the denominations of n coins.
3. You are given a number "amt".
4. You are required to calculate and print the number of combinations of the n coins using which the 
     amount "amt" can be paid.

Note1 -> You have an infinite supply of each coin denomination i.e. same coin denomination can be 
                  used for many installments in payment of "amt"
Note2 -> You are required to find the count of combinations and not permutations i.e.
                  2 + 2 + 3 = 7 and 2 + 3 + 2 = 7 and 3 + 2 + 2 = 7 are different permutations of same 
                  combination. You should treat them as 1 and not 3.

Constraints
1 <= n <= 30
0 <= n1, n2, .. n elements <= 20
0 <= amt <= 50


Sample Input
4
2
3
5
6
7

Sample Output
2


// Tabulation Code


import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int arr[] = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = scn.nextInt();
        }
        int amt = scn.nextInt();
        
        int dp[] = new int[amt + 1];
        dp[0] = 1;
        for(int i=0;i<arr.length;i++){
            for(int j = arr[i];j<dp.length;j++){
                dp[j] += dp[j - arr[i]];
            }
        }
        System.out.println(dp[amt]);
    }
}