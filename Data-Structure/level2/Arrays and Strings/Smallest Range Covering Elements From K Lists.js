Smallest Range Covering Elements From K Lists

You have k lists of sorted integers in non-decreasing order. 
Find the smallest range that includes at least one number from each of the k lists.

We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

Example 1:

Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].

Constraints:

nums.length == k
1 <= k <= 3500
1 <= nums[i].length <= 50
-105 <= nums[i][j] <= 105
nums[i] is sorted in non-decreasing order.


// code

class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {
        int[] res = {-100000, 100000};
        int k = nums.size();
        int max = Integer.MIN_VALUE;
        // min priority queue
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->(a[0]-b[0]));
        for(int i=0;i<k;i++){
            // mol -> minimum of list
            int mol = nums.get(i).get(0);
            // tba -> to be added
            int[] tba = {mol, 0, i};
            // 0th -> minimum element of the list
            // 1st -> index of element from the list
            // 2nd -> index of list in nums

            max = Math.max(max,mol);
            // add every array of 1st element at one time in pq
            pq.add(tba);
        }
        while(true){
            int[] min = pq.poll();
            if(res[1]-res[0]>max-min[0]){
                res[0]=min[0];
                res[1]=max;
            }
            min[1]++;
            // cl -> current list
            List<Integer> cl = nums.get(min[2]);
            if(min[1]==cl.size()){
                break;
            }else{
                min[0]=cl.get(min[1]);
                max=Math.max(max,cl.get(min[1]));
                pq.add(min);
            }
        }
        return res;
    }
}