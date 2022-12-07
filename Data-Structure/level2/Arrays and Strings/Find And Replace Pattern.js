Find And Replace Pattern

1. Given a list of strings words and a string pattern.
2. Return a list of words[i] that match pattern.
 You may return the answer in any order.
3. A word matches the pattern if there exists a permutation of letters p so that
 after replacing every letter x in the pattern with p(x), we get the desired word.
4. Recall that a permutation of letters is a bijection from letters to letters: 
every letter maps to another letter, and no two letters map to the same letter.

Input Format
Input: words = ["mno","rst","rss","bll","lml","aaa"], pattern = "epp"

Input : Words = ["p", "e", "c"], pattern = "a"

Input : Words = ["abc", "pqr", "tuv"], pattern = "aaa"

Output Format
Output: ["rss","bll"]
Explanation: "rss" matches the pattern because there is a permutation {e -> r, p -> s, ...}. 
"aaa" does not match the pattern because {e -> a, p -> a, ...} is not a permutation, since e and p map to the same letter.

Output : ["p", "e", "c"]

Output : [] -> Empty

Constraints
1. 1 <= pattern.length <= 20
2. 1 <= words.length <= 20
3. words[i].length == pattern.length
4. pattern and words[i] are lowercase English letters.

Sample Input
epp
6
mno
rst
rss
bll
lml
aaa

Sample Output
bll rss 


// code

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~User's Section~~~~~~~~~~~~~~
    public static boolean isMatching(String word, String pattern){
        
        HashMap<Character, Character> map = new HashMap<>();
        HashSet<Character> set = new HashSet<>();
      
        for(int i = 0; i < pattern.length(); i++){
          // wch -> word character
          // pch -> pattern character
          char wch = word.charAt(i);
          char pch = pattern.charAt(i);
          
            if(map.containsKey(pch) == true){
              // pattern character is already mapped
                if(map.get(pch) != wch) return false;
            }else{
                // pattern character is new for mapping
                if(set.contains(wch))  return false;
                map.put(pch, wch);
                set.add(wch);
            }
        }
        return true;
    }
  public static List<String> findAndReplacePattern(String[] words, String pattern) {
    // write your code here
    List<String> res = new ArrayList<>();
    for(String word : words){
        if(isMatching(word, pattern)){
            res.add(word);
        }
    }
    return res;
  }

  // ~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String pattern = scn.nextLine();
    int n = scn.nextInt();
    scn.nextLine(); // to consume enter after number
    String[] words = new String[n];
    for (int i = 0; i < n; i++) {
      words[i] = scn.nextLine();
    }
    List<String> res = findAndReplacePattern(words, pattern);
    if (res.size() == 0) {
      System.out.println("Empty");
      return;
    }
    Collections.sort(res);
    for (String str : res) {
      System.out.print(str + " ");
    }
    System.out.println();
  }
}