Toppers Of Class

1. There is a class of N students and the task is to find the top K marks scorers. 
2. You need to print the index of the toppers of the class which will be same as the index of the student
 in the input array (use 0-based indexing). 
3. First print the index of the students having highest marks then the students with second highest 
and so on. If there are more than one students having same marks then print their indices in ascending order.
Suppose k = 2 and the students having highest marks have indices 0 and 5 and
 students having second highest marks have indices 6 and 7 then output will be 0 5 6 7.


Constraints
1 <= N <= 10^6
1 <= M <= 10^6

Sample Input
5
2 2 1 3 1
3

Sample Output
3 0 1 


// code nlogk

import java.util.*;
import java.io.*;

public class Main {
    
    public static class Pair implements Comparable<Pair>{
        int marks;
        int idx;
        
        Pair(int marks,int idx){
            this.marks = marks;
            this.idx = idx;
        }
        
        public int compareTo(Pair o){
            if(this.marks != o.marks){
                return this.marks - o.marks;
            }else{
                return o.idx - this.idx;
            }
        }
    }

  public static int[] kToppers(int[]marks, int k) {
    //write your code here
    PriorityQueue<Pair> pq = new PriorityQueue<>();
    
    for(int i = 0; i < marks.length; i++){
        if(pq.size() < k){
            pq.add(new Pair(marks[i],i));
        }else if(pq.peek().marks < marks[i]){
            pq.remove();
            pq.add(new Pair(marks[i],i));
        }
    }
    
    int ans[] = new int[k];
    int index = k - 1;
    
    while(index >= 0){
        ans[index] = pq.remove().idx;
        index--;
    }
    return ans;
  }

  public static void main(String[]args) {

    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int[]marks = new int[n];

    for (int i = 0; i < n; i++) {
      marks[i] = scn.nextInt();
    }

    int k = scn.nextInt();

    int[]ans = kToppers(marks, k);

    for (int i = 0; i < ans.length; i++) {
      System.out.print(ans[i] + " ");
    }

  }
}