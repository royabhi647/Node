79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
 horizontally or vertically neighboring. The same letter cell may not be used more than once.

 
 
Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?




// pepcoding code
class Solution {
    int[] di = {-1,0,1,0};  // row-> up, left, down, right
    int[] dj = {0,-1,0,1};  // col-> up, left, down, right

    public boolean explore(char[][]board, int i, int j, int si, String s){
        if(si == s.length()) return true;
        if(i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;

        if(s.charAt(si) != board[i][j]) return false;
        
        char myChar = board[i][j];
        board[i][j] = '@';
        for(int d = 0; d < 4; d++){
            boolean res = explore(board, i+di[d], j+dj[d], si+1, s);
            if(res){
                board[i][j] = myChar;
                return true;
            }
        }
        board[i][j] = myChar;
        return false;
    }
    public boolean exist(char[][] board, String word) {
        int n = board.length;
        int m = board[0].length;

        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(board[i][j] != word.charAt(0)) continue;
                boolean res = explore(board,i,j,0,word);
                if(res) {
                    return res;
                }
            }
        }
        return false;
    }
}




// code


class Solution {
    public boolean exist(char[][] board, String word) {
        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
                if((board[i][j]==word.charAt(0)) && dfs(board,i,j,0,word)){
                    return true;
                }
            }
        }
         return false;
    }
    public boolean dfs(char[][]board,int i,int j,int count,String word){
        if(count == word.length()){
            return true;
        }
        if(i<0 || i==board.length || j<0 || j==board[0].length || board[i][j]!=word.charAt(count)){
            return false;
        }
        char temp = board[i][j];
        board[i][j]='*';

        boolean found = dfs(board,i+1,j,count+1,word) ||
                        dfs(board,i-1,j,count+1,word) ||
                        dfs(board,i,j+1,count+1,word) ||
                        dfs(board,i,j-1,count+1,word);

        board[i][j]=temp;
        return found;
    }
}