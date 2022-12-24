Meeting Rooms I I

1. Question will be provided with "n" meeting-schedules. A meeting-schedule is defined as
 (sp,ep) i.e. sp --> starting point &  ep --> ending point of an meeting. 
 Some meeting-schedules may or maynot overlap each other.

2. MeetingIntervals[i] = [startingPointi,endingPointi]
3. A meeting-schedule represents meeting time(i.e. starting time & ending time).

Task is to "figure out, how many minimum number of meeting rooms are required to schedule all meetings?".

Example 1 : 
    Input : [[1,3],[2,4],[6,8],[10,14],[7,9]]
    Output : 2
    Explanation : Two meetings are scheduled are scheduled at a time i.e. 
    we require atleast 2 meeting rooms to schedule meetings.

Example 2 : 
    Input : [[1,3],[3,10],[12,20]]
    Output : 1
    Explanation : There is no meeting-schedule overlap i.e. 1 meetng room can do the trick.

Example 3 : 
    Input : [[1,3],[5,8],[10,19],[15,20],[9,9]]
    Output : 2.

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
    2


// code  sc-> O(n) bcz in worst case , may be every meeting for new room
// tc -> O(nlogn) bcz pq takes to put one element in (logn) , so n element for (nlogn)
 

import java.util.*;


public class Main {
  public static int meetingRooms(int intervals[][]) {
    // write your code here
    
    // sort on the basis of staring point
    Arrays.sort(intervals,(a,b) -> Integer.compare(a[0],b[0]));
    // min priority queue
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    
    for(int interval[] : intervals){
        if(pq.size() == 0){
            // first meeting
            pq.add(interval[1]);  // ending time
        }else{
            if(pq.peek() > interval[0]){
                pq.add(interval[1]);  // new room created
            }else{
                pq.remove();
                pq.add(interval[1]);  // old room has been used
            }
        }
    }
    return pq.size();
  }
  public static void main(String args[]) {
    Scanner scn = new Scanner(System.in);

    // Input Format
    int n = scn.nextInt();
    int input[][] = new int[n][2];

    for (int i = 0 ; i <  n ; i++) {
      int sp = scn.nextInt();
      int ep = scn.nextInt();

      input[i][0] = sp;
      input[i][1] = ep;
    }

    // Output Format
    System.out.println(meetingRooms(input));
  }
}