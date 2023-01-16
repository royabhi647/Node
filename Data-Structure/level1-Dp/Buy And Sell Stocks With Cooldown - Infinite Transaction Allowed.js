Buy And Sell Stocks With Cooldown - Infinite Transaction Allowed

1. You are given a number n, representing the number of days.
2. You are given n numbers, where ith number represents price of stock on ith day.
3. You are required to print the maximum profit you can make if you are allowed infinite transactions,
 but have to cooldown for 1 day after 1 transaction

i.e. you cannot buy on the next day after you sell, you have to cooldown for a day at-least before buying again.
Note - There can be no overlapping transaction. One transaction needs to be closed (a buy followed by a sell) 
before opening another transaction (another buy).


Constraints
0 <= n <= 20
0 <= n1, n2, .. <= 10

Sample Input
12
10
15
17
20
16
18
22
20
22
20
23
25

Sample Output
19


// code


import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        // write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[]arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = scn.nextInt();
        }
        // old buy state profit
        // old sell state profit
        // old cold state profit
        
        int obsp = -arr[0];
        int ossp = 0;
        int ocsp = 0;
        
        for(int i=1;i<n;i++){
            int nbsp = 0;
            int nssp = 0;
            int ncsp = 0;
            
            // buy
            if(ocsp - arr[i] > obsp){
                nbsp = ocsp - arr[i];
            }else{
                nbsp = obsp;
            }
            
            // sell
            if(obsp + arr[i] > ossp){
                nssp = obsp + arr[i];
            }else{
                nssp = ossp;
            }
            
            // cold
            if(ossp > ocsp){
                ncsp = ossp;
            }else{
                ncsp = ocsp;
            }
            
            obsp = nbsp;
            ossp = nssp;
            ocsp = ncsp;
        }
        
        System.out.println(ossp);
    }

}