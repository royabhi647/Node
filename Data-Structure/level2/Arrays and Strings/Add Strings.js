Add Strings

1. Given two non-negative integers, num1 and num2 represented as string.
2. Return the sum of num1 and num2 as a string.
3. You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
4. You must also not convert the inputs to integers directly.

Input Format
n1 = "1234"
n2 = "897"

Output Format
res = "2131"

Constraints
1. 1 <= num1.length, num2.length <= 10^4
2. num1 and num2 consist of only digits.
3. num1 and num2 don't have any leading zeros except for the zero itself.

Sample Input
1234
798

Sample Output
2032


// code

import java.util.*;

public class Main {

  public static String addStrings(String num1, String num2) {
    // write your code here
    String res = "";
    
    // i and j points last index of num1 and num2
    int i = num1.length() - 1;
    int j = num2.length() - 1;
    
    int carry = 0;
    
    while(i >= 0 || j >= 0 || carry != 0){
        int ival = i >= 0 ? num1.charAt(i) - '0' : 0;
        int jval = j >= 0 ? num2.charAt(j) - '0' : 0;
        
        i--;
        j--;
        
        int sum = ival + jval + carry;
        res = (sum % 10) + res;
        carry = sum / 10;
    }
    return res;
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String n1 = scn.nextLine();
    String n2 = scn.nextLine();

    String res = addStrings(n1, n2);
    System.out.println(res);
  }
}