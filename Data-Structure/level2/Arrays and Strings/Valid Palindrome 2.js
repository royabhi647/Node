Valid Palindrome 2

1. Given a string s.
2. Return true if the s can be palindrome after deleting at most one character from it.

Input Format
s = "abca"

Output Format
true
Explanation: You could delete the character 'c'.

Constraints
1. 1 <= s.length <= 10^5
2. s consists of lowercase English letters.

Sample Input
abca

Sample Output
true

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~
   public static boolean isPalindrome(String str, int left, int right){
        while(left < right){
            if(str.charAt(left) == str.charAt(right)){
                left++;
                right--;
            }else{
                return false;
            }
        }
        return true;
   }
  public static boolean validPalindrome(String s) {
    // write your code here
    int i = 0;
    int j = s.length() - 1;
    while(i < j){
        if(s.charAt(i) == s.charAt(j)){
            i++;
            j--;
        }else{
            // delete at most one character from left or delete at most one character from right
            return isPalindrome(s,i + 1, j) || isPalindrome(s, i, j - 1);
        }
    }
    return true;
  }

  // ~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.nextLine();

    boolean res = validPalindrome(str);
    System.out.println(res);
  }
}