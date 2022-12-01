Segmented Sieve

1. Generate all primes between 'a'  and 'b'(both are included).
2. Print every number in new line.
3. Allowed time Complexity : O(nlog(log n)), where n = b - a.
4. Allowed Space Complexity : O(n), where n = b -a;
Note : Please focus on constraints.

Input Format
(Input is managed for you)
22
51

Output Format
23
29
31
37
41
43
47

Constraints
1. 1 <= a <= b <= 10^9
2. b - a <= 10^5

Sample Input
22
51

Sample Output
23
29
31
37
41
43
47

// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~~User Section~~~~~~~~~~~~
  public static ArrayList<Integer> sieve(int num){
      boolean[] arr = new boolean[num + 1]; // false -> prime, true -> not prime
      
      for(int i = 2; i * i <= arr.length; i++){
          if(arr[i] == false){
              for(int j = 2 * i; j < arr.length; j += i){
                  arr[j] = true;
              }
          }
      }
      ArrayList<Integer> res = new ArrayList<>();
      
      for(int i = 2; i < arr.length; i++){
          if(arr[i] == false){
              res.add(i);
          }
      }
      return res;
  }

  public static void segmentedSieveAlgo(int a, int b) {
    // write your code here
    // 1. make a root of b
    int rootb = (int)Math.sqrt(b);
    boolean[] arr = new boolean[b - a + 1]; // false -> prime, true -> not prime
    // 2. get prime till root b using sieve
    ArrayList<Integer> primes = sieve(rootb);
    // 3. Marking using prime
    
    for(int prime : primes){
        // find starting index for marking
        int multiple =(int) Math.ceil((a * 1.0) / prime);
        if(multiple == 1){
            multiple++;
        }
        
        int indx = multiple * prime - a;
        for(int j = indx; j < arr.length; j += prime){
            arr[j] = true; // not prime
        }
    }
    
    for(int i = 0; i < arr.length; i++){
        if(arr[i] == false && i + a > 1){
            int val = i + a;
            System.out.println(val);
        }
    }
  }

  // ~~~~~~~~~~~~Input Management~~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int a = scn.nextInt();
    int b = scn.nextInt();
    segmentedSieveAlgo(a, b);
  }
}
