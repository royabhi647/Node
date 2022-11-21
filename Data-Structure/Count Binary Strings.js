Count Binary Strings

1. You are given a number n.
2. You are required to print the number of binary strings of length n with no consecutive 0's.

Constraints
0 < n <= 45

Sample Input
6

Sample Output
21

  // 1st code 

  import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    
    int dp0[] = new int[n + 1];
    int dp1[] = new int[n + 1];
    
    dp0[1] = 1;
    dp1[1] = 1;
    
    for(int i= 2; i <= n; i++){
        dp1[i] = dp1[i - 1] + dp0[i - 1];
        dp0[i] = dp1[i - 1];
    }
    System.out.println(dp1[n] + dp0[n]);
 }

}


// 2nd code

import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    
    int old_count_zeros = 1;
    int old_count_ones = 1;
    
    for(int i= 2; i <= n; i++){
       int new_count_zeros = old_count_ones;
       int new_count_ones = old_count_zeros + old_count_ones;
       
       old_count_ones = new_count_ones;
       old_count_zeros = new_count_zeros;
    }
    System.out.println(old_count_ones + old_count_zeros);
 }

}