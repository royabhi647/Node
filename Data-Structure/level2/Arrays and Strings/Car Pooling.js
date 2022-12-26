Car Pooling

1. A car moving in east direction has to make some pickups/drops(passengers) on the way.
2. Car has a limited capacity to carry passengers.
3. Given a List of Trips i.e. trip[i] = [pickup_location,drop_Location,num_passengers] , 
find out whether it is possible to make all trips on the way or not.

NOTE: Car will only move in east directions i.e. no turn-around trip is possible.


Task is to "Find out whether it is possible to make all trips on the way[YES] or not[NO]".


Example 1 : 
    trip[] = [[1,5,2],[4,8,1],[11,15,3]]
    passengerCapacity : 3
    output : YES
    

Example 2 : 
    trip[] : [[1,3,5]]
    passengerCapacity : 4;
    output : NO

Example 3 :
    trip[] : []
    passengerCapacity : 2
    output : YES

Example 4 : 
    trip[] = [[1,5,2],[4,8,2],[11,15,3]]
    passengerCapacity : 3
    output : NO


// pepcoding code

import java.util.Scanner;

public class Main {
  public static boolean carPooling(int trips[][], int cap) {
    // write your code here
    // calculate last drop location of passenger
    int lastDropLocation = -1;
    for(int trip[] : trips){
        lastDropLocation = Math.max(lastDropLocation, trip[1]);
    }
    
    int highway[] = new int[lastDropLocation + 1];
    
    for(int trip[] : trips){
        highway[trip[0]] += trip[2]; // passenger sit
        highway[trip[1]] -= trip[2]; // passenger drop
    }
    
    for(int i = 1; i <= lastDropLocation; i++){
        highway[i] += highway[i - 1];
        if(highway[i] > cap){
            return false;
        }
    }
    return true;
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int trips[][] = new int[n][3];
    for (int i = 0 ; i < n ; i++) {
      trips[i][0] = scn.nextInt();
      trips[i][1] = scn.nextInt();
      trips[i][2] = scn.nextInt();
    }
    int cap = scn.nextInt();

    if (carPooling(trips, cap)) {
      System.out.println("YES");
    } else {
      System.out.println("NO");
    }

  }
}




// Leetcode code

class Solution {
    public boolean carPooling(int[][] trips, int capacity) {
        int lastDropLocation = -1;
        for(int trip[] : trips){
            lastDropLocation = Math.max(lastDropLocation, trip[2]);
        }

        int location[] = new int[lastDropLocation + 1];
        for(int trip[] : trips){
            // add people i.e trip[0] at start location i.e trip[1] 
            location[trip[1]] += trip[0]; 
            // remove people i.e trip[0] at end location i.e trip[2]   
            location[trip[2]] += -trip[0];
        }

        for(int i = 0; i < location.length; i++){
            if(i==0){
                if(location[i]>capacity) return false;
            }else{
                location[i] = location[i-1] + location[i];
                if(location[i]>capacity){
                
                    return false;
                }
            }
            
        }
        return true;
    }
}