class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
rotate(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;
    const tail = nums.slice(n - k);      // last k elements -> go to the front
    const head = nums.slice(0, n - k);   // the rest -> go after them

    for (let i = 0; i < n; i++) {
        nums[i] = i < k ? tail[i] : head[i - k];
    }
}

}