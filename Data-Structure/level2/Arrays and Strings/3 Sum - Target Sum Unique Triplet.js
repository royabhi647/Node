3 Sum - Target Sum Unique Triplet

1. Given an integer array 'nums', and a 'target', return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k.
2. Another thing is nums[i] + nums[j] + nums[k] == target.
3. Notice that the solution set must not contain duplicate triplets.

Constraints
1. 0 <= nums.length <= 3000
2. -10^5 <= nums[i] <= 10^5

Sample Input
6
-1 0 1 2 -1 -4
0

Sample Output
-1 -1 2 
-1 0 1 


// code

import java.util.*;

public class Main {

  // ~~~~~~~~~~~~User Section~~~~~~~~~~~~
  public static List<List<Integer>> twoSum(int[] arr, int si, int ei, int target){
      int left = si;
      int right = ei;
      List<List<Integer>> res = new ArrayList<>();
      while(left < right){
          if(left != si && arr[left] == arr[left - 1]){
              left++;
              continue;
          }
          int sum = arr[left] + arr[right];
          
          if(sum == target){
              List<Integer> subres = new ArrayList<>();
              subres.add(arr[left]);
              subres.add(arr[right]);
              res.add(subres);
              
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
  public static List<List<Integer>> threeSum(int[] nums, int target) {
    // write your code here
    List<List<Integer>> res = new ArrayList<>();
    int n = nums.length;
    if(n < 3){
        return res;
    }
    
    Arrays.sort(nums);
    
    for(int i = 0; i <= n - 3; i++){
        if(i != 0 && nums[i] == nums[i - 1]){
            continue;
        }
        int val1 = nums[i];
        int targ = target - val1;
        List<List<Integer>> subRes = twoSum(nums, i + 1, n - 1, targ);
        
        for(List<Integer> list : subRes){
            list.add(val1);
            res.add(list);
        }
    }
    return res;
  }

  // ~~~~~~~~~~Input Management~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
      arr[i] = scn.nextInt();
    }
    int target = scn.nextInt();
    List<List<Integer>> res = threeSum(arr, target);
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