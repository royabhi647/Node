Capacity To Ship Packages Within D Days

1. A conveyor belt has packages that must be shipped from one port to another within D days.
2. The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages 
    on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight
         capacity of the ship.
3. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt 
    being shipped within D days.


Constraints
1 <= days <= weights.length <= 5 * 10^4
1 <= weights[i] <= 500

Sample Input
10
2 3 4 1 5 6 7 9 8 10
5

Sample Output
15

// code

import java.util.*;
import java.io.*;

public class Main {

  public static int shipWithinDays(int[]wt, int days) {
    //write your code here
    int max = 0;
    int sum = 0;
    
    for(int val : wt){
        sum += val;
        max = Math.max(max,val);
    }
    
    if(wt.length == days){
        return max;
    }
    
    int lo = max;
    int hi = sum;
    int ans = 0;
    
    while(lo <= hi){
        int mid = lo + (hi - lo)/2;
        
        if(isPossible(wt,mid,days) == true){
            ans = mid;
            hi = mid - 1;
        }else{
            lo = mid + 1;
        }
    }
    return ans;
  }
  
  public static boolean isPossible(int wt[],int mid, int days){
      int d = 1;
      int sum = 0;
      
      for(int i = 0; i < wt.length; i++){
          sum += wt[i];
          
          if(sum > mid){
              d++;
              sum = wt[i];
          }
      }
      return d <= days;
  }

  public static void main(String[]args) {
    //input work
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[]arr = new int[n];

    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }

    int days = scn.nextInt();

    int ans = shipWithinDays(arr, days);
    System.out.println(ans);
  }
}