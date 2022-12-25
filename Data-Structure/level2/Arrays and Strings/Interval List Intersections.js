Interval List Intersections

1. Question will be provided with two Intervals Lists.
2. An interval is is defined as (sp,ep) i.e. sp --> starting point &  ep --> ending point of an interval
3. All intervals are closed in nature
4. Intervals[i] = [startingPointi,endingPointi]
5. Both interval lists are sorted in nature(sorted based upon starting time of each interval).

Task is to "find & print all intersection of intervals from both interval lists(intervals from list 1 & list 2).".

Example 1 : 
    list_1 : [[1,3]] 
    list_2 : [[2,5]]
    Output : [[2,3]]
    Explanation : interval from list 1 starts @ 1 & ends @ 3 where as interval from list 2 starts @ 2 & ends @ 5 thus intersection(time span common in intervals from both lists) is {2,3}.

Example 2 : 
    list_1 : [[1,3]] 
    list_2 : [[4,5]]
    Output : []
    Explanation : there is no common time-span(i.e. no intersection)  between intervals from both given list.

Example 3 : 
    list_1 : [[1,3] [5,10] [12,17]] 
    list_2 : [[2,4] [5,7] [9,13]]
    Output : [[2,3] [5,7] [9,10] [12,13]]


Constraints
1. sp(Starting point) <= ep(Ending Point)
2. both interval lists are sorted(based upon start-time)
3.  0 <= (Number of intervals in each list) <= 10^4
4. there are no overlapping intervals in their respective interval-list.

Sample Input
1
1 3
1
2 5

Sample Output
[[2, 3]]


// code


import java.util.*;

public class Main {
  public static int[][] intersection(int intervalList1[][], int intervalList2[][]) {
    // write your code here
    ArrayList<int[]> ans = new ArrayList<>();
    
    int ptr1 = 0;
    int ptr2 = 0;
    
    while(ptr1 < intervalList1.length && ptr2 < intervalList2.length){
        // current starting point
        // current ending point
        int cSP = Math.max(intervalList1[ptr1][0],intervalList2[ptr2][0]);
        int cEP = Math.min(intervalList1[ptr1][1],intervalList2[ptr2][1]);
        
        if(cSP <= cEP){
            int interval[] = {cSP,cEP};
            ans.add(interval);
        }
        
        if(intervalList1[ptr1][1] < intervalList2[ptr2][1]){
            ptr1++;
        }else{
            ptr2++;
        }
    }
    return ans.toArray(new int[ans.size()][]);
  }
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    // Input format
    int n = scn.nextInt();
    int list1[][] = new int[n][2];
    for (int i = 0 ; i < n ; i++) {
      list1[i][0] = scn.nextInt();
      list1[i][1] = scn.nextInt();
    }

    int m = scn.nextInt();
    int list2[][] = new int[m][2];
    for (int i = 0 ; i < m ; i++) {
      list2[i][0] = scn.nextInt();
      list2[i][1] = scn.nextInt();
    }

    // output
    int ans[][] = intersection(list1, list2);
    System.out.print("[");
    for (int interval[] : ans) {
      System.out.print(Arrays.toString(interval));
    }
    System.out.println("]");
  }
}
