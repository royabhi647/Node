Push Dominoes

1. There are n dominoes in a line, and we place each domino vertically upright.
2. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.
3. After each second, each domino that is falling to the left pushes the adjacent domino on the left. 
4. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.
5. When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of 
the forces.
6. For the purposes of this question, we will consider that a falling domino expends no additional force 
to a falling or already fallen domino.
7. You are given a string dominoes representing the initial state where:
    a). dominoes[i] = 'L', if the ith domino has been pushed to the left,
    b). dominoes[i] = 'R', if the ith domino has been pushed to the right, and
    c). dominoes[i] = '.', if the ith domino has not been pushed.
8. Return a string representing the final state.

Input Format
1. dominoes = "RR.L"
2. dominoes = ".L.R...LR..L.."

Output Format
1. "RR.L"
Explanation: The first domino expends no additional force on the second domino.

2. "LL.RR.LLRRLL.." 


Constraints
1. n == dominoes.length
2. 1 <= n <= 10^5
3. dominoes[i] is either 'L', 'R', or '.'

Sample Input
RR.L

Sample Output
RR.L

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~User's Section~~~~~~~~~~~~~~
    public static void solveConiguration(char[] arr, int i, int j){
        if(arr[i] == 'L' && arr[j] == 'L'){
            // make all dots are L
            for(int k = i + 1; k < j; k++){
                arr[k] = 'L';
            }
        }else if(arr[i] == 'R' && arr[j] == 'R'){
            // make all dots are R
            for(int k = i + 1; k < j; k++){
                arr[k] = 'R';
            }
        }else if(arr[i] == 'L' && arr[j] == 'R'){
          // nothing to do
        }else{
          // arr[i] = 'R' and arr[j] = 'L'
          // solve according to odd count and even count of dots
          int diff = j - i;
          int mid = (i + j) / 2;
            if(diff % 2 == 0){
                // odd dots
                for(int k = i + 1; k < mid; k++){
                    arr[k] = 'R';
                }
                for(int k = mid + 1; k < j; k++){
                    arr[k] = 'L';
                }
            }else{
                // even dots
                 for(int k = i + 1; k <= mid; k++){
                    arr[k] = 'R';
                }
                for(int k = mid + 1; k < j; k++){
                    arr[k] = 'L';
                }
            }
        }
    }
  public static String pushDominoes(String str) {
    // write your code here
    int n = str.length();
    // create array two size extra and add on 0 and last index with 'L' and 'R' for segmentation(range b/w L and R or R and L)
    char[] arr = new char[n + 2];
    arr[0] = 'L';
    arr[n + 1] = 'R';
    
    for(int i = 1; i < arr.length - 1; i++){
        arr[i] = str.charAt(i - 1);
    }
    
    int j = 0;
    int k = 1;
    
    while(k < arr.length){
        while(arr[k] == '.'){
            k++;
        }
        if(k - j > 1){
            solveConiguration(arr, j, k);
        }
        j = k;
        k++;
    }
    // String res = "";
    // for(int i = 1; i < arr.length-1; i++){
    //     res += arr[i];
    // }
    // return res;
    StringBuilder res = new StringBuilder();
    for(int i = 1; i < arr.length-1; i++){
        res.append(arr[i]);
    }
    return res.toString();
  }

  // ~~~~~~~~~~~Input Management~~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.nextLine();
    String res = pushDominoes(str);
    System.out.println(res);
  }
}