Merge Intervals

1. Question will be provided with "n" Intervals. An Interval is defined as (sp,ep) i.e. sp --> 
starting point &  ep --> ending point of an Interval (sp/ep are inclusive). Some Intervals may or maynot 
overlap eachother.

2. Intervals[i] = [startingPoint,endingPoint]
Task is to "Merge all Overlapping Intervals".


Example 1 : 
    Input : [[1,3],[2,4],[6,8],[10,14],[7,9]]
    Output : [[1,4],[6,9],[10,14]]

Example 2 : 
    Input : [[1,3],[3,15],[6,8],[10,14],[7,9]]
    Output : [[1,3][3,15]]

Example 3 : 
    Input : [[1,3],[5,8],[10,19],[15,20],[9,9]]
    Output : [[1,3],[5,8],[9,9],[10,20]]

Note : If ending time of interval I1 is same as starting time of I2 then both will 
consider as separate Intervals.

Constraints
1. sp(Starting point) <= ep(Ending Point)
2. input is unsorted
3.  0 < n(Number of Intervals) <= 10^4

Sample Input
5
1 3
8 10
7 8
9 15
2 6

Sample Output
[[1, 6][7, 8][8, 15]]


// code


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;


public class Main{
    public static int[][] mergeIntervals(int intervals[][]){
        // write your code here
         Arrays.sort(intervals,(a,b)->Integer.compare(a[0],b[0]));  // sorted on the basis of starting point

        ArrayList<int[]> list = new ArrayList<>();

        for(int[] interval : intervals){
            if(list.size()==0){
                list.add(interval);
            }else{
                int prevInterval[]=list.get(list.size()-1);
                if(interval[0]<prevInterval[1]){
                    prevInterval[1]=Math.max(prevInterval[1],interval[1]);
                }else{
                    list.add(interval);
                }
            }
        }
        return list.toArray(new int[list.size()][]);
    }
    public static void main(String args[]){
        Scanner scn = new Scanner(System.in);

        // Input Format
        int n = scn.nextInt();
        int input[][] = new int[n][2];

        for(int i = 0 ; i <  n ; i++){
            int sp = scn.nextInt();
            int ep = scn.nextInt();

            input[i][0] = sp;
            input[i][1] = ep;
        }

        // Output Format
        int [][]output = mergeIntervals(input);

        System.out.print("[");
        for(int arr[] : output){
            System.out.print(Arrays.toString(arr));
        }
        System.out.println("]");
    }
}