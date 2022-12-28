Buy And Sell Stocks - Two Transactions Allowed

1. You are given a number n, representing the number of days.
2. You are given n numbers, where ith number represents price of stock on ith day.
3. You are required to print the maximum profit you can make if you are allowed two transactions at-most.

Note - There can be no overlapping transaction. One transaction needs to be closed (a buy followed by a sell)
 before opening another transaction (another buy).


Constraints
    0 <= n <= 20
    0 <= n1, n2, .. <= 10

Sample Input
    9
    11
    6
    7
    19
    4
    1
    6
    18
    4

Sample Output
    30



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
        
        // maximum profit if sold today
        // least so far
        // dp left
        
        int mpist = 0;
        int leastsf = arr[0];
        int[] dpl = new int[arr.length];
        
        for(int i = 1; i < arr.length; i++){
            if(arr[i] < leastsf){
                leastsf = arr[i];
            }
            mpist = arr[i] - leastsf;
            if(mpist > dpl[i - 1]){
                dpl[i] = mpist;
            }else{
                dpl[i] = dpl[i - 1];
            }
        }
        
        // maximum profit if bought today
        // max after today
        // dp right
        
        int mpibt = 0;
        int maxat = arr[arr.length - 1];
        int[] dpr = new int[arr.length];
        
        for(int i = arr.length - 2; i >= 0; i--){
            if(arr[i] > maxat){
                maxat = arr[i];
            }
            
            mpibt = maxat - arr[i];
            if(mpibt > dpr[i + 1]){
                dpr[i] = mpibt;
            }else{
                dpr[i] = dpr[i + 1];
            }
        }
        
        // overall profit
        
        int op = 0;
        for(int i = 0; i < arr.length; i++){
            if(dpl[i] + dpr[i] > op){
                op = dpl[i] + dpr[i];
            }
        }
        System.out.println(op);
    }

}