Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/description/

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


// code


class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        if(nums.length == 0){
            return new int[k];
        }

        Map<Integer,Integer> map = new HashMap<>();
        for(int num : nums){
            map.put(num, map.getOrDefault(num,0)+1);
        }
        // on the basis of value's frequency of HashMap'
        PriorityQueue<Integer> pQueue = new PriorityQueue<>((a,b) -> map.get(a) - map.get(b)); 

        for(int n : map.keySet()){
            pQueue.add(n);
            if(pQueue.size() > k){
                pQueue.poll();
            }
        }

        int result[] = new int[k];
        int i = 0;
        while(!pQueue.isEmpty()){
            int num = pQueue.poll();
            result[i++] = num;
            // i++;
        }
        return result;
    }
}



// pepcodeing code

import java.util.*;
 
 public class Main {
 
 	 public static class pair implements Comparable<pair> {
 	 	 public int val;
 	 	 public int count;
 
 	 	 public pair(int val, int count) {
 	 	 	 this.val = val;
 	 	 	 this.count = count;
 	 	 }
 
 	 	 @Override
 	 	 public int compareTo(pair o) {
 	 	 	 // TODO Auto-generated method stub
 	 	 	 return o.count - this.count;
 	 	 }
 
 	 }
 
 	 public static ArrayList<Integer> topKFrequent(int n, int[] nums, int k) {
 
 	 	 ArrayList<Integer> ans = new ArrayList<>();
 
 	 	 HashMap<Integer, Integer> map = new HashMap<>();
 	 	 PriorityQueue<pair> pq = new PriorityQueue<>();
 
 	 	 for (int i = 0; i < nums.length; i++) {
 	 	 	 if (map.containsKey(nums[i])) {
 	 	 	 	 map.put(nums[i], map.get(nums[i]) + 1);
 	 	 	 } else {
 	 	 	 	 map.put(nums[i], 1);
 	 	 	 }
 	 	 }
 
 	 	 for (int val : map.keySet()) {
 	 	 	 pq.add(new pair(val, map.get(val)));
 	 	 }
 
 	 	 for (int i = 0; i < k; i++) {
 	 	 	 ans.add(pq.remove().val);
 	 	 }
 
 	 	 return ans;
 
 	 }
 
 	 public static void main(String[] args) {
 
 	 	 Scanner s = new Scanner(System.in);
 	 	 int n = s.nextInt();
 	 	 int[] ar = new int[n];
 	 	 for (int i = 0; i < ar.length; i++) {
 	 	 	 ar[i] = s.nextInt();
 	 	 }
 	 	 int k = s.nextInt();
 	 	 ArrayList<Integer> res = topKFrequent(n, ar, k);
 	 	 Collections.sort(res);
 	 	 System.out.println(res);
 	 }
 
 }