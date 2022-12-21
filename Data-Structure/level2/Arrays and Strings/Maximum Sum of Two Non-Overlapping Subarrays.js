1031. Maximum Sum of Two Non-Overlapping Subarrays

Given an integer array nums and two integers firstLen and secondLen, 
return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.

The array with length firstLen could occur before or after the array with length secondLen,
 but they have to be non-overlapping.

 A subarray is a contiguous part of an array.

 Example 1:

Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.

Example 2:

Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
Output: 29
Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.



// dp code


class Solution {
    public int maxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
        int n = nums.length;
        // firstLen size of elements occur before secondLen
        int dp1[] = new int[n];
        int dp2[] = new int[n];
        int sum = 0;
        // dp1[i]-> max sum subarray of size firstLen till ith index
        for(int i=0;i<n;i++){
            if(i<firstLen){
                sum+=nums[i];
                dp1[i]=sum;
            }else{
                sum+=nums[i]-nums[i-firstLen];
                dp1[i] = Math.max(dp1[i-1],sum);
            }
        }
        // dp2[i] -> max sum subarray of size secondLen , from ith index to last index
        sum=0;
        for(int i=n-1;i>=0;i--){
            if(i+secondLen>=n){
                sum+=nums[i];
                dp2[i] = sum;
            }else{
                sum+=nums[i]-nums[i+secondLen];
                dp2[i] = Math.max(dp2[i+1],sum);
            }
        }
        int ans = 0;
        for(int i=firstLen-1;i<n-secondLen;i++){
            ans = Math.max(ans,dp1[i]+dp2[i+1]);
        }
        
        // firstLen size of elements occur after secondLen
        dp1 = new int[n];
        dp2 = new int[n];
        sum = 0;
        for(int i=0;i<n;i++){
            if(i<secondLen){
                sum+=nums[i];
                dp1[i]=sum;
            }else{
                sum+=nums[i]-nums[i-secondLen];
                dp1[i] = Math.max(dp1[i-1],sum);
            }
        }
        sum=0;
        for(int i=n-1;i>=0;i--){
            if(i+firstLen>=n){
                sum+=nums[i];
                dp2[i] = sum;
            }else{
                sum+=nums[i]-nums[i+firstLen];
                dp2[i] = Math.max(dp2[i+1],sum);
            }
        }

        for(int i=secondLen-1;i<n-firstLen;i++){
            ans = Math.max(ans,dp1[i]+dp2[i+1]);
        }
        return ans;
    }
}