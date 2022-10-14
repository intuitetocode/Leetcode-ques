class Solution {
    public int[][] largestLocal(int[][] grid) {
        ArrayList<ArrayList<Integer>>ans = new ArrayList<>();
        for(int i = 0;i+2<grid.length;i++){
            ans.add(new ArrayList<>());
            for(int j = 0;j+2<grid[0].length;j++){
                int max = Integer.MIN_VALUE;
                for(int parsei =0;parsei<3;parsei++){
                    for(int parsej = 0;parsej<3;parsej++){
                        max = Math.max(max,grid[i+parsei][j+parsej]);
                    }
                }
                ans.get(i).add(max);
            }
        }
        int a[][]= new int[ans.size()][ans.get(0).size()];
        for(int i = 0;i<ans.size();i++){
            for(int j = 0;j<ans.get(0).size();j++){
                a[i][j] = ans.get(i).get(j);
            }
        }
        return a;
    }
}
