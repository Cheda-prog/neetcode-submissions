class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numberOfMatches(n: number): number {
        let count : number = 0
        if(n === 0 || n === 1)
            return 0;

        while(n > 1)
        {
            count += Math.floor(n /2); 
            n = Math.ceil(n / 2);
            console.log(n  + "  " + count); 

        }
        return count ;
    }
}
