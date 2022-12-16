Orderly Queue

You are given a string s and an integer k. 
You can choose one of the first k letters of s and append it at the end of the string..

Return the lexicographically smallest string you could have after applying 
the mentioned step any number of moves.

Example 1:

Input: s = "cba", k = 1
Output: "acb"
Explanation: 
In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".

Example 2:

Input: s = "baaca", k = 3
Output: "aaabc"
Explanation: 
In the first move, we move the 1st character 'b' to the end, obtaining the string "aacab".
In the second move, we move the 3rd character 'c' to the end, obtaining the final result "aaabc".



// code

class Solution {
    public String orderlyQueue(String s, int k) {
        int n = s.length();
        String doublestring = s+s;
        String ans = s;

        // when k value is 1 , remove 1st element and shift to last 
        if(k == 1){
            for(int i = 1; i < n; i++){
                String str = doublestring.substring(i,n+i);
                if(ans.compareTo(str) > 0){
                    ans = str;
                }
            }
            return ans;
        }
        // when k value is greater than 1 , simply sort the array bczz output of string is in sorted form
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        String str = String.valueOf(arr);
        return str;
    }
}