class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    
        let map : Set<Number> = new Set<Number>;

        for(let  i = 0; i < nums.length; i++)
        {
            if(map.has(nums[i]))
            {
                return true;
            }else {
                console.log(nums[i]);
               map.add(nums[i]);
            }
        }

        return false;
    }
}


