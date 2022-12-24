Meeting Rooms I

1. Question will be provided with "n" meeting-schedules.
 A meeting-schedule is defined as (sp,ep) i.e. sp --> starting point
  &  ep --> ending point of an meeting. Some meeting-schedules may or maynot overlap each other.

2. MeetingIntervals[i] = [startingPointi,endingPointi]
3. A meeting-schedule represents meeting time(i.e. starting time & ending time).

Task is to "figure out, whether is it possible to attend all meetings or not".

Constraints
1. sp(Starting point) <= ep(Ending Point)
2. input is unsorted
3.  0 < n(Number of Meetings Scheduled) <= 10^4

Sample Input
5
1 3
8 10
7 8
9 15
2 6

Sample Output
false


// code


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;


public class Main{
    public static boolean meetingRooms(int intervals[][]){
        // write code here
        // sort on the basis of starting point
        Arrays.sort(intervals,(a,b) -> Integer.compare(a[0],b[0]));
        
        if(intervals.length == 0 || intervals.length == 1) return true;
        
        int ep = intervals[0][1];
        
        for(int idx = 1; idx < intervals.length; idx++){
            if(intervals[idx][0] < ep){
                return false; // meeting scheduling process failed
            }else{
                ep = intervals[idx][1];
            }
        }
        return true;
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
        boolean res = meetingRooms(input);
        System.out.println(res);
    }
}