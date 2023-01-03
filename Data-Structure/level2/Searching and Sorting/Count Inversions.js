Count Inversions

1. Given an array of integers. Find the Inversion Count in the array. 
2. For an array, inversion count indicates how far (or close) the array is from being sorted. 
    If array is already sorted then the inversion count is 0. If an array is sorted in 
    the reverse order then the inversion count is the maximum. 
3. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

Constraints
1 <= N <= 10^5
1 <= arr[i] <= 10^6

Sample Input
5
2 4 1 3 5

Sample Output
3


// code using merge sort nlogn
import java.util.*;
import java.io.*;

public class Main {
    static int count = 0;
    public static void main(String[]args) {
        //write your code here
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int arr[] = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = scn.nextInt();
        }
        mergeSort(arr,0,n-1);
        System.out.println(count);
    }
    
    public static int[] merge2SortedArrays(int left[], int right[]){
        int i = 0;
        int j = 0;
        int k = 0;
        int merged[] = new int[left.length + right.length];
        
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                merged[k] = left[i];
                i++;
                k++;
            }else{
                count += (left.length - i);
                merged[k] = right[j];
                k++;
                j++;
            }
        }
        
        while(i < left.length){
            merged[k] = left[i];
            i++;
            k++;
        }
        
        while(j < right.length){
            merged[k] = right[j];
            j++;
            k++;
        }
        
        return merged;
    }
    
    public static int[] mergeSort(int arr[], int low, int high){
        if(low == high){
            int ba[] = new int[1];
            ba[0] = arr[low];
            return ba;
        }
        
        int mid = (low + high) / 2;
        
        int left[] = mergeSort(arr, low, mid);
        int right[] = mergeSort(arr, mid+1, high);
        
        int merged[] = merge2SortedArrays(left, right);
        
        return merged;
    }
}