Arrange Buildings

1. You are given a number n, which represents the length of a road. The road has n plots on it's each side.
2. The road is to be so planned that there should not be consecutive buildings on either side of the road.
3. You are required to find and print the number of ways in which the buildings can be built on both side of roads.

Constraints
0 < n <= 45

Sample Input
6

Sample Output
441


// code

import java.io.*;
import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    // write your code here
    Scanner scn = new Scanner(System.in);
    long n = scn.nextInt();
    
    long old_building = 1;
    long old_space = 1;
    
    for(int i = 2; i <= n; i++){
        long new_building = old_space;
        long new_space = old_space + old_building;
        
        old_space = new_space;
        old_building = new_building;
    }
    
    long total = old_space + old_building;
    total = total * total;
    
    System.out.println(total);
 }

}