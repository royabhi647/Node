Climb Stairs

1. You are given a number n, representing the number of stairs in a staircase.
2. You are on the 0th step and are required to climb to the top.
3. In one move, you are allowed to climb 1, 2 or 3 stairs.
4. You are required to print the number of different paths via which you can climb to the top.

Constraints
0 <= n <= 20

Sample Input
4

Sample Output
7

             // Recursive code

             import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        // By Recursion
        int ans = st_rec(n);
        System.out.println(ans);
    }
    
    public static int st_rec(int n){
        if(n<0){
            return 0;
        }
        if(n==0 || n==1){
            return 1;
        }
        int ans = st_rec(n-1) + st_rec(n-2) + st_rec(n-3);
        return ans;
    }

}


        // Memoization Code

        import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        // By memoization
        int [] dp = new int[n+1];
        for(int i=0;i<=n;i++){
            dp[i]=-1;
        }
        int ans = st_memo(n,dp);
        System.out.println(ans);
    }
    
    public static int st_memo(int n,int[]dp){
        if(n<0){
            return 0;
        }
        if(n==0){
            return dp[n]=1;
        }
        if(dp[n]!=-1){
            return dp[n];
        }
        
        int ans = st_memo(n-1,dp)+st_memo(n-2,dp)+st_memo(n-3,dp);
        return dp[n]=ans;
    }

}


            // Tabulation Code

            import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        // By Tabulation
        int dp[] = new int[n+1];
        int ans = cs_tab(n,dp);
        System.out.println(ans);
    }
    
    public static int cs_tab(int n, int dp[]){
        if(n<0){
            return 0;
        }
        dp[0]=1;
        
        for(int i=1;i<=n;i++){
            if(i==1){
                dp[i]=dp[i-1];
            }else if(i==2){
                dp[i]=dp[i-1]+dp[i-2];
            }else{
                dp[i]=dp[i-1]+dp[i-2]+dp[i-3];
            }
        }
        return dp[n];
    }

}