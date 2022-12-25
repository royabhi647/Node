Insert Intervals

1. IntervalList & a newInterval will be given as input.
2. IntervalList is a sequence of sorted(on the basis of start time) & non-overlapping intervals.
3. any interval[i] (from IntervalList) = [startTime,endTime].
4. a newInterval will also be passed as input.

Task is to "Insert this newInterval to the given sorted IntervalList".
NOTE : Inserting this newInterval may lead to merging of intervals.

Example 1 : 
    IntervalList = [[1,5][8,10]]
    newInterval = [3,8]
    OUTPUT : [[1,10]].
    Explanation : after inserting newInterval (3,8) ,every interval can now be merged to (1,10).

Example 2 : 
    IntervalList = [[1,5][8,10]]
    newInterval = [3,6]
    OUTPUT : [[1,6][8,10]].

Example 3 :
    IntervalList = [[3,5][8,10]]
    newInterval = [1,2]
    OUTPUT : [[1,2][3,5][8,10]].
    
Example 4 : 
    IntervalList = []
    newInterval = [3,8]
    OUTPUT : [[3,8]].


Constraints
    1. Interval[i] = [startTime,endTime]
    2. 0 <= startTime <= endTime
    3. 0 <= length(IntervalList) <= 10^4
    4. newInterval = (startTime,endTime)
    5. length(newInterval) = 2;


Sample Input
    5
    1 5
    7 9
    10 13
    16 19
    20 25
    12 20

Sample Output
    [[1, 5][7, 9][10, 25]]


// code

import java.util.*;

public class Main {

  public static int[][] insertIntervals(int intervalList[][], int newInterval[]) {
    // write your code here
    ArrayList<int[]> ans = new ArrayList<>();
    int idx = 0;
    // 1st condition
    while(idx < intervalList.length){
        if(intervalList[idx][0] < newInterval[0]){
            ans.add(intervalList[idx]);
            idx++;
        }else{
            break;
        }
    }
    
      // 2nd condition
    
    if(ans.size() == 0 || (newInterval[0] > ans.get(ans.size()-1)[1])){
        ans.add(newInterval);
    }else{
        int lastInterval[] = ans.get(ans.size()-1);
        lastInterval[1] = Math.max(lastInterval[1],newInterval[1]);
    }
    
    // 3rd condition
    
    while(idx < intervalList.length){
        int lastInterval[] = ans.get(ans.size()-1);
        if(lastInterval[1] >= intervalList[idx][0]){
            // merging
            lastInterval[1] = Math.max(lastInterval[1],intervalList[idx][1]);
        }else{
            ans.add(intervalList[idx]);
        }
        idx++;
    }
    return ans.toArray(new int[ans.size()][]);
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    int intervalList[][] = new int[n][2];
    for (int i = 0 ; i < n ; i++) {
      int st = scn.nextInt();
      int et = scn.nextInt();

      intervalList[i][0] = st;
      intervalList[i][1] = et;
    }
    int newInterval[] = new int[2];
    newInterval[0] = scn.nextInt();
    newInterval[1] = scn.nextInt();

    int ans[][] = insertIntervals(intervalList, newInterval);

    System.out.print("[");
    for (int interval[] : ans) {
      System.out.print(Arrays.toString(interval));
    }
    System.out.println("]");

  }
}