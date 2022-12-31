Find K Closest Elements

1. Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. 
    The result should also be sorted in ascending order.
2. An integer a is closer to x than an integer b if:
        |a - x| < |b - x|, or
        |a - x| == |b - x| and a < b

Constraints
        1 <= k <= arr.length
        1 <= arr.length <= 10^4
        arr is sorted in ascending order.
        -10^4 <= arr[i], x <= 10^4
Sample Input
        6
        10 20 30 40 50 60
        3 
        45
Sample Output
        30 40 50


// 1st code  tc=(nlogk) + (klogk) = nlogk

class Solution {
    public static class Pair implements Comparable<Pair>{
        int val;
        int gap;
        
        Pair(int val, int gap){
            this.val = val;
            this.gap = gap;
        }
        
        public int compareTo(Pair o){
            if(this.gap == o.gap){
                return this.val - o.val;
            }else{
                return this.gap - o.gap;
            }
        }
    }
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        ArrayList<Integer> list = new ArrayList<>();
        // max type
        PriorityQueue<Pair> pq = new PriorityQueue<>((Collections.reverseOrder()));
        
        for(int i = 0; i < arr.length; i++){
            if(pq.size() < k){
                pq.add(new Pair(arr[i],Math.abs(arr[i] - x)));
            }else{
                if(pq.peek().gap > Math.abs(arr[i] - x)){
                    pq.remove();
                    pq.add(new Pair(arr[i],Math.abs(arr[i]-x)));
                }
            }
        }
        while(pq.size() > 0){
            Pair rem = pq.remove();
            list.add(rem.val);
        }
        Collections.sort(list);
        return list;
    }
}


// optimise code   tc = (logn + klogk)

import java.util.*;
import java.io.*;

public class Main {

    /*find 'k' closest element to 'x' and return answer list*/
    /*elements in answer list should be in ascending order*/
    public static ArrayList<Integer> findClosest(int[]arr,int k,int x) {
        //write your code here
        
        // find x
        int low = 0;
        int high = arr.length - 1;
        int mid = 0;
        
        while(low <= high){
            mid = (low + high) / 2;
            
            if(arr[mid] == x){
                break;
            }else if(arr[mid] < x){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
        
        int left = mid - 1;
        int right = mid;
        
        ArrayList<Integer> list = new ArrayList<>();
        
        while(left >= 0 && right < arr.length && k > 0){
            if(Math.abs(arr[left] - x) < Math.abs(arr[right] - x)){
                list.add(arr[left]);
                left--;
            }else{
                list.add(arr[right]);
                right++;
            }
            k--;
        }
        
        while(k > 0 && left >= 0){
            list.add(arr[left]);
            left--;
            k--;
        }
        
        while(k > 0 && right < arr.length){
            list.add(arr[right]);
            right++;
            k--;
        }
        
        Collections.sort(list);
        return list;
    }

    public static void main(String[]args) {

        //input work
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[]arr = new int[n];

        for(int i=0; i < n;i++) {
            arr[i] = scn.nextInt();
        }

        int k = scn.nextInt();
        int x = scn.nextInt();

        ArrayList<Integer>ans = findClosest(arr,k,x);

        for(int val : ans) {
            System.out.print(val + " ");
        }

    }
}