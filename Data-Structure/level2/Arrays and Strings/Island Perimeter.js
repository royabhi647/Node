Island Perimeter

1. You will be given a matrix, 2d Array and number of its columns and rows.
 2. Matrix represents a grid, where 1 is land and 0 is water. 
 3. Each tile/element has 1 as width and height.
 4. You need to find perimeter of the island formed by land.
 5. Input and output is handled for you
 6. It is a functional problem, please do not modify main()

 Constraints
Grid only contains 1 and 0, 0 is water and 1 is land

Sample Input
4 3
1 0 0 
1 1 1 
0 1 0 
0 1 0

Sample Output
14


// code


import java.io.*;
import java.util.*;

public class Main {
  public static int islandPerimeter(int[][] grid) {
    //Code Here
        int perimeter = 0;
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                // grid found
                if(grid[i][j] == 1){
                    perimeter += 4;

                    // check upper is grid or not
                    if(i > 0 && grid[i - 1][j] == 1){
                        perimeter -= 2;
                    }

                    // check left is grid or not
                    if(j > 0 && grid[i][j - 1] == 1){
                        perimeter -= 2;
                    }
                }
            }
        }
        return perimeter;

    }

  public static void main(String args[]) throws IOException {
    Scanner sc = new Scanner(System.in);
    int row = sc.nextInt();
    int col = sc.nextInt();

    int[][] grid = new int[row][col];

    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        grid[i][j] = sc.nextInt();
      }
    }

    System.out.println(islandPerimeter(grid));
  }
}