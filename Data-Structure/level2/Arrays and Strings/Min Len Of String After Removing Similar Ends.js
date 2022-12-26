Min Len Of String After Removing Similar Ends

Given a String of Characters.
Task is to "Find Minimum length of string after removing similar ends ?."

Example 1 : 
    Intput : "pepepep"
    Output : 1
    Explanation : After removing "pep" from start & end of String will leave only 1 length string.

Example 2 : 
    Input : "aaabbcdaoddcccbaa"
    Ouput : 2
    Explanation : 
            1. remove "aaa" from left end & "aa" from right end(as they have similar characters)
            2. remove "bb" from left end & "b" from right end(as they have similar characters)
            3. remove "c" from left end & "ccc" from right end(as they have similar characters)
            4. remove "d" from left end & "dd" from right end(as they have similar characters)
            5. removing similars will ensure a String of length 2 i.e. "ao"
Example 3 : 
    Input : "abcd"
    Output : 4
    Explanation : No similar characters on both ends.

Example 4 : 
    Input : "aabccba"
    Output : 0


Constraints
    1. 0 < length(Input String) <= 10^9



// code

import java.util.Scanner;
public class Main {
  public static int minLen(String s) {
    // write your code here
    int left = 0;
    int right = s.length() - 1;

    while(left < right && s.charAt(left) == s.charAt(right)){
        char ch = s.charAt(left);

        while(left < right && ch == s.charAt(left)){
            left++;
        }

        while(left <= right && ch == s.charAt(right)){
            right--;
        }
    }
    return right - left + 1;
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);

    String inp = scn.nextLine();
    int len = minLen(inp);

    System.out.println(len);
  }
}
