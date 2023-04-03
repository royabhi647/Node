// Largest Square Sub-matrix With All 1's

1. You are given a matrix of 0's and 1's.
2. You have to find the maximum size square sub-matrix with all 1's.

Constraints
1 <= N,M <= 100
0<= arr[i][j] <= 1

Sample Input
5 6
0 1 0 1 0 1 
1 0 1 0 1 0 
0 1 1 1 1 0 
0 0 1 1 1 0 
1 1 1 1 1 1

Sample Output
3


// code

import java.util.*;
import java.io.*;
class HelloWorld {
	public static int solution(int[][] arr) {
	    //write your code here
	    int dp[][] = new int[arr.length][arr[0].length];
	    int ans = 0;
        
        for(int i = arr.length-1; i >= 0; i--){
            for(int j = arr[0].length-1; j >= 0; j--){
                if(i == arr.length-1 && j == arr[0].length-1){
                    dp[i][j] = arr[i][j];
                }else if(i == arr.length-1){
                    dp[i][j] = arr[i][j];
                }else if(j == arr[0].length-1){
                    dp[i][j] = arr[i][j];
                }else{
                    if(arr[i][j] == 0){
                        dp[i][j] = 0;
                    }else{
                        int min = Math.min(dp[i][j+1],dp[i+1][j]);
                        min = Math.min(min,dp[i+1][j+1]);
                        dp[i][j] = min + 1;
                        
                        if(dp[i][j] > ans){
                            ans = dp[i][j];
                        }
                    }
                }
            }
        }
        
	    return ans;
	}
    public static void main(String[] args) {
    	Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		int m =scn.nextInt();
		int[][] arr = new int[n][m];
		for(int i = 0 ; i < n; i++){
			for(int j = 0 ; j < m; j++){
				arr[i][j] = scn.nextInt();
			}
		}
		System.out.println(solution(arr));
    }
}