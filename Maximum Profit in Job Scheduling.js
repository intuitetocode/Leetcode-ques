class Solution {
    
    private class Job {
        int st;
        int et;
        int profit;
        
        public Job(int start, int end, int profit) {
            this.st = start;
            this.et = end;
            this.profit = profit;
        }
    }
    
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int len = startTime.length;
        Job[] jobs = new Job[len];
        for(int i=0; i<len; i++) {
          jobs[i]= new Job(startTime[i], endTime[i], profit[i]);
        }
        
        

        Arrays.sort(jobs,(i1,i2) -> i1.st - i2.st);
        int dp[] = new int[jobs.length+1];
        for(int i=jobs.length-1; i>=0; i--) {
            dp[i] = jobs[i].profit;
            for(int j=i+1; j<jobs.length; j++) {
                if (jobs[i].et <= jobs[j].st) {
                    dp[i] += dp[j];
                    break;
                } 
            }
            dp[i] = Math.max(dp[i], dp[i+1]);
        }
        
        return dp[0];
    }
}
