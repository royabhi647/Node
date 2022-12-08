Consecutive Numbers Sum

1. Given an integer n.
2. Return the number of ways you can write n as the sum of consecutive positive integers.

Input Format
1. n = 5
2. n = 9
3. n = 15

Output Format
1). 2
Explanation: 5 = 2 + 3
2). 3
Explanation: 9 = 4 + 5 = 2 + 3 + 4
3). 4
Explanation: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

Constraints
1. 1 <= n <= 10^9

Sample Input
5

Sample Output
2


// code

class Solution {
    public int consecutiveNumbersSum(int n) {
        // k = 1 ->15 true
        // k = 2 ->7+8=15 true
        // k = 3 -> 4+5+6=15 true
        // k = 4 -> false
        // k = 5 -> 1+2+3+4+5=15 true
        // |
        // |
        // Kupperlimit ??
        // x + x+1 + x+2 + x+3 + ----- + x+(k-1) = N
        //<---------k terms-------------->
        // (x + x + x ---+ k times) + (0 + 1 + 2 + 3 + --- + k-1) = N
        // kx + (k(k-1)/2) = N    [n(n+1)/2]
        // x = [n - (k(k - 1)/2)] / k
        // if integer is +ve x > 0
        // [n - (k(k - 1)/2)] > 0
        // 2N > k(k - 1)  it is condition , equality of k in terms of N
        // condition-> 2n > k(k-1)

        // for which k, answer is valid or not 
        // x = [n - (k(k - 1)/2)] / k
        // x is valid when x is an integer
        // numerator = N - (k(k-1)/2)
        // denominator = k

        // Numerator % k == 0 , x is valid add in count

        int count = 0;
        for(int k = 1; 2 * n > k * (k - 1); k++){
            int numerator = n - (k * (k - 1) / 2);

            if(numerator % k == 0){
                count++;
            }
        }
        return count;
    }
}