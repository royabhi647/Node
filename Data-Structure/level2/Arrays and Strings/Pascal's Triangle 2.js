Pascal's Triangle 2

Description : 
1. Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
2. In Pascal's triangle, each number is the sum of the two numbers directly above OR it is also a pattern which can be made from combination maths
3. For More clearance, watch video till explanation of question.
eg. 
row 0 -> 1
row 1 -> 1 1
row 2 -> 1 2 1
row 3 -> 1 3 3 1
row 4 -> 1 4 6 4 1

Input Format
rowIndex = 3

Output Format
1 3 3 1

Constraints
1. 0 <= rowIndex <= 33

Sample Input
3

Sample Output
1 3 3 1 


// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~
  public static ArrayList<Integer> pascalRow(int i) {
    // write your code here
    // using combination ex - i = 4, 4C0,4C1,4C2,4C4,4C4
    ArrayList<Integer> res = new ArrayList<>();
    
    int val = 1;
    for(int j = 0; j <= i; j++){
        res.add(val);
        // j + 1 value
        val = val * (i - j) / (j + 1);
    }
    return res;
  }

  // ~~~~~~~~~~~Input management~~~~~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    ArrayList<Integer> res = pascalRow(n);
    for (int val : res) {
      System.out.print(val + " ");
    }
    System.out.println();
  }
}