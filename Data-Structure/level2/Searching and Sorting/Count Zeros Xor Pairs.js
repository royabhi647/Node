Count Zeros Xor Pairs

1. Given an array A[] of size N. 
2. Find the number of pairs (i, j) such that A[i] XOR A[j] = 0, and 1 <= i < j <= N.

Constraints
2 <= N <= 10^5
1 <= A[i] <= 10^5

Sample Input
6
1 3 1 3 1 1

Sample Output
7

// code

import java.util.*;
import java.io.*;

public class Main {
  public static int countPairs(int[]arr) {
    //write your code here
    HashMap<Integer,Integer> fmap = new HashMap<>();
    
    for(int i = 0; i < arr.length; i++){
        if(fmap.containsKey(arr[i]) == true){
            fmap.put(arr[i],fmap.get(arr[i])+1);
        }else{
            fmap.put(arr[i],1);
        }
    }
    
    int count = 0;
    for(int key : fmap.keySet()){
        int val = fmap.get(key);
        
        count += ((val-1)*val/2);
    }
    return count;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    System.out.println(countPairs(arr));
  }
}