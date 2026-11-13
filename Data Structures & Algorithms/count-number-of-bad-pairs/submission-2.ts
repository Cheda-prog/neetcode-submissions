class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    countBadPairs(nums: number[]): number {
        let returner = (nums.length ** 2 - nums.length) / 2;   // total pairs, same as yours
        const map = new Map<number, number>();

        for (let j = 0; j < nums.length; j++) {
            const key = nums[j] - j;
            const seen = map.get(key) ?? 0;   // earlier indices with the same key
            returner -= seen;                 // each one is a good pair with j
            map.set(key, seen + 1);
        }
        
        return returner;
    }
}
