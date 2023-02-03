Ishaan And Sticks

Ishaan has a craving for sticks. He has N sticks. He observes that some of his sticks are of the same length,
 and thus he can make squares out of those.

He wants to know how big a square he can make using those sticks as sides.
 Since the number of sticks is large, he can't do that manually.
  Can you tell him the maximum area of the biggest square that can be formed?

Also, calculate how many such squares can be made using the sticks.


Constraints
 1 <= N <= 10^5
1 <= arr[i] <= 10^3

Sample Input
10
3 3 4 4 3 4 3 1 4 2

Sample Output
16 1



// code

import java.util.*;
import java.io.*;

public class Main {

  public static ArrayList<Integer>  solve(int[]arr) {
    HashMap<Integer,Integer> map = new HashMap<>();
    
    for(int ele : arr){
        if(map.containsKey(ele) == true){
            int nf = map.get(ele) + 1;
            map.put(ele,nf);
        }else{
            map.put(ele,1);
        }
    }
    
    int max_area = 0;
    int sq = 0;
    
    for(int key : map.keySet()){
        int freq = map.get(key);
        
        if(freq >= 4){
            int area = key * key;
            
            if(area > max_area){
                max_area = area;
                sq = freq / 4;
            }
        }
    }
    
    ArrayList<Integer> ans = new ArrayList<>();
    if(max_area == 0){
        ans.add(-1);
    }else{
        ans.add(max_area);
        ans.add(sq);
    }
    
    return ans;
  }

  public static void main(String[]args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    ArrayList<Integer>ans = solve(arr);

    for (int val : ans) {
      System.out.print(val + " ");
    }
  }
}