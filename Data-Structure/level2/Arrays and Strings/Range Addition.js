Range Addition

1. Assume you have an array of length 'n' initialized with all 0's and are given 'q' queries to update.
2. Each query is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.
3. Return the modified array after all 'q' queries were executed.

Input Format
length = 5,
updates = 
{
    {1,  3,  2},
    {2,  4,  3},
    {0,  2, -2}
}

Output Format
return {-2, 0, 3, 5, 3}
Explanation : 
Initial state:
{ 0, 0, 0, 0, 0 }
After applying operation [1, 3, 2]:
{ 0, 2, 2, 2, 0 }
After applying operation [2, 4, 3]:
{ 0, 2, 5, 5, 3 }
After applying operation [0, 2, -2]:
{-2, 0, 3, 5, 3 }

Constraints
0 <= n <= 10^5
0 <= q <= 10^5

Sample Input
12
4
2 6 4
0 5 3
1 4 -2
6 9 1

Sample Output
3 1 5 5 5 7 5 1 1 1 0 0 

// optimise code  O(q) + O(n)  if(n>q)  tc = O(n)

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~~~~~

    public static int[] getModifiedArray(int length, int[][] queries) {
        // write your code here
        int res[] = new int[length];
        
        // provide impact to res
        for(int q = 0; q < queries.length; q++){
            int st = queries[q][0];
            int end = queries[q][1];
            int inc = queries[q][2];
            
            res[st] += inc;
            if(end + 1 < length){
                res[end + 1] -= inc;
            }
        }
        
        // prefix sum
        int sum = 0;
        for(int i = 0; i < length; i++){
            sum += res[i];
            res[i] = sum;
        }
        return res;
        
    }

    // ~~~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~~~

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        int length = scn.nextInt();

        int nq = scn.nextInt();
        
        int[][] queries = new int[nq][3];

        for(int q = 0; q < nq; q++) {
            queries[q][0] = scn.nextInt();
            queries[q][1] = scn.nextInt();
            queries[q][2] = scn.nextInt();
        }


        int[] res = getModifiedArray(length, queries);

        for(int i = 0; i < res.length; i++) {
            System.out.print(res[i] + " ");
        }
    }
}