Maximum Swap

1. You are given a number in form of String. 
2. You can swap two digits at most once to get the maximum valued number in that string.
3. Return the maximum valued number you can get in form of string.

Input Format
num = "2736"

Output Format
res = "7236"
Explanation : swap 2 and 7 to get maximum values

Constraints
0 < num.lenght() < 10^5

Sample Input
2736

Sample Output
7236

// optimise code


import java.util.*;

public class Main {

  // ~~~~~~~~~~User Section~~~~~~~~~~~
  public static void swap(char[] arr, int i, int j){
      char temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  public static String maximumSwap(String num) {
    // write your code here
    char[] arr = num.toCharArray();
    
    // 1. prepare last index of digit
    int[] li = new int[10];
    for(int i = 0; i < arr.length; i++){
        int digit = arr[i] - '0';
        li[digit] = i;
    }
    
    // 2. figure out position for swapping
    boolean flag = false;
    for(int i = 0; i < arr.length; i++){
        int digit = arr[i] - '0';
        for(int j = 9; j > digit; j--){
            if(i < li[j]){
                // swapping and break
                swap(arr, i, li[j]);
                flag = true;
                break;
            }
        }
        if(flag == true){
            break;
        }
    }
    // 3. prepare answer in the form of string
    String res = "";
    for(int i = 0; i < arr.length; i++){
        res += arr[i];
    }
    return res;
  }

  // ~~~~~~~~Input Management~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.nextLine();
    String ans = maximumSwap(str);
    System.out.println(ans);
  }
}