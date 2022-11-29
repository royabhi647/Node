Majority Elements - I I

1. Given an integer array of size 'n'.
2. Find all elements that appear more than n / 3 times and return it in an arraylist.
3. Note : solve the problem in linear time and in O(1) space.

Constraints
1. 1 <= arr.length <= 10^4
2. -10 ^ 9 <= arr[i] <= 10^9

Sample Input
3
3 2 3

Sample Output
[3]

// code

import java.util.*;

public class Main {
     public static boolean isGreaterthanNb3(int nums[], int val){
        int count = 0;
        for(int ele : nums){
            if(ele == val){
                count++;
            }
        }
        return count > nums.length / 3;
    }

    // ~~~~~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~~~~~
    public static ArrayList<Integer> majorityElement2(int[] arr) {
        // write your code here
         int val1 = arr[0];
        int count1 = 1;

        int val2 = arr[0];  // assign any random value so count2 = 0
        int count2 = 0;

        for(int i = 1; i < arr.length; i++){
            if(arr[i] == val1){
                count1++;
            }else if(arr[i] == val2){
                count2++;
            }else{
                if(count1 == 0){
                    val1 = arr[i];
                    count1 = 1;
                }else if(count2 == 0){
                    val2 = arr[i];
                    count2 = 1;
                }else{
                    count1--;
                    count2--;
                }
            }
        }
        // val1 and val2 potential candidate
        ArrayList<Integer> res = new ArrayList<>();

        if(isGreaterthanNb3(arr,val1) == true ){
            res.add(val1);
        }
        if(val1 != val2 && isGreaterthanNb3(arr,val2) == true ){
            res.add(val2);
        }
        return res;
    }

    // ~~~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        ArrayList<Integer> res = majorityElement2(arr);
        System.out.println(res);
    }
}