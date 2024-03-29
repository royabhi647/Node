Sum Of Subsequence Widths

The width of a sequence is the difference between the maximum and minimum elements in the sequence.

Given an array of integers nums, return the sum of the widths of all the non-empty subsequences of nums.
 Since the answer may be very large, return it modulo 109 + 7.

 A subsequence is a sequence that can be derived from an array by deleting some or no elements 
 without changing the order of the remaining elements. 
 For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105

Example 1:

Input: nums = [2,1,3]
Output: 6
Explanation: The subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
The sum of these widths is 6.

// code


class Solution {
    public int sumSubseqWidths(int[] nums) {
        Arrays.sort(nums);
        long ans = 0;
        long mod = 1000000007;
        int n = nums.length;
        long[] pow = new long[n];
        pow[0] = 1;
        // calculate power of all index
        for(int i = 1; i < n; i++){
            pow[i] = (pow[i - 1] * 2) % mod;
        }
        // every element treated for minimum and maximum both eg [9,10,12,13,15] element 12 is max for 9,10 and min for 13,15
        for(int i = 0; i < n; i++){
            ans = (ans + nums[i] * (pow[i] - pow[n - i - 1])) % mod;
        }
        return (int)ans;
    }
}