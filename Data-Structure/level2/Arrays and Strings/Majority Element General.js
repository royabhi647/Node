Majority Element General

1. Given an array of size 'N' and an element K.
2. Task is to find all elements that appears more than N/K times in array.
3. Return these elements in an ArrayList in sorted order.

Input Format
N = 8
arr[] = [3, 1, 2, 2, 1, 2, 3, 3]
k = 4
Note : Input is managed for you.

Output Format
[2, 3]
Note : Output is managed for you.

Constraints
1 <= N <= 10^4
1 <= a[i] <= 10^6
1 <= k <= N

Sample Input
8
3 1 2 2 1 2 3 3
4

Sample Output
[2, 3]

// code

import java.util.*;

public class Main {
    
    //~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~~
    public static ArrayList<Integer> majorityElement(int[] arr, int k) {
        // write yout code here
        HashMap<Integer,Integer> map = new HashMap<>();
        // step1-> fill frequency map
        for(int i = 0; i < arr.length; i++){
            if(map.containsKey(arr[i]) == true){
                map.put(arr[i],map.get(arr[i]) + 1);
            }else{
                map.put(arr[i],1);
            }
        }
        ArrayList<Integer> res = new ArrayList<>();
        // step2-> travel in hashmap key and fill in res
        for(int key : map.keySet()){
            if(map.get(key) > arr.length/k){
                res.add(key);
            }
        }
        // step3-> sort the res
        Collections.sort(res);
        return res;
    }
    
    //~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }
        int k = scn.nextInt();
        ArrayList<Integer> res = majorityElement(arr, k);
        System.out.println(res);
    }
}