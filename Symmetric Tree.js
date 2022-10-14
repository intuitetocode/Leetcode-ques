class Solution {
     public boolean isSymmetric(TreeNode root1,TreeNode root2) {
        if(root1==null&&root2==null){
            return true;
        }
         if(root1==null||root2==null){
             return false;
         }
         if(root1.val==root2.val){
             boolean  a = isSymmetric(root1.left,root2.right);
                  boolean  b= isSymmetric(root1.right,root2.left);
             return a&&b;
         }
         return false;
    }
    public boolean isSymmetric(TreeNode root) {
        if(root==null)return true;
        return isSymmetric(root.left,root.right);
    }
}
