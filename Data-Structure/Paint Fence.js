Paint Fence

1. You are given a number n and a number k in separate lines, representing the number of fences and number of colors.
2. You are required to calculate and print the number of ways in which the fences could be painted so that not more than two consecutive  fences have same colors.

Constraints
1 <= n <= 10
1 <= k <= 10

Sample Input
8
3

Sample Output
3672

// code

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int k = scn.nextInt();
        
        long same = k * 1;
        long diff = k * (k - 1);
        long total = same + diff;
        
        for(int i = 3; i <= n; i++){
            same = diff * 1;
            diff = total * (k - 1);
            total = same + diff;
        }
        System.out.println(total);
    }
}