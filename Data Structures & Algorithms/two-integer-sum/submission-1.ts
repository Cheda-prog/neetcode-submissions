class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let returner  : Array<number> = [];
        let map = new  Map<number , number>;

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i] , i);
        }

        
        for(let i = 0; i < nums.length; i++){
            if(map.has(target - nums[i]) ){

                let temp : number = map.get(target -nums[i])!;
                if(temp != i)
                {
                    returner.push(i);
                    returner.push(temp)
                    break;
                }

            }
        }

        return returner;
    }
}
