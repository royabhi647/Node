Fibonacci-dp

1. You are given a number n.
2. You are required to print the nth element of fibonnaci sequence.

Note -> Notice precisely how we have defined the fibonnaci sequence
0th element -> 0
1st element -> 1
2nd element -> 1
3rd element -> 2
4th element -> 3
5th element -> 5
6th element -> 8

Sample Input => 10
Sample Output => 55

                       // Recursive code

    import java.io.*;
    import java.util.*;
    // recursive code
    public class Main{
        
        public static int rec_fibo(int n){
            if(n<=1){
                return n;
            }
            
            int fib=rec_fibo(n-1)+rec_fibo(n-2);
            return fib;
        }

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int ans = rec_fibo(n);
        System.out.println(ans);
    }

    }


                          //   Memoization code

        import java.io.*;
        import java.util.*;
        
        public class Main{
            
            public static int memo_fibo(int n,int[]dp){
                if(n<=1){
                    return dp[n]=n;
                }
                
                if(dp[n]!=-1){
                    return dp[n];
                }
                int fib=memo_fibo(n-1,dp)+memo_fibo(n-2,dp);
                dp[n]=fib;
                return fib;
            }
        
        public static void main(String[] args) throws Exception {
            // write your code here
            Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            int dp[]=new int[n+1];
            
            for(int i=0;i<=n;i++){
                dp[i] = -1;
            }
            int ans = memo_fibo(n,dp);
            System.out.println(ans);
        }
        
        }


                //   Tabulation code

                                import java.io.*;
                import java.util.*;

                public class Main{

                public static void main(String[] args) throws Exception {
                    // write your code here
                    Scanner scn = new Scanner(System.in);
                    int n = scn.nextInt();
                    int dp[]=new int[n+1];
                    dp[0]=0;
                    dp[1]=1;
                    for(int i=2;i<=n;i++){
                        dp[i]=dp[i-1]+dp[i-2];
                    }
                    System.out.println(dp[n]);
                }

                }