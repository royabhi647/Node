Max Chunks To Make Array Sorted

1. Given an array arr that is a permutation of [0, 1, ..., arr.length - 1].
2. We split the array into some number of "chunks" (partitions), and individually sort each chunk. 
3. Shuffling of chunk is not allowed.
4. After concatenating them, the result equals the sorted array.
5. What is the most number of chunks we could have made?


Input Format
arr = [4,3,2,1,0]


Output Format
1


Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.


Constraints
1. arr will have length in range [1, 10].
2. arr[i] will be a permutation of [0, 1, ..., arr.length - 1].


Sample Input
6
2 0 1 3 5 4


Sample Output
3


// code

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~~
    public static int maxChunksToSorted(int[] arr) {
        // write your code here   
        int max = 0;
        int count = 0;
        
        for(int i = 0; i < arr.length; i++){
            max = Math.max(arr[i],max);
            
            if(i == max){
                count++;
            }
        }
        return count;
    }

    // ~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int res = maxChunksToSorted(arr);
        System.out.println(res);
    }
}