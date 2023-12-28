class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int result = 1;
        int num = nums[0];
        int index = 1;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != num) {
                nums[index++] = nums[i];
                num = nums[i];
                result++;
            }
        }
        return result;
    }
}