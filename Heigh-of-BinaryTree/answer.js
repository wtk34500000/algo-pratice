import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;

    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {

    /*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
    public static int height(Node root) {
        // Write your code here.
        if (root == null) {
            return -1;
        }

        int left = 1 + height(root.left);
        int right = 1 + height(root.right);

        return left > right ? left : right;
    }