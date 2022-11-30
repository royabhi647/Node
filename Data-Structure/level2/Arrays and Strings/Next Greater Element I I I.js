Next Greater Element I I I

1. Given a positive number 'n' in form of String.
2. Find the smallest number which has exactly the same digits existing in the number 'n' and is greater in value than 'n'.
3. If no such positive number exists, return -1 as string.

Input Format
Input: n = 12
Input: n = 21

Output Format
Output: 21
Output: -1

Constraints
1. 'n' is given in form of string.

Sample Input
132

Sample Output
213

// code

import java.util.*;

public class Main {
    
    //~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~~
    public static String nextGreaterElement(String str) {
        // write your code here
        char[] arr = str.toCharArray();  // convert string to character array
        int idx1=Integer.MIN_VALUE;
        int idx2=Integer.MIN_VALUE;
        // find smallest element from right-2 to left
        for(int i = arr.length - 2; i >= 0; i--){
            if(arr[i] < arr[i + 1]){
                idx1 = i;
                break;
            }
        }
        if(idx1 == Integer.MIN_VALUE) return "-1";
        // find just greater than ith index element
        for(int i = arr.length - 1; i >= 0; i--){
            if(arr[i] > arr[idx1]){
                idx2 = i;
                break;
            }
        }
        // swap idx1 and idx2 with each other
        char temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        
        // concatenate from 0 to idx1
        String res = "";
        for(int j = 0; j <= idx1; j++){
            res += arr[j];
        }
        // concatenate from  idx1 + 1 to last
        for(int j = arr.length - 1; j > idx1; j--){
            res += arr[j];
        }
        return res;
        
    }

    //~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String num = scn.next();
        String res = nextGreaterElement(num);

        System.out.println(res);
    }
}