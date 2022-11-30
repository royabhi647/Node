Partition Labels

1. A string 's' of lowercase English letters is given. 
2. We want to partition this string into as many parts as possible so that each letter appears in at most one part.
3. Return a list of integers representing the size of these parts.

Input Format
s = "ababcbacadefegdehijhklij"

Output Format
[9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Constraints
1. 's' will have length in range [1, 500].
2. 's' will consist of lowercase English letters ('a' to 'z') only.

Sample Input
ababcbacadefegdehijhklij

Sample Output
9 7 8 

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~
  public static List<Integer> partitionLabels(String s) {
    // write your code here
    HashMap<Character,Integer> map = new HashMap<>();
    // filling of impact of character
    for(int i = 0; i < s.length(); i++){
        char ch = s.charAt(i);
        map.put(ch,i);
    }
    // making of results
    List<Integer> res = new ArrayList<>();
    int prev = -1;
    int max = 0;
    
    for(int i = 0; i < s.length(); i++){
        char ch = s.charAt(i);
        max = Math.max(max,map.get(ch));
        if(max == i){
            res.add(max - prev);
            prev = max;
        }
    }
    return res;
  }

  // ~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.nextLine();

    List<Integer> res = partitionLabels(str);
    for (int val : res) {
      System.out.print(val + " ");
    }
  }
}