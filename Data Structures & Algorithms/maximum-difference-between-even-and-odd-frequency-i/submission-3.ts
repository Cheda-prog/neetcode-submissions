class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {
        let returner : number = 0; 


        // get a list of tht highest odd and even letters
        // subtract them with abs
        // return that
        let map = new Map<string, number>
        

        // get the list 
        for(let i = 0; i < s.length; i++)
        {
            if(map.has(s[i]))
            {
               let  temp = map.get(s[i])!;
               map.set(s[i] , temp +1);
            }else {
                map.set(s[i] ,1 );
            }
        }

        let maxodd = 0;
        let mineven = Number.MAX_VALUE;
                map.forEach( (value ) => {
           if(value % 2 === 0){
            // even 
            if(value < mineven){
                mineven = value;
            }
            }else{
            // odd
                if(value > maxodd)
                {
                    maxodd = value
                }
            }
        }   
        )

        return maxodd - mineven; 

    }
}
