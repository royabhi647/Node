Shortest Unsorted Continuous Subarray


Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.


Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:

Input: nums = [1,2,3,4]
Output: 0

Example 3:

Input: nums = [1]
Output: 0

Constraints:

1 <= nums.length <= 10^4
-10^5 <= nums[i] <= 10^5


Follow up: Can you solve it in O(n) time complexity?


// code

class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int end = -1;
        int max = nums[0];

        // check nums[i] is smaller than max at the end 
        for(int i = 1; i < nums.length; i++){
            if(max > nums[i]){
                end = i;
            }else{
                max = nums[i];
            }
        }

        int st = 0;
        int min = nums[nums.length - 1];

        // check nums[i] is greater than min from end to start 
        for(int i = nums.length - 2; i >= 0; i--){
            if(nums[i] > min){
                st = i;
            }else{
                min = nums[i];
            }
        }
        return end - st + 1;
    }
}