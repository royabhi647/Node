// Print All Paths With Target Sum Subset

1. You are given a number n, representing the count of elements.
2. You are given n numbers.
3. You are given a number "tar".
4. You are required to calculate and print true or false, if there is a subset the elements of which add up to "tar" or not.
5. Also, you have to print the indices of elements that should be selected to achieve the given target.
6. You have to print all such configurations.

Constraints
1 <= n <= 30
0 <= n1, n2, .. n elements <= 20
0 <= tar <= 50

Sample Input
5
4
2
7
1
3
10

Sample Output
true
2 4 
1 2 3 
0 1 3 4 


// code

import java.io.*;
import java.util.*;

public class Main {

    public static class Pair{
        int i;
        int j;
        String psf;

        public Pair(int i, int j, String psf){
            this.i = i;
            this.j = j;
            this.psf = psf;
        }
    }
    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int tar = scn.nextInt();

        //write your code here
        
        boolean[][] dp = new boolean[arr.length+1][tar+1];
        
        for(int i = 0; i < dp.length; i++){
            for(int j = 0; j < dp[0].length; j++){
                if(j == 0){
                    dp[i][j] = true;
                }else if(i == 0){
                    dp[i][j] = false;
                }else{
                    if(dp[i - 1][j]){
                        dp[i][j] = true;
                    }else if(j >= arr[i - 1]){
                        if(dp[i-1][j-arr[i-1]] == true){
                            dp[i][j] = true;
                        }
                    }
                }
            }
        }
        
        System.out.println(dp[arr.length][tar]);
        
        ArrayDeque<Pair> queue = new ArrayDeque<>();
        queue.add(new Pair(n, tar, ""));
        
        while(queue.size() > 0){
            Pair rem = queue.removeFirst();
            
            if(rem.i == 0 || rem.j == 0){
                System.out.println(rem.psf);
            }else{
                // include 
                 if(rem.j >= arr[rem.i - 1]){
                    boolean inc = dp[rem.i - 1][rem.j - arr[rem.i - 1]];
                    if(inc){
                        queue.add(new Pair(rem.i - 1, rem.j - arr[rem.i - 1], (rem.i - 1) + " " + rem.psf));
                    }
                }
                // exclude check directly in upper cell i.e true or false , if true add in queue
                boolean exc = dp[rem.i - 1][rem.j];
                if(exc){
                    queue.add(new Pair(rem.i - 1, rem.j, rem.psf));
                }
            }
        }
    }
}