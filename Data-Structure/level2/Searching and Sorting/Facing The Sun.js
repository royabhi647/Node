Facing The Sun

Given an array ht representing heights of buildings. 
You have to count the buildings which will see the sunrise
 (Assume : Sun rise on the side of array starting point).

Constraints
 1 <= N <= 10^6
 1 <= H[i] <= 10^8

Sample Input
5
7 4 8 2 9

Sample Output
3

// code

import java.util.*;
import java.io.*;

public class Main {
  public static int countBuildings(int[]ht) {
    //write your code here
    int lmax = ht[0];
    int count = 1;
    
    for(int i = 1; i < ht.length; i++){
        if(ht[i] > lmax){
            count++;
            lmax = ht[i];
        }
    }
    return count;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]ht = new int[n];

    for (int i = 0; i < n; i++) {
      ht[i] = scn.nextInt();
    }

    System.out.println(countBuildings(ht));
  }
}