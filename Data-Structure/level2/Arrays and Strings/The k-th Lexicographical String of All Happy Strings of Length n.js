The k-th Lexicographical String of All Happy Strings of Length n

A happy string is a string that:

consists only of letters of the set ['a', 'b', 'c'].
s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).

For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings
 and strings "aa", "baa" and "ababbc" are not happy strings.

 Given two integers n and k, 
 consider a list of all happy strings of length n sorted in lexicographical order.

 Return the kth string of this list or return an empty string 
 if there are less than k happy strings of length n.

 Example 1:

Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

Example 2:

Input: n = 1, k = 4
Output: ""
Explanation: There are only 3 happy strings of length 1.
Example 3:

Input: n = 3, k = 9
Output: "cab"
Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 

Constraints:

1 <= n <= 10
1 <= k <= 100

// code


class Solution {
    public String getHappyString(int n, int k) {
        int total = 3; // total = 12 for n is 3
        for(int i = 1; i < n; i++){
            total = total * 2;
        }
        if(total < k){
            return "";
        }
        // calls 1st time is 3 [a, b, c] and 2nd time only two calls b,c | a,c | a,b
        int calls = 3;
        k--;   // index based
        int pcall = -1; // previous call
        StringBuilder sb = new StringBuilder();
        while(n--> 0){
            int spart = total / calls;  // single part
            int ncall = (k / spart);  // new call
            if(ncall == 0){
                if(pcall == 0){
                    pcall = 1;
                }else{
                    pcall = 0;
                }
            }else if(ncall == 1){
                if(pcall == -1 || pcall == 2){
                    pcall = 1;
                }else{
                    pcall = 2;
                }
            }else{
               pcall = 2;
            }
            sb.append((char)('a'+pcall));
            total = spart;
            k -= (spart * ncall);
            calls = 2;
            // n--;
        }
        return sb.toString();
    }
}