Multiply Strings

1. Given two non-negative integers num1 and num2 represented as strings.
2. Return the product of num1 and num2, also represented as a string.
3. Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Input Format
Input: num1 = "123", num2 = "456"

Output Format
Output: "56088"

Constraints
1. 1 <= num1.length, num2.length <= 200
2. num1 and num2 consist of digits only.
3. Both num1 and num2 do not contain any leading zero, except the number 0 itself.

Sample Input
123
456

Sample Output
56088

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~
  public static String multiplication(String num1, String num2) {
    // write your code here
    if(num1.equals("0") || num2.equals("0")) return "0";
    int l1 = num1.length();
    int l2 = num2.length();
    int[] res = new int[l1 + l2];
    
    int i = l2 - 1;
    int pf = 0; // power factor
        while(i >= 0){
            int ival = num2.charAt(i) - '0';
            i--;
            
            int j = l1 - 1;
            int k = res.length - 1 - pf;
            int carry = 0;
            
            while(j >= 0 || carry != 0){
                int jval = j >= 0 ? num1.charAt(j) - '0' : 0;
                j--;
                
                int prod = ival * jval + carry + res[k];
                
                res[k] = prod % 10;
                carry = prod / 10;
                k--;
            }
            pf++;
        }
        // management of leading zero using general method
        String str = "";
        boolean flag = false;
        for(int val : res){
            if(val == 0 && flag == false){
                // leading zero , do nothing
                continue;
            }else{
                flag = true;
                str += val;
            }
        }
        return str;
    }

  //~~~~~~~~~~~~Input Management~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

    String str1 = scn.nextLine();
    String str2 = scn.nextLine();

    String res = multiplication(str1, str2);
    System.out.println(res);
  }
}
