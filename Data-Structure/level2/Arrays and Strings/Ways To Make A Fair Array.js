Ways To Make A Fair Array

You are given an integer array nums. You can choose exactly one index (0-indexed)
 and remove the element. Notice that the index of the elements may change after the removal.

 For example, if nums = [6,1,7,4,1]:

Choosing to remove index 1 results in nums = [6,7,4,1].
Choosing to remove index 2 results in nums = [6,1,4,1].
Choosing to remove index 4 results in nums = [6,1,7,4].

An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.

Return the number of indices that you could choose such that after the removal, nums is fair.


Example 1:

Input: nums = [2,1,6,4]
Output: 1
Explanation:
Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
There is 1 index that you can remove to make nums fair.

Example 2:

Input: nums = [1,1,1]
Output: 3
Explanation: You can remove any index and the remaining array is fair.

Example 3:

Input: nums = [1,2,3]
Output: 0
Explanation: You cannot make a fair array after removing any index.

Constraints:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^4



// code


class Solution {
    public int waysToMakeFair(int[] nums) {
        int n = nums.length;
        // store sum of odd index and even index in odd array and even array
        int odd[] = new int[n];
        int even[] = new int[n];

        int oddsum = 0;
        int evensum = 0;

        for(int i = 0; i < n; i++){
            if(i % 2 == 0){
                evensum += nums[i];
            }else{
                oddsum += nums[i];
            }
            odd[i] = oddsum;
            even[i] = evensum;
        }
        int ans = 0;
        for(int i = 0; i < n; i++){
            // only remove 0 index so next index will make odd
            if(i == 0){
                // new odd sum
                int nos = even[n - 1] - nums[0];
                // new even sun
                int nes = odd[n - 1];

                if(nos == nes) ans++;
                continue;
            }
            // if index odd is remove , before odd index will same and after will change odd->even
            int nes = even[i - 1] + odd[n - 1] - odd[i];
            int nos = odd[i - 1] + even[n - 1] - even[i];

            if(nes == nos){
                ans++;
            } 
        }
        return ans;
    }
}