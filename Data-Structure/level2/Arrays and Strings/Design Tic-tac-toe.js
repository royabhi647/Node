Design Tic-tac-toe

Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves are allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
Implement the TicTacToe class:

TicTacToe(int n) Initializes the object the size of the board n.
int move(int row, int col, int player) Indicates that the player with
 id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.

 Constraints
1. 2 <= n <= 100
2. player is 1 or 2.
3.0 <= row, col < n
4. (row, col) are unique for each different call to move.
5. At most 2^n calls will be made to move.

Sample Input
3
0 0 1    // row,col,move
0 2 2
2 2 1
1 1 2
2 0 1
1 0 2
2 1 1

Sample Output
0
0
0
0
0
0
1


// code


import java.util.*;
import java.io.*;

public class Main {

  static class TicTacToe {
      int n;
      int row[];
      int col[];
      int diag = 0;  // 1st diagonal
      int adiag=0;  // reverse diagonal
    public TicTacToe(int n) {
      // initialize data members
      this.n = n;
      row = new int[n];
      col = new int[n];
    }
    public int move(int r, int c, int player) {
        int inc = 1; // increment
        
        if(player == 2) {
            inc = -1;
        }
        // 1st condition
        row[r] += inc;
        if(row[r] == n || row[r] == -n){
            return player;
        }
        
        // 2nd condition
        col[c] += inc;
        if(col[c] == n || col[c] == -n){
            return player;
        }
        
        // 3rd condition
        if(r == c){
            diag += inc;
            if(diag == n || diag == -n) {
                return player;
            }
        }
        
        // 4th condition
        if(r + c == n - 1){
            adiag += inc;
            if(adiag == n || adiag == -n){
                return player;
            }
        }
        return 0;
    }
  }
  public static void main(String[] args) throws java.lang.Exception {

    Scanner scn = new Scanner(System.in);

    int n = scn.nextInt();

    TicTacToe obj = new TicTacToe(n);
    for (int i = n* n; i >= 1; i--) {
      int ans = obj.move(scn.nextInt(), scn.nextInt(), scn.nextInt());

      System.out.println(ans);
      if (ans != 0)break;
    }
  }
}
