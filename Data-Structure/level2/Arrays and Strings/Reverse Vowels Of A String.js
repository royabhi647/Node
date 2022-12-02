Reverse Vowels Of A String

1. Given a string 's'.
2. Reverse only all the vowels in the string and return it.
3. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Input Format
s = "hello"
s = "PepCoding"

Output Format
res = "holle"
res = "PipCodeng"

Constraints
1. 1 <= s.length() <= 10^5
2. String consist of printable ASCII characters.

Sample Input
hello

Sample Output
holle

// code

import java.util.*;

public class Main {
  // ~~~~~~~~~~~~~~User Section~~~~~~~~~~~~
  public static void swap(char arr[],int left,int right){
      char temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  }
  public static boolean isVowel(char[] arr, int idx){
      char ch = arr[idx];
      
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ||
        ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
            return true;
        }
        return false;
  }
  public static String reverseVowels(String s) {
    // write your code here
    char[] arr = s.toCharArray();
    
    int left = 0;
    int right = arr.length - 1;
    
    while(left < right){
        // left -> vowel
        while(left < right && isVowel(arr,left) == false){
            left++;
        }
        // right -> vowel
        while(left < right && isVowel(arr,right) == false){
            right--;
        }
        // swap 
        swap(arr,left,right);
        left++;
        right--;
    }
    String str = "";
    for(char ch : arr){
        str += ch;
    }
    return str;
  }

  // ~~~~~~~~~~~~Input Management~~~~~~~~~~
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String str = scn.nextLine();

    String res = reverseVowels(str);
    System.out.println(res);
  }
}
