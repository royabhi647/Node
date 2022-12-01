Sieve Of Eratosthenes

1. Given an Integer 'n'.
2. Print all primes from 2 to 'n'.
3. Portal is not forced you, but try to submit the problem in less than n.root(n) complexity.

Input Format
n = 10

Output Format
2 3 5 7

Constraints
2 <= n <= 10^5

Sample Input
10

Sample Output
2 3 5 7 


// code tc = O(nlog(log(n)))

import java.util.*;

public class Main {
    
    // ~~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~
    public static void printPrimeUsingSieve(int n) {
        // write your code here
        boolean[] isprime = new boolean[n + 1];
        
        Arrays.fill(isprime, true);
        
        for(int i = 2; i * i <= isprime.length; i++){
            if(isprime[i] == true){
                // making multiple not prime
                for(int j = i + i; j < isprime.length; j += i){
                    isprime[j] = false;  // not prime
                }
            }
        }
        // print all prime till n
        for(int i = 2; i < isprime.length; i++){
            if(isprime[i] == true){
                System.out.print(i + " ");
            }
        }
    }

    // ~~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~
    public static void main(String[] args) {   
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        printPrimeUsingSieve(n);
    }
}