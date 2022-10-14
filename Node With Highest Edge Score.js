class Solution {
    public int edgeScore(int[] edges) {
        long ans [] = new long[edges.length];
        int answer = 0;
        long val = 0;
        for(int i = 0;i<edges.length;i++){
            ans[edges[i]]+=i;
        }

          for(int i = 0;i<edges.length;i++){
            if(ans[i]>val){
                answer = i;
                val = ans[i];
            }
        }
        return answer;
        
    }
}
