Median Of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, 
    return the median of the two sorted arrays.


Constraints
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= nums1[i], nums2[i] <= 10^6

Sample Input
5
3 5 7 9 12
3
4 6 14

Sample Output
6.5

// 1st code  tc=O(n+m) sc= O(n+m)

import java.util.*;
import java.io.*;

public class Main {

    public static double find(int[]a1,int[]a2) {
        //write your code here
        int len = a1.length + a2.length;
        int merged[] = new int[len];
        
        int i = 0;
        int j = 0;
        int k = 0;
        
        while(i < a1.length && j < a2.length){
            if(a1[i] < a2[j]){
                merged[k] = a1[i];
                i++;
                k++;
            }else{
                merged[k] = a2[j];
                j++;
                k++;
            }
        }
        
        while(i < a1.length){
            merged[k] = a1[i];
            i++;
            k++;
        }
        
        while(j < a2.length){
            merged[k] = a2[j];
            j++;
            k++;
        }
        
        double median = 0.0;
        int mid = merged.length/2;
        
        // odd 
        if(merged.length % 2 == 1){
            median = merged[mid];
        }
        else{
            median = (merged[mid] + merged[mid-1]) / 2.0;
        }
        return median;
    }

    public static void main(String[]args) {
        Scanner scn = new Scanner(System.in);

        //input work
        int n1 = scn.nextInt();
        int[]a = new int[n1];

        for(int i=0;i < n1;i++){
            a[i] = scn.nextInt();
        }

        int n2 = scn.nextInt();
        int[]b = new int[n2];

        for(int i=0; i < n2;i++) {
            b[i] = scn.nextInt();
        }

        double median = find(a,b);
        System.out.println(median);
    }
}



// optimise code  tc = log(n+m)  sc = O(1)

import java.util.*;
import java.io.*;

public class Main {

    public static double find(int[]a,int[]b) {
        //write your code here
        if(a.length > b.length){
            int temp[] = a;
            a = b;
            b = temp;
        }
        
        int lo = 0;
        int hi = a.length;
        int te = a.length + b.length;  // total element
        
        while(lo <= hi){
            int aleft = (lo + hi)/2;
            int bleft = (te + 1)/2 - aleft;
            
            int alm1 = (aleft == 0) ? Integer.MIN_VALUE : a[aleft-1];
            int al = (aleft==a.length) ? Integer.MAX_VALUE : a[aleft];
            int blm1 = (bleft == 0) ? Integer.MIN_VALUE : b[bleft-1];
            int bl = (bleft == b.length) ? Integer.MAX_VALUE : b[bleft];
            
            // valid segregation
            if(alm1 <= bl && blm1 <= al){
                double median = 0.0;
                
                if(te % 2 == 0){
                    int lmax = Math.max(alm1,blm1);
                    int rmin = Math.min(al,bl);
                    median = (lmax + rmin) / 2.0;
                }else{
                    int lmax = Math.max(alm1,blm1);
                    median = lmax;
                }
                
                return median;
            }
            else if(alm1 > bl){
                // there are more elements to be picked in left part 'b' array
                hi = aleft-1;
            }
            else if(blm1 > al){
                // there are more elements to be picked in left part from 'a' array
                lo = aleft + 1;
            }
        }
        return 0;
    }

    public static void main(String[]args) {
        Scanner scn = new Scanner(System.in);

        //input work
        int n1 = scn.nextInt();
        int[]a = new int[n1];

        for(int i=0;i < n1;i++){
            a[i] = scn.nextInt();
        }

        int n2 = scn.nextInt();
        int[]b = new int[n2];

        for(int i=0; i < n2;i++) {
            b[i] = scn.nextInt();
        }

        double median = find(a,b);
        System.out.println(median);
    }
}