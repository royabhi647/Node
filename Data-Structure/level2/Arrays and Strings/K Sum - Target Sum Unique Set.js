K Sum - Target Sum Unique Set

1. Given an array nums of 'n' integers and a variable 'K'.
2. You have to return an array of all the unique set [nums[a], nums[b], nums[c], nums[d] . . . K Elements] such that: 
    2.1 a, b, c, d . . . K Elements are less than 'n' and greater than 0.
    2.2 a,. b, c, d upto K different indexes are Unique.
    2.3 nums[a] + nums[b] + nums[c] + nums[d] + . . . + nums[K distinct indexes] == target.
3. You can return answer in any order.

Constraints
1. 1 <= nums.length <= 200
2. -10^9 <= nums[i] <= 10^9
3. -10^9 <= target <= 10^9
4. 1 <= K <= nums.length

Sample Input
6
-1 0 1 2 -1 -4
0
3

Sample Output
-1 -1 2 
-1 0 1 


// code


import java.util.*;

public class Main {
    public static List<List<Integer>> twoSum(int[] arr, int target, int si){
        int n = arr.length;
        List<List<Integer>> res = new ArrayList<>();
        if(n - si < 2) return res;
        
        int left = si;
        int right = n - 1;
        
        while(left < right){
            if(left != si && arr[left] == arr[left - 1]){
                left++;
                continue;
            }
            
            int sum = arr[left] + arr[right];
            if(sum == target){
                List<Integer> subRes = new ArrayList<>();
                subRes.add(arr[left]);
                subRes.add(arr[right]);
                
                res.add(subRes);
                
                left++;
                right--;
            }else if(sum > target){
                right--;
            }else{
                left++;
            }
        }
        return res;
    }
    
    public static List<List<Integer>> KSumHelper(int[] arr, int target, int k, int si){
        if(k == 2){
            return twoSum(arr, target, si);
        }
        int n = arr.length;
        
        List<List<Integer>> res = new ArrayList<>();
        if(n - si < k){
            return res;
        }
        
        for(int i = si; i <= n - k; i++){
            if( i != si && arr[i] == arr[i - 1]){
                continue;
            }
            int val1 = arr[i];
            List<List<Integer>> subRes = KSumHelper(arr, target - val1, k - 1, i + 1);
            for(List<Integer> list : subRes){
                list.add(val1);
                res.add(list);
            }
        }
        return res;
    }
    

  public static List<List<Integer>> kSum(int[] arr, int target, int k) {
    // write your code here
    Arrays.sort(arr);
    return KSumHelper(arr, target, k, 0);
  }

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    int target = scn.nextInt();
    int k = scn.nextInt();
    List<List<Integer>> res = kSum(arr, target, k);
    ArrayList<String> finalResult = new ArrayList<>();
    for (List<Integer> list : res) {
      Collections.sort(list);
      String ans = "";
      for (int val : list) {
        ans += val + " ";
      }
      finalResult.add(ans);
    }
    Collections.sort(finalResult);
    for (String str : finalResult) {
      System.out.println(str);
    }
  }

}