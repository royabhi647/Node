Product Of Array Except Itself Without Using Division Operator

1. Given an integer array of size 'n'.
2. Return an array answer such that answer[i] is equal to the product of all the elements of arr except arr[i].
3. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Constraints
1. 2 <= arr.length <= 10^5
2. -30 <= arr[i] <= 30
3. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Sample Input
4
1 2 3 4

Sample Output
24 12 8 6

// code

import java.util.*;

public class Main {
    
    //~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~
    public static int[] productExceptSelf(int[] arr) {
        // write your code here
        // step 1 -> create right array
        int right[] = new int[arr.length];
        int product = 1;
        for(int i = arr.length - 1; i >= 0; i--){
            product *= arr[i];
            right[i] = product;
        }
        // step 2-> make result with maintaining of left product
        product = 1;
        int result[] = new int[arr.length];
        for(int i = 0; i < arr.length - 1; i++){
            int lp = product;
            int rp = right[i + 1];
            
            result[i] = lp * rp;
            
            product *= arr[i];
        }
        // fill result of last index 
        result[arr.length - 1] = product;
        
        return result;
    }

    //~~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }
        int[] res = productExceptSelf(arr);
        for(int i = 0; i < arr.length; i++) {
            System.out.print(res[i] + " ");
        }
    }
}