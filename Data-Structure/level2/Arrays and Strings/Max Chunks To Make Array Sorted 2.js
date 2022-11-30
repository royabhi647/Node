Max Chunks To Make Array Sorted 2

1. Given an array arr of integers (not necessarily distinct).
2. We split the array into some number of "chunks" (partitions), and individually sort each chunk.  
3. After concatenating them, the result equals the sorted array.
4. What is the most number of chunks we could have made?

Input Format
arr = [2,1,3,4,4]

Output Format
4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.

Constraints
1. arr will have length in range [1, 2000].
2. arr[i] will be an integer in range [0, 10^8].

Sample Input
8
4 3 6 5 7 12 11 10

Sample Output
4

// code

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~
    public static int maxChunksToSorted2(int[] arr) {
        // generate right min
        int[] rmin = new int[arr.length + 1];
        
        
        rmin[arr.length] = Integer.MAX_VALUE;
        for(int i = arr.length - 1; i>= 0; i--) {
            rmin[i] = Math.min(rmin[i + 1], arr[i]);
        }
        
        // iterate on array and manage left max as well as count chunks
        
        int lmax = arr[0];
        int count = 0;
        for(int i = 0; i < arr.length; i++) {
            lmax = Math.max(lmax, arr[i]);
            
            if(lmax <= rmin[i + 1])
                count++;
        }
        
        return count;
    }

    // ~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int res = maxChunksToSorted2(arr);
        System.out.println(res);
    }
}
                                