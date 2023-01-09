Koko Eating Bananas

1. Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
    The guards have gone and will come back in h hours.
2. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas 
    and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead 
    and will not eat any more bananas during this hour.
3. Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
4. Return the minimum integer k such that she can eat all the bananas within h hours.

Constraints
1 <= piles.length <= 10^4
piles.length <= h <= 10^9
1 <= piles[i] <= 10^9

Sample Input
4
3 6 7 11
8

Sample Output
4

// code

import java.util.*;
import java.io.*;

public class Main {
    public static int minEatingSpeed(int[]piles,int h) {
        //write your code here
        int max = Integer.MIN_VALUE;
        
        for(int val : piles){
            max = Math.max(val,max);
        }
        
        if(h == piles.length){
            return max;
        }
        
        int lo = 0;
        int hi = max;
        int speed = Integer.MAX_VALUE;
        
        while(lo <= hi){
            int sp = lo + (hi - lo)/2;
            
            if(isPossible(piles,h,sp) == true){
                speed = sp;
                hi = sp-1;
            }else{
                lo = sp+1;
            }
        }
        return speed;
    }
    
    public static boolean isPossible(int[]piles, int h, int sp){
        int time = 0;
        
        for(int i=0; i < piles.length; i++){
            time += (int)Math.ceil(piles[i]*1.0/sp);
        }
        
        return time <= h;
    }

    public static void main(String[]args) {
        Scanner scn = new Scanner(System.in);
        //input work
        int n = scn.nextInt();
        int[]piles = new int[n];

        for(int i=0 ; i < n ; i++) {
            piles[i] = scn.nextInt();
        }

        int h = scn.nextInt();

        int speed = minEatingSpeed(piles,h);
        System.out.println(speed);
    }
}