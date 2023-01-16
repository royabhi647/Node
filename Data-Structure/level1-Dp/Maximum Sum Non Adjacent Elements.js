Maximum Sum Non Adjacent Elements

1. You are given a number n, representing the count of elements.
2. You are given n numbers, representing n elements.
3. You are required to find the maximum sum of a subsequence with no adjacent elements.

Constraints
1 <= n <= 1000
-1000 <= n1, n2, .. n elements <= 1000

Sample Input
6
5
10
10
100
5
6

Sample Output
116

// code

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        
        int arr[] = new int[n];
        for(int i = 0; i < arr.length; i++){
            arr[i] = scn.nextInt();
        }
        
        int include = arr[0];
        int exclude = 0;
        
        for(int i = 1; i < arr.length; i++){
            int new_include = exclude + arr[i];
            int new_exclude = Math.max(include, exclude);
            
            include = new_include;
            exclude = new_exclude;
        }
        int ans = Math.max(include,exclude);
        System.out.println(ans);
    }
}