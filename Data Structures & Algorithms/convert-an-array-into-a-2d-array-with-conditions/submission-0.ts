class Solution {
    /**
     * @param {number[]} spells
     * @return {number[]}
     */
    findMatrix(nums: number[]): number[][] {

            let map : Map<number, number> = new Map<number, number>();
            let retturner : number[][] = [];
            // make a hash 
            for(let i = 0 ;  i < nums.length; i++)
            {
                if(map.has(nums[i]))
                {
                    map.set(nums[i],( map.get(nums[i])! +1) );
                }else{
                     map.set(nums[i],1 );
                }
                
            }
            //let size = 0; 
            map.forEach((val , key) => {

                for(let i =0; i < val; i++){
                     if (i === retturner.length) retturner.push([]); 
                retturner[i].push(key);
                }
            })

            return retturner;
    }
}