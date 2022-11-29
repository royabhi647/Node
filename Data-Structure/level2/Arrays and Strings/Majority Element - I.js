Majority Element - I

1. Give an array of size 'n'.
2. Find Majority element and print it(if exist), otherwise print "No Majority Element exist".
3. Majority element-> if frequency of an element is more than n/2, then that element is majority element.
3. Note : solve the problem in linear time and in O(1) space.

Input Format
Array = [2,2,1,1,1,2,2]
Array = [1, 1, 5, 5, 3, 6]

Output Format
2
No Majority Element exist

Constraints
1. 1 <= n <= 10^4
2. -10^9 < arr[n] < 10^9

Sample Input
7
2 2 1 1 1 2 2

Sample Output
2

// optimise code tc = O(n), sc=O(1)

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~~~~~
    public static int validCandidate(int[]arr){
        int val = arr[0];
        int count = 1;
        
        for(int i = 1; i < arr.length; i++){
            if(val == arr[i]){
                // same elment increment in frequency 
                count++;
            }else{
                // distinct element , map it with val
                count--;
            }
            if(count == 0){
                val = arr[i];
                count = 1;
            }
        }
        return val;
    }

    public static void printMajorityElement(int[] arr) {
        // write your code here
        // value have potential candidate for majority
        int value = validCandidate(arr);
        // find frequency for potential candidate
        int count = 0;
        for(int i=0;i<arr.length;i++){
            if(arr[i] == value){
                count++;
            }
        }
        if(count > arr.length / 2){
            // majprity element is value
            System.out.println(value);
        }else{
            // no majority element
            System.out.println( "No Majority Element exist");
        }
        
    }

    // ~~~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~~~

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        printMajorityElement(arr);
    }
}