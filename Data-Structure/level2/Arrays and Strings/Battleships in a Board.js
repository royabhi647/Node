419. Battleships in a Board

// code

class Solution {
    public int countBattleships(char[][] board) {
        int m = board.length;
        int n = board[0].length;
        int ans = 0;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(board[i][j]=='X'){
                    // 1st condition i and j are 0
                    if(i==0 && j==0){
                        ans++;
                        // 2nd condition i is 0 , check left is dot or X
                    }else if(i==0){
                        if(board[i][j-1] != 'X'){
                            ans++;
                        }
                        // 3rd condition j is 0 , check upper is dot or X
                    }else if(j==0){
                        if(board[i-1][j] != 'X'){
                            ans++;
                        }
                    }else{
                        // 4th condition left and upper both are dot or X
                        if(board[i][j-1] != 'X' && board[i-1][j] != 'X'){
                            ans++;
                        }
                    }
                }
            }
        }
        return ans;
    }
}