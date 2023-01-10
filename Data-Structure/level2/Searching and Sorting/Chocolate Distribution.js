Chocolate Distribution

1. Given an array A[] of positive integers of size N, where each value represents the number of chocolates
     in a packet. Each packet can have a variable number of chocolates. There are M students, 
     the task is to distribute chocolate packets among M students such that :
2. Each student gets exactly one packet.
3. The difference between maximum number of chocolates given to a student and minimum number of chocolates 
    given to a student is minimum.


Constraints
 1 <= N <= 10^5
1 <= Ai <= 10^9
1 <= M <= N

Sample Input
8
3 4 1 9 56 7 9 12
5

Sample Output
6

// code

import java.util.*;
import java.io.*;

public class Main {

  public static int find(int[]arr, int n, int m) {
    //write your code here
    int ans = Integer.MAX_VALUE;
    
    Arrays.sort(arr);
    
    for(int i = 0; i <= n-m; i++){
        int minw = arr[i];         // minimum window
        int maxw = arr[i+m-1];     // maximum window
        int gap = maxw - minw;
        
        if(gap < ans){
            ans = gap;
        }
    }
    return ans;
  }

  public static void main(String[]args) {
    Scanner scn = new Scanner(System.in);
    //input work
    int n = scn.nextInt();
    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int m = scn.nextInt();
    int ans = find(arr, n, m);

    System.out.println(ans);
  }
}