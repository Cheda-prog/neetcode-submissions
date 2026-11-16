class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        let returner : Array<number> =  [];
        let map = new Map<number, number>;
        let temp = 0;

        for(let i = 0; i < nums.length; i++){

            if(map.has(nums[i])){
                temp = map.get(nums[i])!;
                map.set(nums[i], temp+1);
            }else{
                map.set(nums[i] , 1);
            }
        }
        temp = 0; 
        let greatest = 0; 
        for(let i = 0; i < k; i++)
        {
            map.forEach((val , key) => {
            if(val > greatest)
            {
                greatest = val;
                temp = key;
            }
        });
            returner.push(temp);
            map.delete(temp);
            greatest =0; 
        }


        return returner;

    }
}
