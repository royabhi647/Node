Heaters

1. Winter is coming! During the contest,
 your first job is to design a standard heater with a fixed warm radius to warm all the houses.
2. Every house can be warmed, as long as the house is within the heater's warm radius range. 
3. Given the positions of houses and heaters on a horizontal line,
 return the minimum radius standard of heaters so that those heaters could cover all houses.
4. Notice that all the heaters follow your radius standard, and the warm radius will the same.

Constraints
1 <= houses.length, heaters.length <= 3 * 10^4
1 <= houses[i], heaters[i] <= 10^9

Sample Input
4
1 2 5 7
2
1 4

Sample Output
3


// code   (using pair class)

import java.util.*;
import java.io.*;

public class Main {
    public static class Pair{
        int js = -1;  // just smaller
        int jl = -1;  // just larger
        
        Pair(){  // empty constructor
            
        }
        
        Pair(int js,int jl){
            this.js = js;
            this.jl = jl;
        }
    }
  public static int findRadius(int[]houses, int[]heaters) {
    //write your code here
    Arrays.sort(heaters);
    int ans = 0;
    
    for(int i = 0; i < houses.length; i++){
        int hp = houses[i];
        Pair p = binarySearch(hp,heaters);
        
        int d1 = (p.js == -1) ? Integer.MAX_VALUE : hp - p.js;
        int d2 = (p.jl == -1) ? Integer.MAX_VALUE : p.jl - hp;
        
        int minD = Math.min(d1,d2);
        
        if(minD > ans){
            ans = minD;
        }
    }
    return ans;
  }
  
  public static Pair binarySearch(int key, int arr[]){
      int lo = 0;
      int hi = arr.length-1;
      Pair p = new Pair();
      
      while(lo <= hi){
          int mid = (lo + hi)/2;
          
          if(arr[mid] == key){
              p.js = arr[mid];
              p.jl = arr[mid];
              break;
          }
          else if(arr[mid] < key){
              p.js = arr[mid];
              lo = mid+1;
          }else{
              p.jl = arr[mid];
              hi = mid-1;
          }
      }
      return p;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[]houses = new int[n];

    for (int i = 0; i < n; i++) {
      houses[i] = scn.nextInt();
    }

    int m = scn.nextInt();
    int[]heaters = new int[m];

    for (int i = 0; i < m; i++) {
      heaters[i] = scn.nextInt();
    }

    System.out.println(findRadius(houses, heaters));
  }
}