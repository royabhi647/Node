Best Meeting Point

1. A group of two or more people wants to meet and minimize the total travel distance.
2. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. 
3. Return min distance where distance is calculated using 'Manhattan Distance', where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

Input Format
[
    [1,0,0,0,1],
    [0,0,0,0,0],
    [0,0,1,0,0]
]

Output Format
6

Explanation:
The point (0,2) is an ideal meeting point, as the total travel distance of 2 + 2 + 2 = 6 is minimal. So return 6.

Constraints
1. Distance should me minimum

Sample Input
3 5
1 0 0 0 1
0 0 0 0 0
0 0 1 0 0

Sample Output
6

// code

import java.util.*;

public class Main {

    // ~~~~~~~~~~~~~~~~~User Section~~~~~~~~~~~~~~~~
    public static int minTotalDistance(int[][] grid) {
        // Write your code here
        // 1. Get x-coordinate -> row wise
        ArrayList<Integer> xcord = new ArrayList<>();
        for(int r = 0; r < grid.length; r++){
            for(int c = 0; c < grid[0].length; c++){
                if(grid[r][c] == 1){
                    xcord.add(r);
                }
            }
        }
        // 2. Get y-coordinate -> column wise
        ArrayList<Integer> ycord = new ArrayList<>();
        for(int c = 0; c < grid[0].length; c++){
            for(int r = 0; r < grid.length; r++){
                if(grid[r][c] == 1){
                    ycord.add(c);
                }
            }
        }
        // 3. Get mid -> best meeting point
        int x = xcord.get(xcord.size() / 2);
        int y = ycord.get(ycord.size() / 2);
        
        // 4. calculate distance -> min distance (because of median)
        int dist = 0;
        for(int xval : xcord){
            dist += Math.abs(x - xval);
        }
        for(int yval : ycord){
            dist += Math.abs(y - yval);
        }
        return dist;
    }

    // ~~~~~~~~~~~~~~~Input Management~~~~~~~~~~~~~~
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int m = scn.nextInt();


        int[][] grid = new int[n][m];

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                grid[i][j] = scn.nextInt();
            }
        }

        int dist = minTotalDistance(grid);
        System.out.println(dist);
    }
}