Number Of Sub-arrays With Odd Sum
https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/

Given an array of integers arr, return the number of subarrays with an odd sum.

Since the answer can be very large, return it modulo 10^9 + 7.


Example 1:

Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

Example 2:

Input: arr = [2,4,6]
Output: 0
Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
All sub-arrays sum are [2,6,12,4,10,6].
All sub-arrays have even sum and the answer is 0.

Example 3:

Input: arr = [1,2,3,4,5,6,7]
Output: 16
 

Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 100


// Brute Force Code gives Time Limit Exceeded (TLE)
// generate all subarrays then work on it

// TLE code   tc = O(n^2)

class Solution {
    public int numOfSubarrays(int[] arr) {
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        int mod = 1000000007;
        
        // Generate all subarrays and store in ans arraylist of arraylist
        for(int i = 0; i < arr.length; i++){
            for(int j = i; j < arr.length; j++){
                ArrayList<Integer> curr = new ArrayList<>();
                for(int k = i; k <=j; k++){
                    curr.add(arr[k]);
                }
                ans.add(curr);
            }
        }
        ArrayList<Integer> odd = new ArrayList<>();
        for(int i = 0; i < ans.size(); i++){
            int sum = 0;
            for(int j = 0; j < ans.get(i).size(); j++){
                sum += ans.get(i).get(j);
            }
            sum = sum % mod;
            if(sum % 2 != 0){
                odd.add(sum);
            }
        }
        // System.out.println(odd);
        return odd.size();
    }
}


// optimise code

class Solution {
    public int numOfSubarrays(int[] arr) {
        long ans = 0;

        int even = 0;
        int odd = 0;
        int sum = 0;

        for(int val : arr){
            sum += val;
            if(sum % 2 == 0){
                ans += odd;
                even++;
            }else{
                ans += 1 + even;
                odd++;
            }
        }
        return (int)(ans % 1000000007);
    }
}